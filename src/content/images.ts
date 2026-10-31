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
  welcome: { src: "/media/school-photo-03.jpg", alt: "A joyful Zawadi Junior Academy learner in school uniform", label: "WELCOME: smiling Zawadi learner", w: 1200, h: 1600 },
  academicsPlay: { src: "/media/graduation/pp2-grad-08.jpg", alt: "Early years graduation and learning achievement at Zawadi Junior Academy", label: "ACADEMICS: Play Group & early years learners", w: 1600, h: 1067 },
  academicsGrades: { src: "/media/school-photo-07.jpg", alt: "Dedicated learners participating actively in class at Zawadi Junior Academy", label: "ACADEMICS: Junior Academy learning activity", w: 1600, h: 1200 },
  about: { src: "/media/school-photo-26.jpg", alt: "The school grounds and vibrant community of Zawadi Junior Academy", label: "ABOUT: school community & grounds", w: 1600, h: 1066 },
  life1: { src: "/media/school-clay-modeling.jpg", alt: "Early years learners exploring numbers and letters with modeling clay at Zawadi", label: "SCHOOL LIFE: hands-on learning & modeling clay", w: 780, h: 1040 },
  life2: { src: "/media/school-art-workshop.jpg", alt: "Hands-on creative arts: learners painting geometric patterns with sponges and brushes", label: "SCHOOL LIFE: creative arts & painting workshop", w: 1040, h: 780 },
  life3: { src: "/media/school-activity-trampoline.jpg", alt: "Learners enjoying the outdoor playground trampoline and recreation at Zawadi", label: "SCHOOL LIFE: outdoor recreation & trampoline play", w: 780, h: 1040 },
  life4: { src: "/media/school-tree-planting-group.jpg", alt: "Zawadi learners and scouts participating in environmental tree planting on campus", label: "SCHOOL LIFE: environmental stewardship & community", w: 1040, h: 780 },
  transport: { src: "/media/school-transport-bus.jpg", alt: "Zawadi Junior Academy learners with the school bus in Isiolo", label: "TRANSPORT: Zawadi school bus & learners", w: 1024, h: 461 },
  admissions: { src: "/media/school-photo-02.jpg", alt: "Welcoming students and families to Zawadi Junior Academy", label: "ADMISSIONS: student enrollment & welcome", w: 1200, h: 1600 },
  news: { src: "/media/school-photo-32.jpg", alt: "Special moments and highlights from Zawadi Junior Academy", label: "NEWS: latest school news & events", w: 1600, h: 1200 },
} satisfies Record<string, ImageSpec>;
