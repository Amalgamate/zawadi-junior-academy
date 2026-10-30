import { ImageSpec } from "./images";

/**
 * GALLERY: add or remove items. For a photo, set `src` to a file in /public/images/gallery/.
 * For a video, also set `video` to an .mp4 path in /public/images/gallery/ (src then acts as the poster).
 * The items below are placeholders only; they do not depict any real school event.
 */
export interface GalleryItem extends ImageSpec {
  id: string;
  video?: string;
}

export const gallery: GalleryItem[] = [
  // Videos with real posters
  { id: "v1", src: "/media/school-photo-05.jpg", video: "/media/school-video-02.mp4", alt: "Zawadi Junior Academy in action — video highlight", label: "VIDEO: school life", w: 1200, h: 1600 },
  { id: "v2", src: "/media/school-photo-06.jpg", video: "/media/school-video-03.mp4", alt: "Classroom and school presentation video", label: "VIDEO: learner activity", w: 1200, h: 1600 },
  { id: "v3", src: "/media/school-photo-08.jpg", video: "/media/school-video-04.mp4", alt: "Learners performing and engaging at school", label: "VIDEO: performance", w: 1200, h: 1600 },
  { id: "v4", src: "/media/school-photo-33.jpg", video: "/media/school-video-06.mp4", alt: "Joyful moments with Zawadi learners and staff", label: "VIDEO: school community", w: 1200, h: 1600 },

  // Curated diverse photography across all categories
  { id: "g1", src: "/media/school-photo-01.jpg", alt: "A cheerful learner in the distinctive Zawadi blue and gold uniform", label: "GALLERY: learner portrait", w: 1200, h: 1600 },
  { id: "g2", src: "/media/school-photo-04.jpg", alt: "Classroom engagement and attentive learning session", label: "GALLERY: classroom study", w: 1600, h: 1200 },
  { id: "g3", src: "/media/school-photo-07.jpg", alt: "Collaborative learning and classroom activities", label: "GALLERY: academic session", w: 1600, h: 1200 },
  { id: "g4", src: "/media/school-photo-24.jpg", alt: "Outdoor assembly and whole-school gathering at Zawadi", label: "GALLERY: school assembly", w: 1600, h: 1066 },
  { id: "g5", src: "/media/school-photo-26.jpg", alt: "Campus grounds, facilities and outdoor space in Isiolo", label: "GALLERY: school grounds", w: 1600, h: 1066 },
  { id: "g6", src: "/media/school-photo-27.jpg", alt: "Pupils actively writing and solving coursework", label: "GALLERY: hands-on learning", w: 1600, h: 1066 },
  { id: "g7", src: "/media/school-photo-28.jpg", alt: "Creative expression and co-curricular showcase", label: "GALLERY: creative arts", w: 1600, h: 1066 },
  { id: "g8", src: "/media/school-photo-30.jpg", alt: "Recreation, sports and play time in the school courtyard", label: "GALLERY: games & recreation", w: 1600, h: 1066 },
  { id: "g9", src: "/media/school-photo-31.jpg", alt: "Community celebrations and school milestones", label: "GALLERY: school celebration", w: 1600, h: 1200 },
  { id: "g10", src: "/media/school-photo-14.jpg", alt: "Safe school transport ensuring daily commutes", label: "GALLERY: school transport", w: 1599, h: 720 },
  { id: "g11", src: "/media/school-photo-22.jpg", alt: "Dedicated teachers and staff mentoring young minds", label: "GALLERY: teacher mentorship", w: 1392, h: 928 },
  { id: "g12", src: "/media/school-photo-03.jpg", alt: "Early years foundation — joyful beginnings at Zawadi", label: "GALLERY: early years", w: 1200, h: 1600 },
];
