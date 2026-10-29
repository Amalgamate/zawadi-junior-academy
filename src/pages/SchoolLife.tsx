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
        lead="The themes below describe the kind of school experience we are building. Specific programmes will be added once the school confirms them."
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
        <p className="muted narrow">
          Images on this page are placeholders. They will be replaced with photographs the school owns and has
          permission to share.
        </p>
      </Section>

      <Section className="tint">
        <div className="grid-2">
          <div className="panel">
            <h2>Clubs, sports and events</h2>
            <p className="todo-block">[INSERT CONFIRMED CLUBS, SPORTS, TRIPS AND EVENTS offered by the school.]</p>
          </div>
          <div className="panel">
            <h2>See more</h2>
            <p>Browse the gallery for photographs and videos, or read the latest news from school.</p>
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
