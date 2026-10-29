import { useState } from "react";
import { ImageSpec } from "../content/images";

interface Props {
  img: ImageSpec;
  className?: string;
  eager?: boolean;
  fill?: boolean; // absolutely fill the parent (used for the hero)
}

/** Renders a real image when `src` is set and loads; otherwise a labelled placeholder. */
export default function Photo({ img, className = "", eager = false, fill = false }: Props) {
  const [failed, setFailed] = useState(false);
  const cls = `photo ${fill ? "fill" : ""} ${className}`.trim();
  const style = { aspectRatio: `${img.w} / ${img.h}` };

  if (img.src && !failed) {
    return (
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
  return (
    <div className={`${cls} ph`} role="img" aria-label={img.alt} style={style}>
      <span>
        Photo placeholder
        <strong>{img.label}</strong>
      </span>
    </div>
  );
}
