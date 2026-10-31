interface Props {
  className?: string;
}

export default function OutdoorCollage({ className = "" }: Props) {
  return (
    <div className={`outdoor-collage-wrap ${className}`.trim()} aria-label="Collage of Zawadi Junior Academy outdoor campus activities and sports">
      <div className="outdoor-collage">
        {/* Decorative backdrop glow */}
        <div className="outdoor-backdrop-glow" aria-hidden="true" />

        {/* Photo 1: Wide campus gathering outdoors */}
        <div className="outdoor-slot slot-campus" title="Whole-school outdoor gathering">
          <img
            src="/media/school-photo-24.jpg"
            alt="Zawadi Junior Academy learners assembled outdoors on campus"
            loading="lazy"
            decoding="async"
          />
          <span className="outdoor-tag tag-campus">Campus Life</span>
        </div>

        {/* Photo 2: Scouts & outdoor stage presentation */}
        <div className="outdoor-slot slot-scouts" title="Outdoor scouting and activities">
          <img
            src="/media/school-photo-04.jpg"
            alt="Learners in scout scarves and uniforms on stage outdoors"
            loading="lazy"
            decoding="async"
          />
          <span className="outdoor-tag tag-scouts">Scouts &amp; Clubs</span>
        </div>

        {/* Photo 3: Outdoor celebration and milestone */}
        <div className="outdoor-slot slot-celebration" title="Joyful outdoor celebration">
          <img
            src="/media/graduation/pp2-grad-22.jpg"
            alt="Zawadi pupils tossing graduation caps outdoors into the sky"
            loading="lazy"
            decoding="async"
          />
          <span className="outdoor-tag tag-celebration">Rise &amp; Shine!</span>
        </div>

        {/* Floating pill chips */}
        <div className="floating-chip chip-sports" aria-hidden="true">
          <span className="chip-icon">⚽</span>
          <span>Sports &amp; Play</span>
        </div>

        <div className="floating-chip chip-nature" aria-hidden="true">
          <span className="chip-icon">🌿</span>
          <span>Outdoor Discovery</span>
        </div>

        {/* Decorative accent geometry */}
        <div className="outdoor-accent-dot dot-gold" aria-hidden="true" />
        <div className="outdoor-accent-dot dot-sky" aria-hidden="true" />
        <div className="outdoor-accent-ring" aria-hidden="true" />
      </div>
    </div>
  );
}

