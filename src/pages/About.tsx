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
          <div className="panel leadership-panel">
            <h2>Leadership &amp; Vision</h2>
            <div className="leadership-card">
              <div className="director-profile-row">
                <div className="director-photo-wrap">
                  <img
                    src="/media/director-guyo-huka-boru.jpg"
                    alt="Mr. Guyo Huka Boru, School Director of Zawadi Junior Academy"
                    className="director-photo"
                    width="260"
                    height="300"
                    loading="lazy"
                  />
                </div>
                <div className="director-info">
                  <h3 className="director-name">Mr. Guyo Huka Boru</h3>
                  <p className="director-title">School Director &amp; Founder</p>
                  <div className="director-sign-wrap" title="Signature of Mr. Guyo Huka Boru">
                    <span className="script-signature">Guyo H. Boru</span>
                    <svg width="130" height="14" viewBox="0 0 130 14" fill="none" aria-hidden="true">
                      <path d="M2 10 Q 40 2, 75 8 T 128 4" stroke="var(--gold-dark)" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>

              <blockquote className="director-quote">
                &ldquo;Education is not merely the transmission of facts, but the ignition of curiosity,
                character, and self-belief in every young heart. When we nurture a child&rsquo;s natural
                wonder in an atmosphere of warmth and high expectation, their potential knows no limit.
                At Zawadi, our mission is to walk beside each learner so they truly Rise and Shine.&rdquo;
              </blockquote>

              <p className="muted" style={{ margin: 0, fontSize: "0.92rem" }}>
                Under Mr. Boru&rsquo;s dedicated leadership, {school.name} champions the Competency-Based Curriculum (CBC)
                through personalized mentorship, strong moral foundations, and collaborative family partnerships.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <AdmissionsBand />
    </>
  );
}
