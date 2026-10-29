import { useCallback, useEffect, useRef, useState } from "react";
import { gallery } from "../content/gallery";
import Photo from "../components/Photo";
import { PageHeader, Section, AdmissionsBand } from "../components/Sections";
import { useSeo } from "../components/useSeo";

export default function Gallery() {
  useSeo("Gallery", "Photographs and videos from Zawadi Junior Academy in Isiolo, Kenya.");
  const [open, setOpen] = useState<number | null>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(null);
    lastTrigger.current?.focus();
  }, []);
  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + gallery.length) % gallery.length)), []);

  useEffect(() => {
    if (open === null) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  const current = open === null ? null : gallery[open];

  return (
    <>
      <PageHeader eyebrow="Gallery" title="Photos and videos" lead="A growing collection from our school community." />

      <Section>
        {gallery.length === 0 ? (
          <div className="empty">
            <h2>No photos yet</h2>
            <p>Photographs and videos will appear here soon.</p>
          </div>
        ) : (
          <>
            <ul className="gallery">
              {gallery.map((g, i) => (
                <li key={g.id}>
                  <button
                    type="button"
                    className="gallery-btn"
                    aria-label={`Enlarge: ${g.alt}${g.video ? " (video)" : ""}`}
                    onClick={(e) => {
                      lastTrigger.current = e.currentTarget;
                      setOpen(i);
                    }}
                  >
                    <Photo img={g} className="rounded" />
                    {g.video && <span className="play" aria-hidden="true">Video</span>}
                  </button>
                </li>
              ))}
            </ul>
            <p className="muted narrow">
              Gallery images are placeholders and do not show real school events. They will be replaced with photographs
              the school owns and has permission to publish.
            </p>
          </>
        )}
      </Section>

      {current && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Enlarged gallery item" onClick={close}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            {current.video ? (
              <video key={current.id} controls poster={current.src} src={current.video} className="lightbox-media" />
            ) : (
              <Photo img={current} className="lightbox-media" eager />
            )}
            <p className="lightbox-cap">{current.alt} ({(open ?? 0) + 1} of {gallery.length})</p>
            <div className="lightbox-controls">
              <button type="button" className="btn btn-light" onClick={() => step(-1)}>Previous</button>
              <button type="button" className="btn btn-light" onClick={() => step(1)}>Next</button>
              <button type="button" className="btn btn-primary" ref={closeRef} onClick={close}>Close</button>
            </div>
          </div>
        </div>
      )}

      <AdmissionsBand />
    </>
  );
}
