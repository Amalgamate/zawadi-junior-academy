import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { school, nav, telHref, waHref, mailHref } from "../config";
import { Value } from "./ContactActions";

function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const phoneReady = telHref();
  const waReady = waHref();

  return (
    <header className="site-header">
      {/* Top utility bar */}
      <div className="topbar">
        <div className="container topbar-inner">
          <span className="topbar-tag">🎓 {school.learningRange}</span>
          <div className="topbar-contacts">
            {phoneReady ? (
              <a href={phoneReady} className="topbar-link">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" /></svg>
                {school.phone}
              </a>
            ) : null}
            {waReady ? (
              <a href={waReady} target="_blank" rel="noopener noreferrer" className="topbar-link">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.99.574 3.846 1.567 5.408L2 22l4.747-1.54A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 11.999 2zm0 18.182a8.181 8.181 0 01-4.17-1.146l-.299-.178-3.1 1.005 1.03-3.003-.195-.308A8.182 8.182 0 1112 20.182z" /></svg>
                WhatsApp
              </a>
            ) : null}
            <a href="/contact" className="topbar-link">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
              {school.town}, Kenya
            </a>
          </div>
        </div>
      </div>

      {/* Main nav row */}
      <div className="container header-row">
        <Link to="/" className="brand" aria-label={`${school.name}, home`}>
          <img src="/logo-zawadi.png" alt="" width="56" height="52" />
          <span className="brand-text">
            <strong>{school.name}</strong>
            <em>{school.motto}</em>
          </span>
        </Link>

        <nav className={`nav ${open ? "open" : ""}`} id="main-nav" aria-label="Main">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === "/"}>{n.label}</NavLink>
          ))}
          <Link to="/admissions#enquire" className="btn btn-primary nav-cta">Enquire</Link>
        </nav>

        <button className="menu-btn" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen((o) => !o)}>
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="bars" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}

function Footer() {
  const social = Object.entries(school.social).filter(([, url]) => url);
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <img src="/logo-zawadi.png" alt={`${school.name} logo`} width="92" height="85" loading="lazy" />
          <p className="footer-name">{school.name}</p>
          <p className="footer-motto">{school.motto}</p>
          <p>{school.town}, {school.country}</p>
        </div>
        <div>
          <h2>Explore</h2>
          <ul>
            {nav.map((n) => <li key={n.to}><Link to={n.to}>{n.label}</Link></li>)}
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </div>
        <div>
          <h2>Enquiries</h2>
          <ul>
            <li><Link to="/admissions#enquire">Admissions enquiry</Link></li>
            <li><Link to="/transport#enquire">Transport enquiry</Link></li>
          </ul>
          <h2 className="mt">Contact</h2>
          <ul className="plain">
            <li>{telHref() ? <a href={telHref()!}>{school.phone}</a> : <Value v={school.phone} />}</li>
            <li>{mailHref() ? <a href={mailHref()!}>{school.email}</a> : <Value v={school.email} />}</li>
            <li>{waHref() ? <a href={waHref()!} target="_blank" rel="noopener noreferrer">WhatsApp</a> : <Value v={school.whatsapp} />}</li>
            <li><Value v={school.address} /></li>
          </ul>
          {social.length > 0 && (
            <ul className="social">
              {social.map(([name, url]) => (
                <li key={name}><a href={url} target="_blank" rel="noopener noreferrer">{name[0].toUpperCase() + name.slice(1)}</a></li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="container footer-base">
        <p>© {new Date().getFullYear()} {school.name}. All rights reserved.</p>
        <p><Link to="/privacy">Privacy Policy</Link></p>
      </div>
    </footer>
  );
}

export default function Layout() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
