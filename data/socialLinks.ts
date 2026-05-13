export type SocialPlatform = "instagram" | "youtube" | "tiktok" | "facebook";

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  handle: string;
  href: string;
};

export const socialLinks: SocialLink[] = [
  {
    platform: "instagram",
    label: "Instagram",
    handle: "sawa.ensemble",
    href: "https://www.instagram.com/sawa.ensemble"
  },
  {
    platform: "youtube",
    label: "YouTube",
    handle: "SAWA Ensemble",
    href: "https://www.youtube.com/@sawaensemble"
  },
  {
    platform: "tiktok",
    label: "TikTok",
    handle: "sawa.ensemble",
    href: "https://www.tiktok.com/@sawa.ensemble"
  },
  {
    platform: "facebook",
    label: "Facebook",
    handle: "sawa.ensemble",
    href: "https://www.facebook.com/sawa.ensemble"
  }
];
