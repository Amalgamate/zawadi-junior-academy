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
  { id: "g1", src: "/images/gallery/gallery-1.jpg", alt: "Learners in a classroom", label: "GALLERY 1: classroom learning", w: 1200, h: 900 },
  { id: "g2", src: "/images/gallery/gallery-2.jpg", alt: "A smiling learner", label: "GALLERY 2: learner portrait", w: 900, h: 1200 },
  { id: "g3", src: "/images/gallery/gallery-3.jpg", alt: "Learners playing outdoors", label: "GALLERY 3: outdoor play", w: 1200, h: 900 },
  { id: "g4", src: "/images/gallery/gallery-4.jpg", alt: "The school community together", label: "GALLERY 4: school community", w: 1200, h: 900 },
  { id: "g5", src: "/images/gallery/gallery-5.jpg", alt: "Two learners reading together", label: "GALLERY 5: learning together", w: 900, h: 1200 },
  { id: "g6", src: "/images/gallery/gallery-6.jpg", alt: "The school grounds", label: "GALLERY 6: school grounds", w: 1200, h: 900 },
  { id: "g7", src: "/images/gallery/gallery-7.jpg", alt: "A school assembly or event", label: "GALLERY 7: assembly or event", w: 1200, h: 900 },
  { id: "g8", src: "/images/gallery/gallery-8.jpg", alt: "Vibrant school life", label: "GALLERY 8: school life", w: 1200, h: 900 },
];
