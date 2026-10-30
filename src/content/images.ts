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
  hero: { src: "/media/school-photo-24.jpg", alt: "Zawadi Junior Academy learners in their bright school uniform outdoors", label: "HERO: School learners in vibrant uniform", w: 1600, h: 1066 },
  welcome: { src: "/media/school-photo-01.jpg", alt: "A joyful Zawadi Junior Academy learner in school uniform", label: "WELCOME: smiling Zawadi learner", w: 1200, h: 1600 },
  academicsPlay: { src: "/media/school-photo-04.jpg", alt: "Early years and primary learners active in learning at Zawadi", label: "ACADEMICS: Play Group & primary learners", w: 1600, h: 1200 },
  academicsGrades: { src: "/media/school-photo-07.jpg", alt: "Dedicated learners participating actively in class at Zawadi Junior Academy", label: "ACADEMICS: Junior Academy learning activity", w: 1600, h: 1200 },
  about: { src: "/media/school-photo-26.jpg", alt: "The school grounds and vibrant community of Zawadi Junior Academy", label: "ABOUT: school community & grounds", w: 1600, h: 1066 },
  life1: { src: "/media/school-photo-27.jpg", alt: "Learners focused on academic lessons in class", label: "SCHOOL LIFE: focused classroom learning", w: 1600, h: 1066 },
  life2: { src: "/media/school-photo-28.jpg", alt: "Creative activities, presentations and performance by learners", label: "SCHOOL LIFE: creativity & expression", w: 1600, h: 1066 },
  life3: { src: "/media/school-photo-30.jpg", alt: "Outdoor fun and recreation at Zawadi Junior Academy", label: "SCHOOL LIFE: outdoor activity & games", w: 1600, h: 1066 },
  life4: { src: "/media/school-photo-31.jpg", alt: "Zawadi learners coming together as a vibrant school family", label: "SCHOOL LIFE: school community & events", w: 1600, h: 1200 },
  transport: { src: "/media/school-photo-14.jpg", alt: "School transport and arrival at Zawadi Junior Academy in Isiolo", label: "TRANSPORT: school van & transport", w: 1599, h: 720 },
  admissions: { src: "/media/school-photo-02.jpg", alt: "Welcoming students and families to Zawadi Junior Academy", label: "ADMISSIONS: student enrollment & welcome", w: 1200, h: 1600 },
  news: { src: "/media/school-photo-32.jpg", alt: "Special moments and highlights from Zawadi Junior Academy", label: "NEWS: latest school news & events", w: 1600, h: 1200 },
} satisfies Record<string, ImageSpec>;
