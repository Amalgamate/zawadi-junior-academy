import { Link, useParams } from "react-router-dom";
import { posts, formatDate } from "../content/news";
import Photo from "../components/Photo";
import { PageHeader, Section, AdmissionsBand } from "../components/Sections";
import { useSeo } from "../components/useSeo";

export default function NewsArticle() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  const others = posts.filter((p) => p.slug !== slug).sort((a, b) => b.date.localeCompare(a.date)).slice(0, 2);

  useSeo(post ? post.title : "Article not found", post ? post.summary : "This news article could not be found.");

  if (!post) {
    return (
      <>
        <PageHeader eyebrow="News" title="Article not found" lead="This article may have been removed or the link may be wrong." />
        <Section>
          <Link to="/news" className="btn btn-primary">Back to all news</Link>
        </Section>
      </>
    );
  }

  return (
    <>
      <PageHeader eyebrow={post.category} title={post.title} />
      <Section>
        <article className="article">
          <p className="meta">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            {post.draft && <span className="tag">Demonstration post, not a real announcement</span>}
          </p>
          <Photo img={post.image} className="rounded" eager />
          <div className="prose">
            {post.body.map((para, i) => <p key={i}>{para}</p>)}
          </div>
          <p><Link to="/news" className="text-link">Back to all news</Link></p>
        </article>

        {others.length > 0 && (
          <div className="more-news">
            <h2>More news</h2>
            <div className="cards">
              {others.map((p) => (
                <Link key={p.slug} to={`/news/${p.slug}`} className="card">
                  <Photo img={p.image} />
                  <div className="card-body">
                    <p className="meta"><time dateTime={p.date}>{formatDate(p.date)}</time> · {p.category}</p>
                    <h3>{p.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Section>
      <AdmissionsBand />
    </>
  );
}
