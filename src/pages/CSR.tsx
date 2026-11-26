import { useState } from "react";
import { school } from "../config";
import { PageHeader, Section } from "../components/Sections";
import { useSeo } from "../components/useSeo";
import DonationDialog from "../components/DonationDialog";

const focusAreas = [
  {
    number: "01",
    title: "Keep students learning",
    text: "Help cover school costs for children whose families are facing financial hardship, so they can continue learning with their classmates.",
  },
  {
    number: "02",
    title: "Meet essential needs",
    text: "Support practical needs such as learning materials, uniforms and meals, guided by each student's circumstances.",
  },
  {
    number: "03",
    title: "Bring people together",
    text: "Connect caring individuals, families and organisations with opportunities to make a meaningful difference for learners.",
  },
];

const studentStories = [
  { src: "/media/school-photo-24.jpg", alt: "Zawadi learners spending time together outdoors", caption: "A welcoming school community" },
  { src: "/media/school-photo-10.jpg", alt: "Learners taking part in a school performance", caption: "Confidence through participation" },
  { src: "/media/school-photo-27.jpg", alt: "Learners and staff taking part in an outdoor school activity", caption: "Growing together" },
  { src: "/media/school-photo-18.jpg", alt: "Zawadi students learning and sharing in class", caption: "Learning side by side" },
  { src: "/media/graduation/pp2-grad-08.jpg", alt: "Young learners celebrating a graduation milestone", caption: "Celebrating every milestone" },
  { src: "/media/school-creative-painting.jpg", alt: "Student focused on a creative painting activity", caption: "Making room for creativity" },
];

export default function CSR() {
  const [donationOpen, setDonationOpen] = useState(false);
  useSeo(
    "Student Support Fund | Zawadi Junior Academy",
    "Learn how Zawadi Junior Academy brings donors together to support students facing financial hardship in Isiolo, Kenya."
  );

  return (
    <>
      <DonationDialog open={donationOpen} onClose={() => setDonationOpen(false)} />
      <PageHeader
        eyebrow="Student Support Fund"
        title="A brighter future, together"
        lead="We believe every child deserves the chance to learn, grow and imagine what is possible. Through the Student Support Fund, donors can help students facing hardship stay in school."
      />

      <Section>
        <div className="csr-intro">
          <div className="csr-mark" aria-hidden="true">
            <svg viewBox="0 0 64 64" fill="none">
              <path d="M32 52S10 39.2 10 23.5C10 15.5 19.3 11 26 18l6 6 6-6c6.7-7 16-2.5 16 5.5C54 39.2 32 52 32 52Z" fill="currentColor" opacity=".12" />
              <path d="M32 48S13 36.8 13 23.8c0-6.4 7.6-10 13-4.3l6 6.3 6-6.3c5.4-5.7 13-2.1 13 4.3C51 36.8 32 48 32 48Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M23 34h7l3-7 5 14 3-7h5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <p className="eyebrow">Our commitment</p>
            <h2>Opportunity should not depend on circumstance</h2>
            <p>
              Some families need a little extra support to meet the costs of education. Through our student support
              initiative, {school.name} aims to mobilise funds and resources from donors and partners, then direct that
              support toward learners who need it most.
            </p>
            <p className="muted">Every contribution, large or small, can help a student take another step forward.</p>
          </div>
        </div>
      </Section>

      <Section className="tint">
        <div className="section-head csr-section-head">
          <p className="eyebrow">Where support can help</p>
          <h2>Small acts can open big possibilities</h2>
          <p className="muted">Support is shaped around students' needs and the resources available.</p>
        </div>
        <div className="csr-focus-grid">
          {focusAreas.map((item) => (
            <article className="csr-focus-card" key={item.number}>
              <span className="csr-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="csr-cta">
        <div className="container csr-cta-inner">
          <div>
            <p className="eyebrow light">Be part of the change</p>
            <h2>Help a learner keep moving forward</h2>
            <p>Talk with us about supporting a student or partnering with the school.</p>
          </div>
          <div className="btn-row">
            <button type="button" className="btn btn-paypal btn-lg csr-sponsor-button" onClick={() => setDonationOpen(true)}>
              <span className="paypal-icon-circle" aria-hidden="true">
                <img className="paypal-logo" src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" alt="" />
              </span>
              Sponsor a Child
            </button>
          </div>
        </div>
      </section>

      <section className="csr-photo-section" aria-labelledby="csr-photo-title">
        <div className="container">
          <div className="section-head csr-section-head">
            <p className="eyebrow">The difference we share</p>
            <h2 id="csr-photo-title">Every learner deserves room to thrive</h2>
            <p className="muted">Your support helps make these moments and opportunities possible.</p>
          </div>
          <div className="csr-photo-grid">
            {studentStories.map((story) => (
              <figure className="csr-photo-card" key={story.src}>
                <img src={story.src} alt={story.alt} loading="lazy" />
                <figcaption>{story.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
