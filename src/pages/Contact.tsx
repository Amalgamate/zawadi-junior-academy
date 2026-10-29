import { school, isSet, telHref, waHref, mailHref } from "../config";
import ContactActions, { Value } from "../components/ContactActions";
import EnquiryForm from "../components/EnquiryForm";
import { PageHeader, Section } from "../components/Sections";
import { useSeo } from "../components/useSeo";

export default function Contact() {
  useSeo("Contact Us", `Contact ${school.name} in ${school.town}, Kenya.`);
  const tel = telHref();
  const wa = waHref();
  const mail = mailHref();

  return (
    <>
      <PageHeader eyebrow="Contact" title="Contact us" lead="We would be glad to hear from you." />

      <Section>
        <div className="form-wrap">
          <div>
            <h2>Find us</h2>
            <dl className="details">
              <div><dt>School</dt><dd>{school.name}</dd></div>
              <div><dt>Location</dt><dd>{school.town}, {school.county}, {school.country}</dd></div>
              <div><dt>Address</dt><dd><Value v={school.address} /></dd></div>
              <div><dt>Telephone</dt><dd>{tel ? <a href={tel}>{school.phone}</a> : <Value v={school.phone} />}</dd></div>
              <div><dt>WhatsApp</dt><dd>{wa ? <a href={wa} target="_blank" rel="noopener noreferrer">Message on WhatsApp</a> : <Value v={school.whatsapp} />}</dd></div>
              <div><dt>Email</dt><dd>{mail ? <a href={mail}>{school.email}</a> : <Value v={school.email} />}</dd></div>
              <div><dt>Opening hours</dt><dd><Value v={school.hours} /></dd></div>
            </dl>
            <ContactActions />
          </div>
          <div className="form-card">
            <h2>Send a message</h2>
            <EnquiryForm kind="contact" />
          </div>
        </div>
      </Section>

      <Section className="tint">
        <h2>Map</h2>
        {isSet(school.mapsEmbedUrl) ? (
          <>
            <div className="map">
              <iframe title={`Map showing ${school.name}`} src={school.mapsEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            {isSet(school.mapsUrl) && (
              <p><a className="text-link" href={school.mapsUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps</a></p>
            )}
          </>
        ) : (
          <p className="todo-block">[INSERT VERIFIED MAP LOCATION: add the Google Maps links in src/config.ts. No map is shown until the location is confirmed.]</p>
        )}
      </Section>
    </>
  );
}
