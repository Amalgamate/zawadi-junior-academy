import { school } from "../config";
import { images } from "../content/images";
import Photo from "../components/Photo";
import EnquiryForm from "../components/EnquiryForm";
import ContactActions, { Value } from "../components/ContactActions";
import { PageHeader, Section } from "../components/Sections";
import { useSeo } from "../components/useSeo";

export default function Transport() {
  useSeo("School Transport", `Enquire about school transport for ${school.name} in ${school.town}, Kenya.`);
  return (
    <>
      <PageHeader
        eyebrow="Transport"
        title="School transport"
        lead="Zawadi offers school transport. Ask the school about arrangements for your child."
      />

      <Section>
        <div className="split">
          <Photo img={images.transport} className="rounded" />
          <div>
            <h2>Ask about transport</h2>
            <p>
              If you would like your child to travel to and from school by school transport, send an enquiry and the
              school will tell you what can be arranged.
            </p>
            <p className="muted">
              Routes, pick-up points, fares and schedules are not listed on this website. They are confirmed directly
              by the school.
            </p>
            <p>Transport contact: <Value v={school.transportContact} /></p>
            <p className="todo-block">[INSERT CONFIRMED TRANSPORT DETAILS (areas served, times, fees, safety information) once supplied by the school.]</p>
          </div>
        </div>
      </Section>

      <Section id="enquire" className="tint">
        <div className="form-wrap">
          <div>
            <p className="eyebrow">Transport enquiry</p>
            <h2>Send a transport enquiry</h2>
            <p className="muted">Tell us where you are travelling from and which stage your child is in.</p>
            <ContactActions waText={`Hello ${school.name}, I would like to ask about school transport.`} />
          </div>
          <div className="form-card">
            <EnquiryForm kind="transport" />
          </div>
        </div>
      </Section>
    </>
  );
}
