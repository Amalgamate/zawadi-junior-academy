import { school, mailHref } from "../config";
import { Value } from "../components/ContactActions";
import { PageHeader, Section } from "../components/Sections";
import { useSeo } from "../components/useSeo";

export default function Privacy() {
  useSeo("Privacy Policy", `How ${school.name} handles information sent through this website.`);
  const mail = mailHref();
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <Section>
        <div className="prose narrow-prose">
          <p>
            This privacy notice describes how <strong>{school.name}</strong>, located in {school.town}, {school.country},
            collects and uses personal information sent through this website. We are committed to handling your information
            responsibly and in accordance with the Kenya Data Protection Act, 2019.
          </p>

          <h2>Who we are</h2>
          <p>This website is run by {school.name}, {school.town}, {school.country}.</p>

          <h2>What we collect</h2>
          <p>
            When you send an enquiry we ask for your name, telephone number, optionally your email address, your
            child's intended learning stage, and your message. Transport enquiries also ask for the area you travel from.
          </p>

          <h2>Why we collect it</h2>
          <p>We use this information only to respond to your enquiry about admission, transport or general questions.</p>

          <h2>Who sees it</h2>
          <p>
            Enquiries submitted through this website are delivered securely to the school's administration team via an
            encrypted form delivery service. Your information is not shared with any third party for marketing or
            commercial purposes.
          </p>

          <h2>How long we keep it</h2>
          <p>We retain enquiry information for as long as is necessary to respond to your request, and for no longer than <strong>12 months</strong> from the date of receipt. After this period, the information is securely deleted.</p>

          <h2>Photographs of children</h2>
          <p>We publish photographs of children only with the appropriate permission from parents or guardians.</p>

          <h2>Your rights</h2>
          <p>You may ask to see, correct or delete the information we hold about you or your child.</p>

          <h2>Contact</h2>
          <p>
            Privacy questions: {mail ? <a href={mail}>{school.email}</a> : <Value v={school.email} />}
          </p>
        </div>
      </Section>
    </>
  );
}
