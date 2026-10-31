import { Link } from "react-router-dom";
import { school } from "../config";
import { images, ImageSpec } from "../content/images";
import Photo from "../components/Photo";
import { PageHeader, Section, AdmissionsBand } from "../components/Sections";
import { useSeo } from "../components/useSeo";

const themes: { t: string; d: string; img: ImageSpec }[] = [
  { t: "Learning", d: "Lessons and activities that help children discover what they can do.", img: images.life1 },
  { t: "Creativity", d: "Room for children to imagine, make and express themselves.", img: images.life2 },
  { t: "Physical activity", d: "Time to move, play and enjoy being active together.", img: images.life3 },
  { t: "Community", d: "A school that works alongside families and the wider community.", img: images.life4 },
];

export default function SchoolLife() {
  useSeo("School Life", `Life at ${school.name}: learning, creativity, play and community in ${school.town}.`);
  return (
    <>
      <PageHeader
        eyebrow="School life"
        title="Learning is more than lessons"
        lead="A vibrant campus where academics, creative arts, character development, and physical recreation meet."
      />

      <Section>
        <div className="life-grid">
          {themes.map((x) => (
            <article key={x.t} className="life-item">
              <Photo img={x.img} className="rounded" />
              <h2>{x.t}</h2>
              <p>{x.d}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="tint">
        <div className="grid-2">
          <div className="panel">
            <h2>Clubs, Sports and Events</h2>
            <p>
              Beyond the classroom, learners develop teamwork, leadership, and diverse talents through our enriching
              co-curricular programs:
            </p>
            <ul style={{ paddingLeft: "1.2rem", margin: "0.5rem 0 0", display: "grid", gap: "0.4rem" }}>
              <li><strong>Scouting &amp; Girl Guides:</strong> Fostering resilience, community service, and outdoor skills.</li>
              <li><strong>Drama, Music &amp; Creative Arts:</strong> Annual music festival performances and elocution poetry.</li>
              <li><strong>Sports &amp; Athletics:</strong> Football, ball games, running, and annual inter-house sports competitions.</li>
              <li><strong>Science &amp; STEM Club:</strong> Practical experiments, environmental conservation, and tree planting.</li>
              <li><strong>School Celebrations:</strong> Annual PP2 graduation ceremonies, cultural showcases, and prize-giving days.</li>
            </ul>
          </div>
          <div className="panel">
            <h2>Explore More</h2>
            <p>Discover life at Zawadi through our rich media gallery and recent campus announcements.</p>
            <div className="btn-row">
              <Link to="/gallery" className="btn btn-outline">Open the gallery</Link>
              <Link to="/news" className="btn btn-outline">Read the news</Link>
            </div>
          </div>
        </div>
      </Section>

      <AdmissionsBand />
    </>
  );
}
