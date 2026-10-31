import { Link } from "react-router-dom";
import { school } from "../config";
import { images } from "../content/images";
import Photo from "../components/Photo";
import { PageHeader, Section, AdmissionsBand } from "../components/Sections";
import { useSeo } from "../components/useSeo";

export default function Academics() {
  useSeo("Academics", `Learning at ${school.name}, from ${school.learningRange} in ${school.town}, Kenya.`);
  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title="Learning from Play Group to Grade 9"
        lead="One school community for a child's journey, from their first days of learning through to Grade 9."
      />

      <Section id="play-group">
        <div className="split">
          <Photo img={images.academicsPlay} className="rounded" />
          <div>
            <p className="eyebrow">Play Group</p>
            <h2>Where learning begins</h2>
            <p>
              Play Group is a child's first step into school life. We want it to be a welcoming place where young
              learners feel safe, settle happily and begin to enjoy learning alongside others.
            </p>
            <p>
              Designed for children aged 2 to 4 years, our early learning curriculum focuses on sensory exploration,
              language acquisition, social skills, and creative play. Through storytelling, hands-on games, music,
              and outdoor play, learners discover a joyful foundation for lifelong curiosity.
            </p>
            <p>
              Our dedicated early-years educators provide gentle personal guidance, helping every child build confidence,
              develop motor skills, and transition smoothly into Pre-Primary (PP1 &amp; PP2).
            </p>
          </div>
        </div>
      </Section>

      <Section id="grades" className="tint">
        <div className="split reverse">
          <div>
            <p className="eyebrow">Grade 1 to Grade 9</p>
            <h2>A continuing journey</h2>
            <p>
              From Grade 1 to Grade 9, learners continue within the same school community. Staying in one place can
              help children build lasting friendships and a strong sense of belonging as they grow.
            </p>
            <div className="stages-list" style={{ display: "grid", gap: "0.8rem", marginTop: "1rem" }}>
              <div>
                <strong>Lower Primary (Grades 1 – 3):</strong> Foundational literacy, numeracy, environmental activities, and creative arts that ignite strong foundational comprehension.
              </div>
              <div>
                <strong>Upper Primary (Grades 4 – 6):</strong> Core academic competencies, science &amp; technology, agriculture, social studies, and collaborative project-based learning.
              </div>
              <div>
                <strong>Junior School (Grades 7 – 9):</strong> Transitioning adolescents into advanced disciplines, pre-technical studies, creative arts, and leadership skills preparing them for senior pathways.
              </div>
            </div>
          </div>
          <Photo img={images.academicsGrades} className="rounded" />
        </div>
      </Section>

      <Section>
        <div className="section-head">
          <p className="eyebrow">Curriculum and subjects</p>
          <h2>What children learn</h2>
        </div>
        <div className="grid-2">
          <div className="panel">
            <h3>Competency-Based Curriculum (CBC)</h3>
            <p>
              We fully implement the Kenyan Competency-Based Curriculum (CBC), emphasizing what learners can do
              rather than mere rote memorization.
            </p>
            <p>
              Our teaching approach nurtures the seven core competencies: Communication &amp; Collaboration, Critical
              Thinking &amp; Problem Solving, Imagination &amp; Creativity, Citizenship, Learning to Learn, Self-efficacy,
              and Digital Literacy.
            </p>
          </div>
          <div className="panel">
            <h3>Subjects and Co-Curricular Learning</h3>
            <p>
              Our broad academic scope covers English, Kiswahili, Mathematics, Science &amp; Technology, Social Studies,
              Religious Education, Agriculture &amp; Nutrition, Creative Arts &amp; Sports, and Pre-Technical Studies.
            </p>
            <p>
              Complementing classroom academics, learners actively participate in clubs, music festivals, scout movements,
              athletics, and educational field tours that enrich character and talent.
            </p>
          </div>
        </div>
        <p className="muted narrow">
          For detailed syllabus guides, term schedules, and grade assessment frameworks at {school.name}, please{" "}
          <Link to="/contact">get in touch with our academic office</Link>.
        </p>
      </Section>

      <AdmissionsBand title="Ready to find out more?" text="Tell us which stage your child is joining and we will respond to your enquiry." />
    </>
  );
}
