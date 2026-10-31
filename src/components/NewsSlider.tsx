import { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Post, formatDate } from "../content/news";
import Photo from "./Photo";

interface Props {
  posts: Post[];
}

export default function NewsSlider({ posts }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [activeIdx, setActiveIdx] = useState(0);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanPrev(scrollLeft > 10);
    setCanNext(scrollLeft + clientWidth < scrollWidth - 10);

    // Calculate approximate active index
    const cardWidth = el.firstElementChild?.clientWidth || clientWidth / 3;
    const gap = 24;
    const idx = Math.round(scrollLeft / (cardWidth + gap));
    setActiveIdx(Math.min(Math.max(idx, 0), posts.length - 1));
  }, [posts.length]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByCard = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const scrollToIndex = (idx: number) => {
    const el = trackRef.current;
    if (!el) return;
    const cards = el.children;
    if (cards[idx]) {
      (cards[idx] as HTMLElement).scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    }
  };

  if (posts.length === 0) {
    return <p className="muted">There are no announcements right now. Please check back soon.</p>;
  }

  return (
    <div className="news-slider-wrapper">
      <div className="section-head row news-slider-head">
        <div>
          <p className="eyebrow">From Our Desks</p>
          <h2>News &amp; Announcements</h2>
        </div>
        <div className="news-slider-actions">
          <Link to="/news" className="text-link all-news-link">All posts &rarr;</Link>
          <div className="slider-arrows" role="group" aria-label="Slider navigation">
            <button
              type="button"
              className="slider-arrow prev"
              onClick={() => scrollByCard(-1)}
              disabled={!canPrev}
              aria-label="Previous article"
              title="Previous"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              className="slider-arrow next"
              onClick={() => scrollByCard(1)}
              disabled={!canNext}
              aria-label="Next article"
              title="Next"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="news-slider-track" ref={trackRef} role="region" aria-label="Articles carousel" tabIndex={0}>
        {posts.map((p, i) => (
          <article key={p.slug} className={`news-slider-card ${i === activeIdx ? "is-active" : ""}`}>
            <Link to={`/news/${p.slug}`} className="news-card-inner">
              <div className="news-card-media">
                <Photo img={p.image} noFloats />
                <span className={`news-badge badge-${p.category.toLowerCase().replace(/\s+/g, "-")}`}>
                  {p.category}
                </span>
              </div>
              <div className="news-card-content">
                <p className="news-date">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <time dateTime={p.date}>{formatDate(p.date)}</time>
                </p>
                <h3 className="news-title">{p.title}</h3>
                <p className="news-summary">{p.summary}</p>
                <span className="news-read-more">
                  Read article
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* Pagination pills */}
      <div className="news-slider-dots" role="tablist" aria-label="Article navigation dots">
        {posts.map((p, i) => (
          <button
            key={p.slug}
            type="button"
            className={`slider-dot ${i === activeIdx ? "is-active" : ""}`}
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to slide ${i + 1}: ${p.title}`}
            aria-selected={i === activeIdx}
            role="tab"
          />
        ))}
      </div>
    </div>
  );
}
