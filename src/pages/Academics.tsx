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

      {/* ── ICT & Innovation ── */}
      <Section className="tint" id="ict">
        <div className="section-head" style={{ maxWidth: "60ch" }}>
          <p className="eyebrow">Technology &amp; Innovation</p>
          <h2>Learning beyond the textbook</h2>
          <p className="muted">
            At Zawadi we believe every child deserves a head-start in the digital world. Our technology
            programme gives learners hands-on skills that prepare them for a future built on creativity and code.
          </p>
        </div>

        <div className="ict-grid ict-grid-4">
          {/* ICT Lab */}
          <div className="ict-card">
            <div className="ict-card-top" style={{ background: "linear-gradient(90deg, #3fa2dc, #122176)" }} />
            <div className="ict-card-body">
              <span className="ict-badge" style={{ background: "rgba(63,162,220,0.12)", color: "#3fa2dc" }}>
                <svg viewBox="0 0 16 16" fill="currentColor" width="13" height="13" aria-hidden="true">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2zm5 9.5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1H7zM5 14h6v1H5v-1z"/>
                </svg>
                ICT Lab
              </span>
              <h3>Computer &amp; Digital Skills</h3>
              <p>
                Our fully equipped ICT Lab gives learners in Grade 1 to Grade 9 structured computer time every week.
                Students develop typing, internet safety, document creation, spreadsheets, and foundational
                digital-literacy skills aligned with the CBC Digital Literacy strand.
              </p>
              <p>
                From Grade 4 upward, learners use the lab for research projects, presentations, and
                multimedia storytelling — preparing them for a knowledge-driven world.
              </p>
            </div>
          </div>

          {/* Coding */}
          <div className="ict-card">
            <div className="ict-card-top" style={{ background: "linear-gradient(90deg, #f4b81c, #d99f0a)" }} />
            <div className="ict-card-body">
              <span className="ict-badge" style={{ background: "rgba(244,184,28,0.14)", color: "#b8860b" }}>
                <svg viewBox="0 0 16 16" fill="currentColor" width="13" height="13" aria-hidden="true">
                  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                </svg>
                Coding
              </span>
              <h3>Coding &amp; Programming</h3>
              <p>
                Coding is taught as an extra-mile enrichment programme for learners from Grade 3 upward. Starting with
                visual block-based environments like Scratch, children progress to real text-based languages
                such as Python and JavaScript.
              </p>
              <p>
                Sessions focus on computational thinking, problem decomposition, and logical reasoning — skills
                that strengthen performance across all subjects, not just technology.
              </p>
            </div>
          </div>

          {/* Robotics */}
          <div className="ict-card">
            <div className="ict-card-top" style={{ background: "linear-gradient(90deg, #c8282d, #8b1a1e)" }} />
            <div className="ict-card-body">
              <span className="ict-badge" style={{ background: "rgba(200,40,45,0.1)", color: "#c8282d" }}>
                <svg viewBox="0 0 16 16" fill="currentColor" width="13" height="13" aria-hidden="true">
                  <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219V8.062zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.134z"/>
                  <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5z"/>
                </svg>
                Robotics
              </span>
              <h3>Robotics &amp; STEM Club</h3>
              <p>
                Our Robotics programme is the go-to extra-curricular for curious, hands-on learners. Using
                programmable robot kits, children design, build, and code machines to complete real challenges.
              </p>
              <p>
                The programme nurtures engineering thinking, team collaboration, and creative problem-solving while
                preparing learners to compete in regional STEM and robotics events.
              </p>
            </div>
          </div>

          {/* LMS */}
          <div className="ict-card ict-card-lms">
            <div className="ict-card-top" style={{ background: "linear-gradient(90deg, #122176, #3fa2dc)" }} />
            <div className="ict-card-body">
              <span className="ict-badge" style={{ background: "rgba(18,33,118,0.1)", color: "#122176" }}>
                <svg viewBox="0 0 16 16" fill="currentColor" width="13" height="13" aria-hidden="true">
                  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm.5 3h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1zm0 3h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1zm0 3h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z"/>
                </svg>
                LMS
              </span>
              <h3>Online Learning Platform</h3>
              <p>
                Our built-in <strong>Learning Management System</strong> means school never truly stops. Learners access
                all their learning materials from the TrendSCORE app — on any Android device, from home.
              </p>
              <ul className="lms-list">
                <li>Homework &amp; assignments set &amp; submitted online</li>
                <li>Holiday learning packs for every class</li>
                <li>Teacher notes, recorded lessons &amp; reading materials</li>
                <li>CBC assessments with instant scores</li>
                <li>Parents see every submission &amp; grade in real time</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <AdmissionsBand title="Ready to find out more?" text="Tell us which stage your child is joining and we will respond to your enquiry." />
    </>
  );
}
