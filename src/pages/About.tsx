import { school } from "../config";
import { images } from "../content/images";
import Photo from "../components/Photo";
import { PageHeader, Section, AdmissionsBand } from "../components/Sections";
import { useSeo } from "../components/useSeo";

export default function About() {
  useSeo("About Us", `Learn about ${school.name}, a school in ${school.town}, Kenya for learners from ${school.learningRange}.`);
  return (
    <>
      <PageHeader eyebrow="About us" title={`About ${school.name}`} lead={`A school in ${school.town}, ${school.country}, welcoming learners from ${school.learningRange}.`} />

      <Section>
        <div className="split">
          <div>
            <h2>Our school</h2>
            <p>
              {school.name} is located in {school.town}, {school.country}. We serve learners from {school.learningRange},
              so children can learn within one familiar community as they grow.
            </p>
            <p>Our motto, <strong>{school.motto}</strong>, reflects what we want for every child: to grow, to be confident and to let their abilities show.</p>
          </div>
          <Photo img={images.about} className="rounded" />
        </div>
      </Section>

      <Section className="tint">
        <div className="section-head">
          <p className="eyebrow">Our aspirations</p>
          <h2>What we aspire to</h2>
          <p className="muted">These are aspirations that guide how we describe our school. They are not claims about results or programmes.</p>
        </div>
        <ul className="values">
          <li><h3>Nurturing</h3><p>A caring environment where children feel safe to learn.</p></li>
          <li><h3>Curious</h3><p>Encouraging questions and a love of discovery.</p></li>
          <li><h3>Responsible</h3><p>Helping children grow in character and consideration for others.</p></li>
          <li><h3>Together</h3><p>Working closely with families as partners in a child's learning.</p></li>
        </ul>
      </Section>

      <Section>
        <div className="grid-2">
          <div className="panel">
            <h2>School history</h2>
            <p className="todo-block">[INSERT VERIFIED SCHOOL HISTORY: founding year, founders and milestones, supplied and approved by the school.]</p>
          </div>
          <div className="panel">
            <h2>Leadership</h2>
            <p className="todo-block">[INSERT HEAD TEACHER / DIRECTOR MESSAGE AND NAMES, supplied and approved by the school.]</p>
          </div>
        </div>
      </Section>

      <AdmissionsBand />
    </>
  );
}
