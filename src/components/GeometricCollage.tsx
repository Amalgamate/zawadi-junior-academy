interface Props {
  className?: string;
}

export default function GeometricCollage({ className = "" }: Props) {
  return (
    <div className={`geometric-collage-wrap ${className}`.trim()} aria-label="Collage of Zawadi Junior Academy classroom and outdoor activities">
      <div className="geometric-collage">
        {/* Photo 1: Top Center/Right — Students in classroom learning */}
        <div className="collage-slot slot-top-class" title="Classroom learning at Zawadi">
          <img
            src="/media/school-photo-27.jpg"
            alt="Zawadi learners focused on coursework in class"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Photo 2: Left — Outdoor sports & recreation */}
        <div className="collage-slot slot-left-outdoor" title="Outdoor activities & recreation">
          <img
            src="/media/school-photo-30.jpg"
            alt="Zawadi pupils enjoying outdoor games and recreation in the courtyard"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Photo 3: Bottom Right — Teacher mentorship & collaborative study */}
        <div className="collage-slot slot-bottom-mentor" title="Teacher guidance and mentorship">
          <img
            src="/media/school-photo-22.jpg"
            alt="Dedicated Zawadi teachers mentoring young learners"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Photo 4: Bottom Center-Left — Creative arts & practical presentation */}
        <div className="collage-slot slot-bottom-creative" title="Creative arts & presentation">
          <img
            src="/media/school-photo-28.jpg"
            alt="Learners engaged in creative presentation and performance"
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
