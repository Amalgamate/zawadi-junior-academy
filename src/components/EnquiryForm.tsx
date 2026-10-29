import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { gradeOptions } from "../config";

type Kind = "admission" | "transport" | "contact";
type Status = "idle" | "sending" | "sent" | "error" | "dev";

const ENDPOINT = (import.meta.env.VITE_FORM_ENDPOINT as string | undefined)?.trim() ?? "";

interface Values {
  name: string;
  phone: string;
  email: string;
  grade: string;
  area: string;
  message: string;
  consent: boolean;
  website: string; // honeypot: real users never fill this
}

const empty: Values = { name: "", phone: "", email: "", grade: "", area: "", message: "", consent: false, website: "" };

const copy: Record<Kind, { submit: string; messageLabel: string; showGrade: boolean; showArea: boolean; subject: string }> = {
  admission: { submit: "Send admission enquiry", messageLabel: "Your message", showGrade: true, showArea: false, subject: "Admission enquiry" },
  transport: { submit: "Send transport enquiry", messageLabel: "Anything we should know?", showGrade: true, showArea: true, subject: "Transport enquiry" },
  contact: { submit: "Send message", messageLabel: "Your message", showGrade: false, showArea: false, subject: "General enquiry" },
};

function validate(kind: Kind, v: Values): Partial<Record<keyof Values, string>> {
  const e: Partial<Record<keyof Values, string>> = {};
  if (v.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^\+?[\d\s-]{9,16}$/.test(v.phone.trim())) e.phone = "Please enter a valid phone number, for example 0712 345 678.";
  if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "That email address does not look right.";
  if (copy[kind].showGrade && !v.grade) e.grade = "Please choose a learning stage.";
  if (copy[kind].showArea && v.area.trim().length < 2) e.area = "Please tell us the area you are travelling from.";
  if (kind === "contact" && v.message.trim().length < 5) e.message = "Please write a short message.";
  if (!v.consent) e.consent = "Please confirm you are happy for the school to contact you.";
  return e;
}

export default function EnquiryForm({ kind }: { kind: Kind }) {
  const c = copy[kind];
  const [v, setV] = useState<Values>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const set = <K extends keyof Values>(k: K, val: Values[K]) => setV((p) => ({ ...p, [k]: val }));

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    const errs = validate(kind, v);
    setErrors(errs);
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0];
      document.getElementById(`${kind}-${first}`)?.focus();
      return;
    }
    if (v.website) return; // honeypot tripped: silently ignore
    if (!ENDPOINT) {
      setStatus("dev"); // nothing is sent; be honest about it
      return;
    }
    setStatus("sending");
    try {
      const { website, consent, ...fields } = v;
      void website;
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ form: kind, subject: `${c.subject} (Zawadi website)`, consent, ...fields, page: window.location.href }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      setV(empty);
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="form-result ok" role="status">
        <h3>Thank you, your enquiry has been sent.</h3>
        <p>The school will contact you using the details you provided.</p>
        <button className="btn btn-outline" onClick={() => setStatus("idle")}>Send another enquiry</button>
      </div>
    );
  }

  const field = (id: keyof Values, label: string, input: JSX.Element, hint?: string) => (
    <div className={`field ${errors[id] ? "has-error" : ""}`}>
      <label htmlFor={`${kind}-${id}`}>{label}</label>
      {input}
      {hint && <span className="hint" id={`${kind}-${id}-hint`}>{hint}</span>}
      {errors[id] && <span className="error" id={`${kind}-${id}-err`} role="alert">{errors[id]}</span>}
    </div>
  );
  const aria = (id: keyof Values) => ({
    id: `${kind}-${id}`,
    "aria-invalid": errors[id] ? (true as const) : undefined,
    "aria-describedby": errors[id] ? `${kind}-${id}-err` : undefined,
  });

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form-grid">
        {field("name", "Parent or guardian name", <input type="text" autoComplete="name" value={v.name} onChange={(e) => set("name", e.target.value)} {...aria("name")} />)}
        {field("phone", "Telephone number", <input type="tel" autoComplete="tel" inputMode="tel" value={v.phone} onChange={(e) => set("phone", e.target.value)} {...aria("phone")} />)}
        {field("email", "Email (optional)", <input type="email" autoComplete="email" value={v.email} onChange={(e) => set("email", e.target.value)} {...aria("email")} />)}
        {c.showGrade &&
          field(
            "grade",
            kind === "transport" ? "Child's learning stage" : "Child's intended learning stage",
            <select value={v.grade} onChange={(e) => set("grade", e.target.value)} {...aria("grade")}>
              <option value="">Select a stage</option>
              {gradeOptions.map((g) => <option key={g}>{g}</option>)}
            </select>
          )}
        {c.showArea &&
          field("area", "Area or estate you are travelling from", <input type="text" value={v.area} onChange={(e) => set("area", e.target.value)} {...aria("area")} />, "We use this only to discuss whether transport can be arranged.")}
      </div>
      {field("message", c.messageLabel, <textarea rows={5} value={v.message} onChange={(e) => set("message", e.target.value)} {...aria("message")} />)}

      <div className="hp" aria-hidden="true">
        <label>Leave this empty<input tabIndex={-1} autoComplete="off" value={v.website} onChange={(e) => set("website", e.target.value)} /></label>
      </div>

      <div className={`field check ${errors.consent ? "has-error" : ""}`}>
        <label>
          <input type="checkbox" checked={v.consent} onChange={(e) => set("consent", e.target.checked)} {...aria("consent")} />
          <span>
            I agree that Zawadi Junior Academy may contact me about this enquiry. See the <Link to="/privacy">Privacy Policy</Link>.
          </span>
        </label>
        {errors.consent && <span className="error" id={`${kind}-consent-err`} role="alert">{errors.consent}</span>}
      </div>

      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : c.submit}
      </button>

      {status === "dev" && (
        <div className="form-result dev" role="status">
          <strong>Development mode: this enquiry was NOT sent.</strong> No form delivery service is connected yet. See the README section "Connecting the forms".
        </div>
      )}
      {status === "error" && (
        <div className="form-result bad" role="alert">
          <strong>Sorry, we could not send your enquiry.</strong> Please try again, or contact the school directly using the details on the Contact page.
        </div>
      )}
    </form>
  );
}
