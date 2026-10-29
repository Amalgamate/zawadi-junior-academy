import { Link } from "react-router-dom";
import { school } from "../config";
import { images } from "../content/images";
import Photo from "../components/Photo";
import EnquiryForm from "../components/EnquiryForm";
import ContactActions from "../components/ContactActions";
import { PageHeader, Section } from "../components/Sections";
import { useSeo } from "../components/useSeo";

const faqs = [
  { q: "Which learning stages does the school offer?", a: `${school.name} serves learners from ${school.learningRange}.` },
  { q: "Is school transport available?", a: "Yes, the school offers transport. Please use the transport enquiry to ask about arrangements for your child." },
  { q: "What are the fees?", a: "Fee information is not published on this website yet. Please send an enquiry and the school will advise you." },
  { q: "What are the admission requirements and deadlines?", a: "Requirements and dates are confirmed directly by the school. Please send an enquiry to ask." },
  { q: "Are places available?", a: "Availability changes, so the school can only confirm this when you enquire." },
  { q: "Can I visit the school?", a: "Please mention in your enquiry that you would like to visit, and the school will respond." },
];

export default function Admissions() {
  useSeo("Admissions", `Enquire about admission to ${school.name} in ${school.town}, Kenya, for Play Group to Grade 9.`);
  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title="Enquire about admission"
        lead="Tell us about your child and the school will get back to you with the next steps."
      />

      <Section>
        <div className="split">
          <div>
            <h2>How an enquiry works</h2>
            <ol className="steps">
              <li><strong>Send your enquiry.</strong> Use the form below with your contact details and your child's intended stage.</li>
              <li><strong>The school responds.</strong> We will use the phone number or email you provide.</li>
              <li><strong>Confirm the details.</strong> The school will explain requirements, fees and availability directly.</li>
            </ol>
            <p className="todo-block">[INSERT VERIFIED ADMISSIONS PROCESS, REQUIREMENTS AND DEADLINES, once confirmed by the school.]</p>
          </div>
          <Photo img={images.admissions} className="rounded" />
        </div>
      </Section>

      <Section id="enquire" className="tint">
        <div className="form-wrap">
          <div>
            <p className="eyebrow">Admissions enquiry</p>
            <h2>Send us your enquiry</h2>
            <p className="muted">Prefer to speak to someone? Use one of the options below.</p>
            <ContactActions waText={`Hello ${school.name}, I would like to enquire about admission.`} />
          </div>
          <div className="form-card">
            <EnquiryForm kind="admission" />
          </div>
        </div>
      </Section>

      <Section id="faqs">
        <div className="section-head">
          <p className="eyebrow">FAQs</p>
          <h2>Common questions</h2>
        </div>
        <div className="faq">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
        <p className="muted narrow">
          Need transport as well? <Link to="/transport#enquire">Enquire about transport</Link>.
        </p>
      </Section>
    </>
  );
}
