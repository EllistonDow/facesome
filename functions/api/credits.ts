interface Env {
  DB?: any;
}

export const onRequestGet = async (context: { request: Request; env: Env }) => {
  try {
    const { request, env } = context;
    const url = new URL(request.url);
    const userId = url.searchParams.get("userId") || "demo-user";

    let balance = 100;
    let lifetimeUsed = 20;

    if (env.DB) {
      try {
        const row = await env.DB.prepare(
          "SELECT balance, lifetime_used as lifetimeUsed FROM user_credits WHERE user_id = ? LIMIT 1"
        )
          .bind(userId)
          .first();

        if (row) {
          balance = row.balance;
          lifetimeUsed = row.lifetimeUsed;
        }
      } catch (err) {
        console.warn("[D1 Binding] Credit query error:", err);
      }
    }

    return new Response(
      JSON.stringify({
        userId,
        balance,
        lifetimeUsed,
        tier: "executive",
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error?.message || "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
