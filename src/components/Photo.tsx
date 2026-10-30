import { useState } from "react";
import { ImageSpec } from "../content/images";
import FloatingElements from "./FloatingElements";

interface Props {
  img: ImageSpec;
  className?: string;
  eager?: boolean;
  fill?: boolean; // absolutely fill the parent (used for the hero)
  /** Disable decorative floating shapes (e.g. on full-bleed hero) */
  noFloats?: boolean;
}

/** Stable numeric seed from a string (djb2) */
function strSeed(s: string): number {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h) ^ s.charCodeAt(i);
  return Math.abs(h);
}

/** Renders a real image when `src` is set and loads; otherwise a labelled placeholder. */
export default function Photo({ img, className = "", eager = false, fill = false, noFloats = false }: Props) {
  const [failed, setFailed] = useState(false);
  const cls = `photo ${fill ? "fill" : ""} ${className}`.trim();
  const style = { aspectRatio: `${img.w} / ${img.h}` };
  const showFloats = !noFloats && !fill; // no floats on full-bleed hero

  const wrapper = (content: React.ReactNode) =>
    showFloats ? (
      <div style={{ position: "relative", display: "contents" }}>
        <div style={{ position: "relative", display: "inline-block", width: "100%" }}>
          {content}
          <FloatingElements seed={strSeed(img.alt + img.src)} />
        </div>
      </div>
    ) : (
      <>{content}</>
    );

  if (img.src && !failed) {
    return wrapper(
      <img
        className={cls}
        src={img.src}
        alt={img.alt}
        width={img.w}
        height={img.h}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        style={style}
        onError={() => setFailed(true)}
      />
    );
  }
  return wrapper(
    <div className={`${cls} ph`} role="img" aria-label={img.alt} style={style}>
      <span>
        Photo placeholder
        <strong>{img.label}</strong>
      </span>
    </div>
  );
}
