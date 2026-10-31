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
  // PP2 Graduation 2026 Special Feature
  { id: "grad1", src: "/media/graduation/pp2-grad-01.jpg", alt: "PP2 Graduation Ceremony: Young graduates proudly celebrating their milestone", label: "PP2 GRADUATION: Ceremony opening", w: 1600, h: 1067 },
  { id: "grad2", src: "/media/graduation/pp2-grad-02.jpg", alt: "PP2 Graduate in ceremonial gown and cap smiling with confidence", label: "PP2 GRADUATION: Graduate portrait", w: 1067, h: 1600 },
  { id: "grad3", src: "/media/graduation/pp2-grad-06.jpg", alt: "Learners performing an inspiring graduation poem on stage", label: "PP2 GRADUATION: Stage performance", w: 1600, h: 1067 },
  { id: "grad4", src: "/media/graduation/pp2-grad-08.jpg", alt: "Receiving certificates of completion on stage at Zawadi", label: "PP2 GRADUATION: Certificate presentation", w: 1600, h: 1067 },
  { id: "grad5", src: "/media/graduation/pp2-grad-10.jpg", alt: "Joyful parents, guardians and teachers applauding the young achievers", label: "PP2 GRADUATION: Parents & teachers", w: 1600, h: 1067 },
  { id: "grad6", src: "/media/graduation/pp2-grad-11.jpg", alt: "Graduation choral presentation by PP2 class", label: "PP2 GRADUATION: Choral music", w: 1600, h: 1067 },
  { id: "grad7", src: "/media/graduation/pp2-grad-13.jpg", alt: "Proud moment: graduate holding their certificate", label: "PP2 GRADUATION: Proud achievement", w: 1600, h: 1067 },
  { id: "grad8", src: "/media/graduation/pp2-grad-14.jpg", alt: "Staff and school administration celebrating the graduating class", label: "PP2 GRADUATION: School leadership", w: 1600, h: 1067 },
  { id: "grad9", src: "/media/graduation/pp2-grad-18.jpg", alt: "Traditional dance and cultural performance during the celebration", label: "PP2 GRADUATION: Cultural celebration", w: 1600, h: 1067 },
  { id: "grad10", src: "/media/graduation/pp2-grad-20.jpg", alt: "Bright smile of a young PP2 graduate ready for Grade 1", label: "PP2 GRADUATION: Ready for Grade 1", w: 1067, h: 1600 },
  { id: "grad11", src: "/media/graduation/pp2-grad-22.jpg", alt: "Tossing caps in celebration — Rise & Shine!", label: "PP2 GRADUATION: Celebration moment", w: 1600, h: 1067 },
  { id: "grad12", src: "/media/graduation/pp2-grad-23.jpg", alt: "Graduates and families posing together in commemoration", label: "PP2 GRADUATION: Family photo", w: 1600, h: 1067 },

  // Videos with real posters
  { id: "v1", src: "/media/school-photo-05.jpg", video: "/media/school-video-02.mp4", alt: "Zawadi Junior Academy in action — video highlight", label: "VIDEO: school life", w: 1200, h: 1600 },
  { id: "v2", src: "/media/school-photo-06.jpg", video: "/media/school-video-03.mp4", alt: "Classroom and school presentation video", label: "VIDEO: learner activity", w: 1200, h: 1600 },
  { id: "v3", src: "/media/school-photo-08.jpg", video: "/media/school-video-04.mp4", alt: "Learners performing and engaging at school", label: "VIDEO: performance", w: 1200, h: 1600 },
  { id: "v4", src: "/media/school-photo-33.jpg", video: "/media/school-video-06.mp4", alt: "Joyful moments with Zawadi learners and staff", label: "VIDEO: school community", w: 1200, h: 1600 },

  // Curated diverse photography across all categories
  { id: "g-tree1", src: "/media/school-tree-planting-group.jpg", alt: "Zawadi learners and scouts proudly holding tree seedlings during environmental conservation day", label: "ENVIRONMENT: Tree planting day", w: 1040, h: 780 },
  { id: "g-scout1", src: "/media/school-scouts-team.jpg", alt: "Zawadi scouts and leaders with expedition packs and camp equipment", label: "SCOUTS: Outdoor expedition", w: 1040, h: 780 },
  { id: "g-art1", src: "/media/school-collaborative-art.jpg", alt: "Joyful learners creating colorful pattern designs during an outdoor creative workshop", label: "ARTS: Collaborative painting", w: 1040, h: 780 },
  { id: "g-play1", src: "/media/school-activity-trampoline.jpg", alt: "Pupils enjoying recreation and outdoor jumping fun on the school trampoline", label: "PLAY: Trampoline recreation", w: 780, h: 1040 },
  { id: "g-tree2", src: "/media/school-tree-planting-duo.jpg", alt: "Two proud Zawadi boys in smart uniform holding potted seedlings ready for planting", label: "ENVIRONMENT: Young conservationists", w: 780, h: 1040 },
  { id: "g-clay", src: "/media/school-clay-modeling.jpg", alt: "Early years learners displaying letters and numbers molded from colorful play dough", label: "LEARNING: Early numeracy & clay work", w: 780, h: 1040 },
  { id: "g-scout2", src: "/media/school-scouts-camping.jpg", alt: "Scouts lined up with their camping gear, tin mugs and backpacks", label: "SCOUTS: Camp preparation", w: 1040, h: 780 },
  { id: "g-art2", src: "/media/school-art-workshop.jpg", alt: "Students painting patterns on poster boards with sponge brushes outdoors", label: "ARTS: Hands-on painting workshop", w: 1040, h: 780 },
  { id: "g-art3", src: "/media/school-creative-painting.jpg", alt: "Group art activity: pupils collaborating on visual art projects", label: "ARTS: Outdoor creative discovery", w: 1040, h: 780 },
  { id: "g-tree3", src: "/media/school-environmental-day.jpg", alt: "Learners gathered with seedlings for greening Isiolo campus initiative", label: "ENVIRONMENT: Campus greening", w: 1040, h: 780 },
  { id: "g-play2", src: "/media/school-activity-playpark.jpg", alt: "Active play, climbing wall and trampoline games at Zawadi playpark", label: "PLAY: Outdoor playpark", w: 780, h: 1040 },

  { id: "g1", src: "/media/school-photo-01.jpg", alt: "A cheerful learner in the distinctive Zawadi blue and gold uniform", label: "GALLERY: learner portrait", w: 1200, h: 1600 },
  { id: "g2", src: "/media/school-photo-04.jpg", alt: "Classroom engagement and attentive learning session", label: "GALLERY: classroom study", w: 1600, h: 1200 },
  { id: "g3", src: "/media/school-photo-07.jpg", alt: "Collaborative learning and classroom activities", label: "GALLERY: academic session", w: 1600, h: 1200 },
  { id: "g4", src: "/media/school-photo-24.jpg", alt: "Outdoor assembly and whole-school gathering at Zawadi", label: "GALLERY: school assembly", w: 1600, h: 1066 },
  { id: "g5", src: "/media/school-photo-26.jpg", alt: "Campus grounds, facilities and outdoor space in Isiolo", label: "GALLERY: school grounds", w: 1600, h: 1066 },
  { id: "g6", src: "/media/school-photo-27.jpg", alt: "Pupils actively writing and solving coursework", label: "GALLERY: hands-on learning", w: 1600, h: 1066 },
  { id: "g7", src: "/media/school-photo-28.jpg", alt: "Creative expression and co-curricular showcase", label: "GALLERY: creative arts", w: 1600, h: 1066 },
  { id: "g8", src: "/media/school-photo-30.jpg", alt: "Recreation, sports and play time in the school courtyard", label: "GALLERY: games & recreation", w: 1600, h: 1066 },
  { id: "g9", src: "/media/school-photo-31.jpg", alt: "Community celebrations and school milestones", label: "GALLERY: school celebration", w: 1600, h: 1200 },
  { id: "g10", src: "/media/school-transport-bus.jpg", alt: "Safe school bus transport serving learners in Isiolo", label: "GALLERY: school transport", w: 1024, h: 461 },
  { id: "g11", src: "/media/school-photo-22.jpg", alt: "Dedicated teachers and staff mentoring young minds", label: "GALLERY: teacher mentorship", w: 1392, h: 928 },
  { id: "g12", src: "/media/school-photo-03.jpg", alt: "Early years foundation — joyful beginnings at Zawadi", label: "GALLERY: early years", w: 1200, h: 1600 },
];
