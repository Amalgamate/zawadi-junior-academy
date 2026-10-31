export interface GeometricCollageImages {
  top: string;
  topAlt?: string;
  left: string;
  leftAlt?: string;
  bottomRight: string;
  bottomRightAlt?: string;
  bottomLeft: string;
  bottomLeftAlt?: string;
}

interface Props {
  className?: string;
  images?: GeometricCollageImages;
  label?: string;
}

const defaultImages: GeometricCollageImages = {
  top: "/media/school-photo-07.jpg",
  topAlt: "Dedicated learners participating actively in class at Zawadi Junior Academy",
  left: "/media/school-photo-24.jpg",
  leftAlt: "Whole-school assembly and gathering at Zawadi",
  bottomRight: "/media/school-photo-01.jpg",
  bottomRightAlt: "A joyful Zawadi Junior Academy learner in school uniform",
  bottomLeft: "/media/school-photo-28.jpg",
  bottomLeftAlt: "Creative arts, presentations and performance by learners",
};

export default function GeometricCollage({
  className = "",
  images = defaultImages,
  label = "Collage of Zawadi Junior Academy activities",
}: Props) {
  return (
    <div className={`geometric-collage-wrap ${className}`.trim()} aria-label={label}>
      <div className="geometric-collage">
        {/* Photo 1: Top Arch (Top Center-Right) */}
        <div className="collage-slot slot-top-class">
          <img
            src={images.top}
            alt={images.topAlt ?? "Zawadi school activity"}
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Photo 2: Left Pill */}
        <div className="collage-slot slot-left-outdoor">
          <img
            src={images.left}
            alt={images.leftAlt ?? "Zawadi outdoor activity"}
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Photo 3: Bottom Right Teardrop */}
        <div className="collage-slot slot-bottom-mentor">
          <img
            src={images.bottomRight}
            alt={images.bottomRightAlt ?? "Zawadi school community"}
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Photo 4: Bottom Center-Left Arch */}
        <div className="collage-slot slot-bottom-creative">
          <img
            src={images.bottomLeft}
            alt={images.bottomLeftAlt ?? "Zawadi school presentation"}
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Decorative Shape 1: Split vertical pill (top-right) */}
        <div className="collage-shape shape-split-pill" aria-hidden="true">
          <span className="pill-top" />
          <span className="pill-bottom" />
        </div>

        {/* Decorative Shape 2: Royal navy teardrop (center) */}
        <div className="collage-shape shape-teardrop" aria-hidden="true" />

        {/* Decorative Shape 3: Magenta arch (bottom-left) */}
        <div className="collage-shape shape-arch-magenta" aria-hidden="true" />

        {/* Decorative Shape 4: Sky-blue bowl / U-shape (bottom-center) */}
        <div className="collage-shape shape-bowl-sky" aria-hidden="true" />
      </div>
    </div>
  );
}
