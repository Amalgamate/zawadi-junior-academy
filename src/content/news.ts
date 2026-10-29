import { images, ImageSpec } from "./images";

/**
 * NEWS POSTS: add, edit or delete entries below. Newest first is not required; they are sorted by date.
 * `draft: true` shows a "Demonstration post" label. These seeded posts are NOT real announcements.
 * Delete them (and set the array to []) before launch, or replace with real posts.
 * `body` is an array of paragraphs.
 */
export interface Post {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  category: "Announcements" | "School Life" | "Admissions" | "Transport";
  summary: string;
  body: string[];
  image: ImageSpec;
  draft?: boolean;
}

export const posts: Post[] = [
  {
    slug: "sample-admissions-announcement",
    title: "Sample post: how admissions announcements will appear",
    date: "2026-01-01",
    category: "Admissions",
    summary: "A demonstration of how the school can share admissions updates with families.",
    body: [
      "This is a demonstration post showing the layout of an announcement. It is not a real school notice.",
      "Once the school supplies real news, this post should be deleted from src/content/news.ts.",
    ],
    image: images.news,
    draft: true,
  },
  {
    slug: "sample-school-life-story",
    title: "Sample post: sharing a moment from school life",
    date: "2026-01-02",
    category: "School Life",
    summary: "A demonstration of a school life story with a featured image and a short summary.",
    body: [
      "This is a demonstration post showing how stories from school life can be presented.",
      "No real event is described here. Replace it with genuine school news and approved photographs.",
    ],
    image: images.news,
    draft: true,
  },
];

export const categories = ["All", "Announcements", "School Life", "Admissions", "Transport"] as const;

export const formatDate = (iso: string): string =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
