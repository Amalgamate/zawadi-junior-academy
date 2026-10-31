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
            <h2>School History & Journey</h2>
            <p>
              Founded in Isiolo, Kenya, {school.name} was established with a singular vision: to provide high-quality,
              holistic, and values-centered education that empowers young boys and girls to realize their full potential.
            </p>
            <p>
              From our humble beginnings with early learners, the academy has progressively expanded into a comprehensive
              learning institution offering continuous educational pathways from Play Group through Pre-Primary (PP1 &amp; PP2),
              Primary School, and Junior School (Grade 7 to 9).
            </p>
            <p>
              Today, {school.name} stands as a beacon of academic commitment, disciplined character formation, and
              community pride in Isiolo County, situated conveniently behind St. Paul Kiwanjani Secondary School.
            </p>
          </div>
          <div className="panel">
            <h2>Leadership & Vision</h2>
            <p>
              Under visionary school management and dedicated headship, {school.name} brings together experienced educators,
              compassionate pastoral staff, and active parent-teacher collaboration.
            </p>
            <p>
              <em>
                &ldquo;At Zawadi, every child is a unique gift endowed with unlimited promise. Our mission is to walk beside
                each learner, instilling academic competence, strong moral compass, and creative confidence to help them
                truly Rise and Shine.&rdquo;
              </em>
            </p>
            <p style={{ marginTop: "1rem", fontWeight: 600, color: "var(--navy)" }}>
              — School Administration &amp; Academic Board
            </p>
          </div>
        </div>
      </Section>

      <AdmissionsBand />
    </>
  );
}
