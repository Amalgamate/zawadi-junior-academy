import { school, isSet, telHref, waHref, mailHref } from "../config";

/** Shows a config value, or a conspicuous placeholder if it has not been set. */
export function Value({ v }: { v: string }) {
  return isSet(v) ? <>{v}</> : <span className="todo">{v}</span>;
}

/** Call / WhatsApp / Email buttons. Unconfigured ones are shown disabled, never as fake links. */
export default function ContactActions({ waText }: { waText?: string }) {
  const tel = telHref();
  const wa = waHref(waText);
  const mail = mailHref();
  const items = [
    { label: "Call us", href: tel, missing: "Phone not yet configured" },
    { label: "WhatsApp", href: wa, missing: "WhatsApp not yet configured", ext: true },
    { label: "Email", href: mail, missing: "Email not yet configured" },
  ];
  return (
    <div className="contact-actions">
      {items.map((i) =>
        i.href ? (
          <a key={i.label} className="btn btn-outline" href={i.href} {...(i.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
            {i.label}
          </a>
        ) : (
          <span key={i.label} className="btn btn-outline is-disabled" aria-disabled="true" title={i.missing}>
            {i.label} <small>(not set up yet)</small>
          </span>
        )
      )}
      {!isSet(school.phone) && !isSet(school.email) && (
        <p className="note">Contact details are placeholders. Update them in src/config.ts.</p>
      )}
    </div>
  );
}
