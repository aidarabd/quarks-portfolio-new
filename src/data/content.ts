import type { FlowNode } from "@/components/ui/FlowDiagram";

export type Project = {
  slug: string;
  tag: string;
  title: string;
  year: string;
  cover: string;
  coverVideo?: string;
  overview: string;
  problem: string;
  solution: string;
  tech: string[];
  results: { metric: string; label: string }[];
  flow?: FlowNode[];
  url?: string;
};

type ProjectMeta = {
  slug: string;
  year: string;
  cover: string;
  coverVideo?: string;
  url?: string;
};

// Order must match the "Projects" array in messages/*.json
export const projectsMeta: ProjectMeta[] = [
  {
    slug: "on-road-networks",
    year: "2023",
    cover: "/images/work/on-road-networks.webp",
    url: "https://onroadnetworks.com",
  },
  {
    slug: "diyar",
    year: "2023",
    cover: "/images/work/diyar.jpg",
    url: "https://diyar.kg",
  },
  {
    slug: "kit-forum",
    year: "2022",
    cover: "/images/work/kit-forum.jpg",
    coverVideo: "/videos/kit-forum.mp4",
    url: "https://kit-forum.kg",
  },
  {
    slug: "atria",
    year: "2022",
    cover: "/images/work/atria.jpg",
    url: "https://atria.kg",
  },
  {
    slug: "finipay",
    year: "2021",
    cover: "/images/work/finipay.jpg",
    url: "https://finipay.kg",
  },
  {
    slug: "booka",
    year: "2021",
    cover: "/images/work/booka.jpg",
    url: "https://booka.life",
  },
  {
    slug: "tinlake",
    year: "2024",
    cover: "/images/work/tinlake.png",
    url: "https://t.me/tinlake_bot",
  },
  {
    slug: "coin-app",
    year: "2024",
    cover: "/images/work/coin-app.webp",
    url: "https://t.me/coin_app_bot",
  },
];

type ProjectText = {
  tag: string;
  title: string;
  overview: string;
  problem: string;
  solution: string;
  tech: string[];
  results: { metric: string; label: string }[];
  flow?: FlowNode[];
};

export function mergeProjects(items: ProjectText[]): Project[] {
  return projectsMeta.map((meta, i) => ({
    ...meta,
    ...items[i],
  }));
}

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  photo?: string;
};

// Order must match the "Team" array in messages/*.json
const teamPhotos: (string | undefined)[] = [
  "/images/team/aidar.jpg",
  undefined,
  "/images/team/arzybek.jpg",
  undefined,
  "/images/team/gulnur.jpg",
];

type TeamText = {
  name: string;
  role: string;
  bio: string;
  specialties: string[];
};

export function mergeTeam(items: TeamText[]): TeamMember[] {
  return items.map((item, i) => ({ ...item, photo: teamPhotos[i] }));
}
