export type ModuleType = "headshots" | "passport" | "glowup" | "faceswap";

export interface FeatureModule {
  id: ModuleType;
  title: string;
  tagline: string;
  badge?: string;
  href: string;
  status: "live" | "beta" | "coming-soon";
  creditsCost: number;
  description: string;
  iconName: string;
}

export type StyleGender = "neutral" | "masculine" | "feminine";

export type StyleCategory =
  | "executive"
  | "tech"
  | "creative"
  | "academic"
  | "glamour";

export interface HeadshotStyle {
  id: string;
  title: string;
  category: StyleCategory;
  description: string;
  badge?: string;
  suitableFor: string[];
  outfit: string;
  lighting: string;
  background: string;
  previewUrl: string;
  promptSnippet: string;
  aspectRatio: "1:1" | "4:5" | "16:9";
}

export interface ResultPhoto {
  id: string;
  url: string;
  highResUrl?: string;
  styleId: string;
  liked?: boolean;
  aspectRatio: string;
  createdAt: string;
}

export interface GenerationJob {
  id: string;
  userId?: string;
  status: "idle" | "uploading" | "queued" | "processing" | "completed" | "failed";
  progress: number;
  stageMessage?: string;
  styleId: string;
  gender: StyleGender;
  inputPhotoUrl?: string;
  resultPhotos: ResultPhoto[];
  error?: string;
  createdAt: string;
  completedAt?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number; // in USD
  originalPrice?: number;
  credits: number;
  popular?: boolean;
  badge?: string;
  headshotsCount: number;
  stylesIncluded: number;
  features: string[];
  cta: string;
}

export interface UserCredits {
  balance: number;
  lifetimeUsed: number;
  tier: "free" | "pro" | "executive";
}
