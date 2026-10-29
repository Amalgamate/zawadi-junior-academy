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
            <p className="todo-block">[INSERT CONFIRMED DETAILS: age range, daily routine and what Play Group learning involves, supplied by the school.]</p>
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
            <p className="todo-block">[INSERT CONFIRMED STRUCTURE: how the grades are grouped (for example lower, upper and junior levels), as the school defines them.]</p>
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
            <h3>Curriculum</h3>
            <p className="todo-block">[INSERT CONFIRMED CURRICULUM: the national or other curriculum the school follows, in the school's own words.]</p>
          </div>
          <div className="panel">
            <h3>Subjects and activities</h3>
            <p className="todo-block">[INSERT CONFIRMED SUBJECTS AND CO-CURRICULAR ACTIVITIES, supplied by the school.]</p>
          </div>
        </div>
        <p className="muted narrow">
          We prefer to share only what the school has confirmed. If you have questions about how your child would
          learn at {school.name}, please <Link to="/contact">get in touch</Link>.
        </p>
      </Section>

      <AdmissionsBand title="Ready to find out more?" text="Tell us which stage your child is joining and we will respond to your enquiry." />
    </>
  );
}
