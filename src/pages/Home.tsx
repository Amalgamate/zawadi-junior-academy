import { Link } from "react-router-dom";
import { school } from "../config";
import { images } from "../content/images";
import { posts } from "../content/news";
import { gallery } from "../content/gallery";
import Photo from "../components/Photo";
import NewsSlider from "../components/NewsSlider";
import GeometricCollage, { GeometricCollageImages } from "../components/GeometricCollage";
import { Section, AdmissionsBand } from "../components/Sections";
import { useSeo } from "../components/useSeo";

/* ─── TrendSCORE Platform data ───────────────────────────── */
const platformRoles = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="20" fill="#122176" opacity=".08"/>
        <path d="M20 11a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm-7 17c0-3.87 3.13-7 7-7s7 3.13 7 7H13z" fill="#122176"/>
        <rect x="27" y="22" width="8" height="6" rx="2" fill="#f4b81c"/>
        <path d="M29 22v-3a2 2 0 0 1 4 0v3" stroke="#f4b81c" strokeWidth="1.4" fill="none"/>
      </svg>
    ),
    role: "School Admin",
    desc: "Manage enrolments, fees, timetables, and daily operations from one intelligent dashboard.",
    color: "#122176",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="20" fill="#3fa2dc" opacity=".1"/>
        <path d="M15 12a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm10 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-5 9c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z" fill="#3fa2dc"/>
      </svg>
    ),
    role: "Parents",
    desc: "Track your child's attendance, results, fee statements, and receive real-time school updates.",
    color: "#3fa2dc",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="20" fill="#f4b81c" opacity=".12"/>
        <rect x="11" y="12" width="18" height="14" rx="2" fill="none" stroke="#f4b81c" strokeWidth="1.6"/>
        <path d="M15 26v2M25 26v2M11 18h18" stroke="#f4b81c" strokeWidth="1.4"/>
      </svg>
    ),
    role: "Tutors",
    desc: "Record lessons, set assignments, post CBC assessments, and communicate with parents seamlessly.",
    color: "#d99f0a",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="20" fill="#c8282d" opacity=".08"/>
        <path d="M12 28c0-2.76 3.58-5 8-5s8 2.24 8 5M20 11a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" fill="#c8282d" fillOpacity=".8"/>
        <path d="M30 17l3 2-3 2" stroke="#c8282d" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    role: "Support Staff",
    desc: "Coordinate transport, health records, and extracurricular schedules with visibility across the school.",
    color: "#c8282d",
  },
];

const schoolLifeCollageImages: GeometricCollageImages = {
  top: "/media/school-photo-27.jpg",
  topAlt: "Zawadi school staff and learners in outdoor environmental activities",
  left: "/media/school-photo-30.jpg",
  leftAlt: "Zawadi scouts in uniform marching outdoors on parade",
  bottomLeft: "/media/school-photo-10.jpg",
  bottomLeftAlt: "Learners in white choral robes singing into microphone outdoors",
  bottomRight: "/media/school-photo-03.jpg",
  bottomRightAlt: "Zawadi learner swimming in bright blue pool",
};

const pillars = [
  { t: "Nurturing learning", d: "A warm, encouraging place where children are supported to grow in confidence as learners." },
  { t: "Academic development", d: "Steady progress through the years, from the first days in Play Group to Grade 9." },
  { t: "Confidence and curiosity", d: "Encouraging children to ask questions, try new things and speak up." },
  { t: "Character and responsibility", d: "Learning to be kind, dependable and considerate members of a community." },
  { t: "Preparing for what comes next", d: "Building the habits and foundations children carry into future opportunities." },
];

