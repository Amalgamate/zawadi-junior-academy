import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { school } from "../config";

export function PageHeader({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <section className="page-header">
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </section>
  );
}

export function Section({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
}

/** The one repeated admissions call to action. */
export function AdmissionsBand({ title = "Begin with a conversation", text }: { title?: string; text?: string }) {
  return (
    <section className="band">
      <div className="container band-row">
        <div>
          <h2>{title}</h2>
          <p>{text ?? `Tell us about your child and we will get back to you about learning at ${school.name}.`}</p>
        </div>
        <Link to="/admissions#enquire" className="btn btn-primary btn-lg">Enquire About Admission</Link>
      </div>
    </section>
  );
}
