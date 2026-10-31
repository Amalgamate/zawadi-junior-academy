import { Link } from "react-router-dom";
import { school } from "../config";
import { images } from "../content/images";
import { posts, formatDate } from "../content/news";
import { gallery } from "../content/gallery";
import Photo from "../components/Photo";
import { Section, AdmissionsBand } from "../components/Sections";
import { useSeo } from "../components/useSeo";

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
          <Photo img={images.welcome} className="rounded" />
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
            <p>Learning, creativity, play and community all shape a child's day. Photographs and stories from our school will be shared here.</p>
            <Link to="/school-life" className="text-link">See school life</Link>
          </div>
          <Photo img={images.life1} className="rounded" />
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

      <Section className="tint">
        <div className="section-head row">
          <div>
            <p className="eyebrow">From Our Desks</p>
            <h2>News &amp; Announcements</h2>
          </div>
          <Link to="/news" className="text-link">All posts &rarr;</Link>
        </div>
        {latest.length === 0 ? (
          <p className="muted">There are no announcements right now. Please check back soon.</p>
        ) : (
          <div className="cards">
            {latest.map((p) => (
              <Link key={p.slug} to={`/news/${p.slug}`} className="card">
                <Photo img={p.image} />
                <div className="card-body">
                  <p className="meta">{formatDate(p.date)} · {p.category}{p.draft && <span className="tag">Demonstration post</span>}</p>
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Section>

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
