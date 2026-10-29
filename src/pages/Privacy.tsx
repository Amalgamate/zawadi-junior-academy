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
          <p className="todo-block">
            DRAFT: this policy is a starting point only. It must be reviewed and approved by the school (and a legal
            adviser, where appropriate) before the website is published, including checks against the Kenya Data
            Protection Act, 2019.
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
            Enquiries are sent to the school through a form delivery service. <span className="todo">[INSERT NAME OF FORM SERVICE USED, once connected.]</span>
          </p>

          <h2>How long we keep it</h2>
          <p><span className="todo">[INSERT RETENTION PERIOD, as decided by the school.]</span></p>

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
