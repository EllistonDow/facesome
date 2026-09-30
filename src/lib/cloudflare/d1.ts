/**
 * Cloudflare D1 Database Client
 * Interacts with D1 SQLite database instance provisioned via `cf d1`.
 */

export interface UserCredits {
  userId: string;
  balance: number;
  lifetimeUsed: number;
}

export interface GenerationRecord {
  id: string;
  userId: string;
  styleId: string;
  status: string;
  photoUrls: string[];
  promptArchetype?: string;
  createdAt: string;
}

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID || "3c79e6ae374b917afed4a7aa8625b8d4";
const DATABASE_ID = process.env.CLOUDFLARE_D1_DATABASE_ID || "33f9721f-08da-4d5c-8d60-077371b2db73";
const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;

/**
 * Execute SQL query against Cloudflare D1
 */
export async function queryD1<T = any>(sql: string, params: any[] = []): Promise<T[]> {
  // If running in Cloudflare Pages / Workers runtime with binding DB
  // @ts-ignore
  if (typeof process !== "undefined" && (process.env as any).DB) {
    // @ts-ignore
    const stmt = (process.env as any).DB.prepare(sql).bind(...params);
    const result = await stmt.all();
    return result.results as T[];
  }

  // If running in Node.js serverless route with Cloudflare API Token
  if (API_TOKEN) {
    try {
      const response = await fetch(
        `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/d1/database/${DATABASE_ID}/query`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ sql, params }),
        }
      );

      const data = await response.json();
      if (data.success && data.result?.[0]?.results) {
        return data.result[0].results as T[];
      }
    } catch (err) {
      console.error("[D1 Client] Remote query error:", err);
    }
  }

  // Graceful fallback during local preview / development without API Token
  return [];
}

/**
 * Fetch credits for a given user
 */
export async function getUserCredits(userId: string): Promise<UserCredits> {
  const rows = await queryD1<UserCredits>(
    "SELECT user_id as userId, balance, lifetime_used as lifetimeUsed FROM user_credits WHERE user_id = ? LIMIT 1",
    [userId]
  );

  if (rows && rows.length > 0) {
    return rows[0];
  }

  // Default demo / initial free trial state
  return {
    userId,
    balance: 40,
    lifetimeUsed: 0,
  };
}

/**
 * Deduct credits upon generating headshots
 */
export async function deductUserCredits(userId: string, count: number): Promise<boolean> {
  const current = await getUserCredits(userId);
  if (current.balance < count) {
    return false;
  }

  await queryD1(
    `INSERT INTO user_credits (user_id, balance, lifetime_used, updated_at)
     VALUES (?, ?, ?, CURRENT_TIMESTAMP)
     ON CONFLICT(user_id) DO UPDATE SET
       balance = balance - ?,
       lifetime_used = lifetime_used + ?,
       updated_at = CURRENT_TIMESTAMP`,
    [userId, current.balance - count, current.lifetimeUsed + count, count, count]
  );

  return true;
}
