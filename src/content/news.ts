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
    slug: "cbc-in-practice-experiential-learning",
    title: "CBC in Practice: How Hands-On Learning Sparks Curiosity in the Classroom",
    date: "2026-10-28",
    category: "School Life",
    summary: "A reflection on how Kenya's Competency-Based Curriculum moves learning from textbooks into hands-on discovery and collaborative projects at Zawadi.",
    body: [
      "At Zawadi Junior Academy, education is not a passive exercise in memorizing notes — it is an active exploration of the world. Through the Competency-Based Curriculum (CBC), our teachers design classroom lessons where concepts come alive through practical tasks.",
      "In our science and agriculture sessions, learners don't just read about plant life cycles; they germinate seeds, measure leaf growth, and observe soil moisture firsthand in our school environment. In numeracy and literacy, collaborative group activities encourage children to explain their thinking, listen to their peers, and build confidence speaking up.",
      "When children understand the 'why' behind what they learn, their natural curiosity flourishes. We are proud to see our learners developing problem-solving skills, teamwork, and digital literacy that will serve them for years to come.",
    ],
    image: {
      src: "/media/school-photo-27.jpg",
      alt: "Zawadi pupils focused on classroom coursework and hands-on exercises",
      label: "CBC Learning in Action",
      w: 1600,
      h: 1066,
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
  {
    slug: "fostering-character-through-scouting-and-service",
    title: "Fostering Character: Scouting, Girl Guides, and Values-Based Education",
    date: "2026-10-22",
    category: "School Life",
    summary: "Why character formation, outdoor self-reliance, and community service are at the heart of our co-curricular program.",
    body: [
      "Academic excellence is only half of a child's education — the other half is character, empathy, and integrity. At Zawadi, our scouting and guiding movement plays a vital role in grounding learners with life skills and discipline.",
      "Weekly parade drills, first-aid basics, teamwork challenges, and community service projects teach learners to be dependable, self-driven, and supportive of one another. Children learn the value of duty to God, duty to others, and duty to self.",
      "Seeing our scouts stand tall on stage, guide their fellow pupils during assemblies, and lead campus clean-up drives reinforces our belief that great leaders are built through consistent everyday habits.",
    ],
    image: {
      src: "/media/school-scouts-team.jpg",
      alt: "Zawadi scouts and leaders with expedition packs and camping gear",
      label: "Scouting and Outdoor Adventures",
      w: 1040,
      h: 780,
    },
  },
  {
    slug: "environmental-conservation-tree-planting-day",
    title: "Greening Our Future: Zawadi Learners Lead Campus Tree Planting",
    date: "2026-10-25",
    category: "School Life",
    summary: "As part of the CBC environmental stewardship strand, our pupils planted indigenous trees across the school grounds to nurture environmental care.",
    body: [
      "At Zawadi Junior Academy, character building extends to caring for the natural world around us. In our latest environmental conservation day, learners from lower primary and junior school rolled up their sleeves to plant trees across our campus.",
      "Guided by teachers and scouting mentors, each child received a potted seedling, learned the proper soil preparation techniques, and committed to tending to their tree throughout the academic year. The activity brought together practical lessons in science, agriculture, and civic responsibility.",
      "By encouraging our children to take active ownership of their environment today, we are cultivating thoughtful, responsible leaders who cherish sustainable living.",
    ],
    image: {
      src: "/media/school-tree-planting-group.jpg",
      alt: "Zawadi learners and scouts proudly displaying newly potted tree seedlings on campus",
      label: "Environmental Conservation Day",
      w: 1040,
      h: 780,
    },
  },
  {
    slug: "safe-reliable-school-transport-isiolo",
    title: "Safe and Reliable Journeys: Inside Our School Transport & Safety Measures",
    date: "2026-10-18",
    category: "Transport",
    summary: "An update on our daily transit routes across Isiolo, vehicle safety protocols, and our dedicated child supervisors on board.",
    body: [
      "A successful school day begins with a calm, dependable commute. For many parents in Isiolo, knowing their child is picked up on time and delivered safely home provides invaluable peace of mind.",
      "Our school transport service covers major residential routes in Isiolo town, Kiwanjani, Bulla Pesa, and neighboring areas. Each van operates on scheduled morning and afternoon routes, driven by experienced, vetted professionals.",
      "Every vehicle is accompanied by an adult supervisor who assists younger learners with boarding, ensures seatbelt compliance, and oversees safe handover at designated stops. Vehicles undergo routine mechanical servicing to maintain strict compliance with national transport standards.",
    ],
    image: {
      src: "/media/school-transport-bus.jpg",
      alt: "Zawadi school bus with learners ready for daily transit in Isiolo",
      label: "Zawadi School Bus",
      w: 1024,
      h: 461,
    },
  },
  {
    slug: "partnering-with-parents-strong-foundation",
    title: "From Our Desks: Partnering with Parents for Meaningful Learner Growth",
    date: "2026-10-12",
    category: "Announcements",
    summary: "Education is a shared journey between home and school. Key takeaways on how collaborative encouragement shapes learner confidence.",
    body: [
      "When schools and parents pull in the same direction, children flourish. At Zawadi Junior Academy, we view parents and guardians not as spectators, but as vital co-educators in their children's formative years.",
      "Our termly academic consultations and continuous feedback loops give families clear visibility into each child's social progress and academic milestones. We encourage parents to set aside dedicated reading time at home, celebrate effort rather than just test scores, and foster open dinner-table conversations about their day.",
      "Our doors remain open to all parents who wish to consult with teachers or the administration. Together, we provide the steady foundation our children need to Rise and Shine.",
    ],
    image: {
      src: "/media/school-photo-22.jpg",
      alt: "Zawadi Junior Academy teachers and staff engaged in collaborative planning",
      label: "Teacher and Parent Collaboration",
      w: 1392,
      h: 928,
    },
  },
];

export const categories = ["All", "Announcements", "School Life", "Admissions", "Transport"] as const;

export const formatDate = (iso: string): string =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
