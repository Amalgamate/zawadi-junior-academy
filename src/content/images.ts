/**
 * CENTRAL IMAGE REGISTRY
 * No photographs have been supplied yet, so every slot shows a labelled placeholder.
 * To use a real photo: put the file in /public/images/ and set `src`, e.g. "/images/hero.jpg".
 * Only use photos the school owns or has permission to publish (especially of children).
 */
export interface ImageSpec {
  src?: string; // e.g. "/images/hero.jpg"
  alt: string; // describe the real photo once supplied
  label: string; // shown on the placeholder; tells you what photo belongs here
  w: number;
  h: number;
}

export const images = {
  hero: { src: "/images/hero.jpg", alt: "Learners engaged in a classroom activity", label: "HERO: wide classroom/learning scene, space on the left for text", w: 1920, h: 1080 },
  welcome: { src: "/images/welcome.jpg", alt: "Learners and teacher working together", label: "WELCOME: warm learner-and-teacher moment", w: 1000, h: 1250 },
  academicsPlay: { src: "/images/academics-play.jpg", alt: "Young learners at play group", label: "ACADEMICS: Play Group activity", w: 1200, h: 800 },
  academicsGrades: { src: "/images/academics-grades.jpg", alt: "Learners in the upper grades", label: "ACADEMICS: older learners collaborating", w: 1200, h: 800 },
  about: { src: "/images/about.jpg", alt: "The Zawadi school community", label: "ABOUT: school community / building exterior", w: 1400, h: 933 },
  life1: { src: "/images/life-learning.jpg", alt: "Learners in a lesson", label: "SCHOOL LIFE: learning activity", w: 1200, h: 900 },
  life2: { src: "/images/life-creativity.jpg", alt: "Learners creating something together", label: "SCHOOL LIFE: creativity", w: 1200, h: 900 },
  life3: { src: "/images/life-outdoor.jpg", alt: "Learners playing outdoors", label: "SCHOOL LIFE: physical activity", w: 1200, h: 900 },
  life4: { src: "/images/life-community.jpg", alt: "Learners and families together", label: "SCHOOL LIFE: community", w: 1200, h: 900 },
  transport: { src: "/images/transport.jpg", alt: "School transport", label: "TRANSPORT: school vehicle (only the school's own)", w: 1400, h: 933 },
  admissions: { src: "/images/admissions.jpg", alt: "Parent and teacher talking", label: "ADMISSIONS: parent meeting staff", w: 1400, h: 933 },
  news: { src: "/images/news.jpg", alt: "School news", label: "NEWS: default article image", w: 1200, h: 800 },
} satisfies Record<string, ImageSpec>;