export default function Home() {
  useSeo(
    "Zawadi Junior Academy | Play Group to Grade 9 in Isiolo, Kenya",
    "Zawadi Junior Academy in Isiolo, Kenya supports learners from Play Group to Grade 9. Enquire about admission and school transport."
  );
  const latest = [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 6);

  return (
    <>
      <section className="hero">
        <Photo img={images.hero} fill eager />
        <div className="hero-shade" />
        <div className="container hero-copy">
          <p className="eyebrow light">{school.motto}</p>
          <h1>A Bright Beginning. A Future Full of Possibilities.</h1>
          <p className="lead">Discover {school.name}, supporting learners from {school.learningRange} in {school.town}, {school.country}.</p>
          <div className="btn-row">
            <Link to="/admissions#enquire" className="btn btn-primary btn-lg">Enquire About Admission</Link>
            <Link to="/about" className="btn btn-light btn-lg">Discover Zawadi</Link>
          </div>
        </div>
      </section>

      <Section>
        <div className="split">
          <GeometricCollage />
          <div>
            <p className="eyebrow">Welcome</p>
            <h2>A school for the whole of a child's early journey</h2>
            <p>
              {school.name} welcomes learners from Play Group to Grade 9 in {school.town}. Families who join us are
              choosing a place where children can begin their learning, grow with the same school community, and
              move forward with confidence.
            </p>
            <p>We would love to hear from you, answer your questions and help you take the next step.</p>
            <Link to="/about" className="text-link">Read about Zawadi</Link>
          </div>
        </div>
      </Section>

      <Section className="tint">
        <div className="section-head">
          <p className="eyebrow">The learning journey</p>
          <h2>From Play Group to Grade 9</h2>
        </div>
        <div className="journey">
          <Link to="/academics#play-group" className="journey-card">
            <Photo img={images.academicsPlay} />
            <h3>Play Group</h3>
            <p>Where learning begins, in a welcoming environment for our youngest learners.</p>
            <span className="text-link">Explore learning</span>
          </Link>
          <Link to="/academics#grades" className="journey-card">
            <Photo img={images.academicsGrades} />
            <h3>Grade 1 to Grade 9</h3>
            <p>A continuing journey for growing learners, all within one school community.</p>
            <span className="text-link">Explore learning</span>
          </Link>
        </div>
      </Section>

      <Section>
        <div className="section-head">
          <p className="eyebrow">Why Zawadi</p>
          <h2>What we hope every child experiences</h2>
          <p className="muted">These are the themes that guide how we describe our aspirations for learners.</p>
        </div>
        <ol className="pillars">
          {pillars.map((p, i) => (
            <li key={p.t}>
              <span className="num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="tint">
        <div className="split reverse">
          <div>
            <p className="eyebrow">School life</p>
            <h2>Learning is more than lessons</h2>
            <p>From active, collaborative classrooms to outdoor athletics, sports and creative discovery, education at Zawadi engages the whole child.</p>
            <Link to="/school-life" className="text-link">See school life</Link>
          </div>
          <GeometricCollage images={schoolLifeCollageImages} label="Outdoor life and activities at Zawadi" />
        </div>
      </Section>

      <Section>
        <div className="split">
          <Photo img={images.transport} className="rounded" />
          <div>
            <p className="eyebrow">Transport</p>
            <h2>School transport is available</h2>
            <p>Zawadi offers school transport. Contact the school to ask about arrangements for your child.</p>
            <Link to="/transport#enquire" className="btn btn-secondary">Enquire About Transport</Link>
          </div>
        </div>
      </Section>

      {/* ── TrendSCORE Digital Platform ── */}
      <Section className="tint platform-section">
        <div className="section-head" style={{ textAlign: "center", maxWidth: "55ch", margin: "0 auto var(--s4)" }}>
          <p className="eyebrow">One Connected School</p>
          <h2>Powered by TrendSCORE</h2>
          <p className="muted">
            Zawadi Junior Academy runs on <strong>TrendSCORE</strong> — a fully integrated school management platform that
            keeps every part of our school community connected in real time.
          </p>
        </div>

        <div className="platform-roles">
          {platformRoles.map((r) => (
            <div key={r.role} className="platform-card">
              <div className="platform-icon">{r.icon}</div>
              <h3 style={{ color: r.color }}>{r.role}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Hub connector graphic */}
        <div className="platform-hub">
          <div className="platform-hub-inner">
            <img
              src="/media/trendscore/mainlogo.png"
              alt="TrendSCORE school platform"
              width="120"
              height="auto"
              loading="lazy"
            />
            <p className="platform-hub-label">One platform. Every stakeholder.</p>
          </div>
        </div>

        <div className="platform-actions">
          <a
            href="/trendscore.apk"
            download="TrendSCORE.apk"
            className="btn btn-secondary"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18" aria-hidden="true" style={{ marginRight: "0.4em", verticalAlign: "middle" }}>
              <path d="M10 2a1 1 0 0 1 1 1v8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L9 11.586V3a1 1 0 0 1 1-1zM3 17a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1z"/>
            </svg>
            Download Android App
          </a>
          <p className="platform-coming-soon">
            <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14" aria-hidden="true" style={{ marginRight: "0.3em", verticalAlign: "middle", opacity: 0.6 }}>
              <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-12a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L11 9.586V6z" clipRule="evenodd"/>
            </svg>
            Google Play listing coming soon
          </p>
        </div>
      </Section>

      {/* ── News / From Our Desks ── */}
      <Section>
        <NewsSlider posts={latest} />
      </Section>

      {/* ── Gallery ── */}
      <Section>
        <div className="section-head row">
          <div>
            <p className="eyebrow">Gallery</p>
            <h2>Moments from school</h2>
          </div>
          <Link to="/gallery" className="text-link">Open the gallery</Link>
        </div>
        <div className="mini-gallery">
          {gallery.slice(0, 4).map((g) => <Photo key={g.id} img={g} className="rounded" />)}
        </div>
      </Section>

      <AdmissionsBand />
    </>
  );
}
