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
    slug: "celebrating-pp2-graduation-ceremony",
    title: "Celebrating Our PP2 Graduation: Rising and Shining into Grade 1",
    date: "2026-10-30",
    category: "School Life",
    summary: "A memorable celebration as our PP2 learners graduated with honors, ready to embark on their primary school journey.",
    body: [
      "Zawadi Junior Academy celebrated a joyous and colorful milestone as our PP2 class graduated in their ceremonial caps and gowns.",
      "The ceremony was graced by proud parents, dedicated teachers, and the wider school community. Our young graduates presented heartwarming poems, choral performances, and demonstrated the confidence they have built throughout their early years.",
      "Congratulations to the graduating class of PP2! We are excited to welcome you into Grade 1 as you continue to Rise & Shine.",
    ],
    image: {
      src: "/media/graduation/pp2-grad-01.jpg",
      alt: "Zawadi Junior Academy PP2 Graduation Ceremony",
      label: "PP2 Graduation Ceremony",
      w: 1600,
      h: 1067,
    },
  },
  {
    slug: "term-dates-and-admissions-open",
    title: "Admissions Open for Play Group, Pre-Primary and Primary Grades",
    date: "2026-10-25",
    category: "Admissions",
    summary: "Join the Zawadi family in Isiolo. We welcome new learners from Play Group to Grade 9.",
    body: [
      "Admissions for upcoming terms are ongoing at Zawadi Junior Academy in Isiolo.",
      "We provide a nurturing, learner-centered environment with modern CBC curriculum implementation, dedicated teachers, and reliable school transport.",
      "Parents and guardians are encouraged to get in touch or visit the school behind St. Paul Kiwanjani Sec School.",
    ],
    image: images.news,
  },
];

export const categories = ["All", "Announcements", "School Life", "Admissions", "Transport"] as const;

export const formatDate = (iso: string): string =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
