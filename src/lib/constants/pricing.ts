import { PricingPlan } from "@/types";

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter Studio",
    price: 19,
    originalPrice: 39,
    credits: 40,
    headshotsCount: 40,
    stylesIncluded: 2,
    features: [
      "40 HD Studio-Grade Portraits",
      "Choice of 2 Signature Styles",
      "High-Res 4K Download Ready",
      "Standard Generation Speed (3-5 min)",
      "LinkedIn & CV Format Exports",
    ],
    cta: "Start with 40 Portraits",
  },
  {
    id: "executive",
    name: "Executive Suite",
    price: 35,
    originalPrice: 79,
    credits: 100,
    popular: true,
    badge: "Best Value • 65% Choose This",
    headshotsCount: 100,
    stylesIncluded: 5,
    features: [
      "100 Ultra-HD Bespoke Portraits",
      "Access to ALL 5 Signature Styles",
      "Priority GPU Processing (<60 sec)",
      "LinkedIn Circle Avatar Live Previewer",
      "Commercial Usage Rights Included",
      "AI Blemish & Micro-Lighting Refine",
    ],
    cta: "Get Executive Suite",
  },
  {
    id: "founder-vip",
    name: "Founder VIP",
    price: 59,
    originalPrice: 129,
    credits: 200,
    badge: "Full Access",
    headshotsCount: 200,
    stylesIncluded: 10,
    features: [
      "200 Master-Level 8K Portraits",
      "Unlimited Style Variations",
      "Ultra-Priority Turbo Cluster",
      "VIP 1-on-1 Prompt Tuning Assistant",
      "Full Credit Carryover to Passport & Visa Tools",
      "Lifetime Commercial License",
    ],
    cta: "Unlock VIP Access",
  },
];

export const FAQ_ITEMS = [
  {
    question: "How does Facesome keep my likeness authentic and natural?",
    answer:
      "Unlike generic filters, Facesome utilizes cutting-edge identity-preserving neural diffusion. We extract biometric structural landmarks from your uploaded photo to preserve your unique bone structure, eye shape, and smile, while synthesizing custom bespoke outfits and master-class studio lighting.",
  },
  {
    question: "What kind of photos should I upload for the best results?",
    answer:
      "Upload 1 to 5 clear, recent candid photos or selfies. Natural indoor/outdoor lighting, different angles, and neutral expressions work best. Avoid heavy sunglasses, hats, or extreme filters.",
  },
  {
    question: "Can I use these portraits on LinkedIn, resume, and corporate websites?",
    answer:
      "Yes! You own 100% of the commercial rights to all generated photos. They are formatted and color-calibrated specifically to stand out on LinkedIn, Forbes, team pages, and conference programs.",
  },
  {
    question: "What happens if I'm not satisfied with the output?",
    answer:
      "Every package comes with a 100% Satisfaction Guarantee. If the generation doesn't meet your expectations, we offer free re-rolls or a prompt refund within 14 days.",
  },
  {
    question: "Can my remaining credits be used on other Facesome modules later?",
    answer:
      "Absolutely. Your Facesome Credits are universal across the entire platform. Any unused credits can be applied toward our upcoming Global Passport/Visa photo tools and Aesthetic Facial Reports.",
  },
];
