import { useState } from "react";
import { Link } from "react-router-dom";
import { posts, categories, formatDate } from "../content/news";
import Photo from "../components/Photo";
import { PageHeader, Section } from "../components/Sections";
import { useSeo } from "../components/useSeo";

export default function News() {
  useSeo("News & Announcements", "News, announcements and stories from Zawadi Junior Academy in Isiolo, Kenya.");
  const [cat, setCat] = useState<(typeof categories)[number]>("All");

  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const shown = cat === "All" ? sorted : sorted.filter((p) => p.category === cat);

  return (
    <>
      <PageHeader
        eyebrow="From Our Desks"
        title="News &amp; Announcements"
        lead="Articles, stories, and reflections from the Zawadi Junior Academy community."
      />

      <Section>
        {posts.length > 0 && (
          <div className="filters" role="group" aria-label="Filter by category">
            {categories.map((c) => (
              <button key={c} type="button" className={`chip ${cat === c ? "on" : ""}`} aria-pressed={cat === c} onClick={() => setCat(c)}>
                {c}
              </button>
            ))}
          </div>
        )}

        {posts.length === 0 ? (
          <div className="empty">
            <h2>No announcements yet</h2>
            <p>There is no news to show right now. Please check back soon.</p>
          </div>
        ) : shown.length === 0 ? (
          <div className="empty">
            <h2>Nothing in this category</h2>
            <p>There are no posts here yet.</p>
            <button className="btn btn-outline" onClick={() => setCat("All")}>Show all news</button>
          </div>
        ) : (
          <div className="cards">
            {shown.map((p) => (
              <Link key={p.slug} to={`/news/${p.slug}`} className="card">
                <Photo img={p.image} />
                <div className="card-body">
                  <p className="meta">
                    <time dateTime={p.date}>{formatDate(p.date)}</time> · {p.category}
                    {p.draft && <span className="tag">Demonstration post</span>}
                  </p>
                  <h2>{p.title}</h2>
                  <p>{p.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
