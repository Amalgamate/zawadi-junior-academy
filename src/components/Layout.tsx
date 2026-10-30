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

function FooterClouds() {
  return (
    <div className="footer-clouds" aria-hidden="true">
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Soft background cloud layer in playful sky-blue tint */}
        <path
          d="M0 120V75C40 75 75 62 110 62C155 62 190 82 240 82C295 82 335 50 395 50C460 50 500 78 565 78C625 78 665 42 735 42C805 42 850 72 915 72C975 72 1015 48 1080 48C1145 48 1185 76 1245 76C1300 76 1345 58 1390 58C1415 58 1430 63 1440 68V120H0Z"
          fill="var(--sky)"
          fillOpacity="0.22"
        />
        {/* Mid playful cloud puffs in bright sky / brand blue */}
        <path
          d="M0 120V88C30 88 55 74 90 74C135 74 165 92 210 92C265 92 300 64 360 64C420 64 455 86 515 86C575 86 610 58 675 58C740 58 775 82 840 82C905 82 940 60 1005 60C1070 60 1105 84 1170 84C1225 84 1260 66 1315 66C1365 66 1405 80 1440 85V120H0Z"
          fill="var(--sky)"
          fillOpacity="0.45"
        />
        {/* Foreground 2D vector cloud silhouette matching the navy-dark footer */}
        <path
          d="M0 120V92C25 92 48 76 78 76C112 76 132 94 168 94C208 94 235 68 280 68C328 68 355 90 398 90C440 90 472 62 525 62C578 62 608 84 655 84C702 84 735 54 795 54C855 54 888 80 940 80C990 80 1022 56 1078 56C1132 56 1162 82 1210 82C1252 82 1280 64 1325 64C1368 64 1400 82 1440 86V120H0Z"
          fill="var(--navy-dark)"
        />
      </svg>
    </div>
  );
}

function SocialIcon({ name }: { name: string }) {
  if (name === "facebook") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    );
  }
  if (name === "instagram") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    );
  }
  if (name === "tiktok") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    );
  }
  return null;
}

function FloatingWhatsApp() {
  const href = waHref("Hello Zawadi Junior Academy, I would like to make an enquiry.");
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with Zawadi Junior Academy on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.99.574 3.846 1.567 5.408L2 22l4.747-1.54A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 11.999 2zm0 18.182a8.181 8.181 0 01-4.17-1.146l-.299-.178-3.1 1.005 1.03-3.003-.195-.308A8.182 8.182 0 1112 20.182z" />
      </svg>
    </a>
  );
}

function Footer() {
  const social = Object.entries(school.social).filter(([, url]) => url);
  return (
    <footer className="site-footer">
      <FooterClouds />
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
            <li>{waHref() ? <a href={waHref()!} target="_blank" rel="noopener noreferrer">WhatsApp: {school.whatsapp}</a> : <Value v={school.whatsapp} />}</li>
            <li><Value v={school.address} /></li>
          </ul>
          {social.length > 0 && (
            <div className="social-wrap">
              <h2 className="mt" style={{ marginBottom: "0.5rem" }}>Connect with us</h2>
              <ul className="social">
                {social.map(([name, url]) => (
                  <li key={name}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn"
                      aria-label={name[0].toUpperCase() + name.slice(1)}
                      title={name[0].toUpperCase() + name.slice(1)}
                    >
                      <SocialIcon name={name} />
                      <span>{name === "facebook" ? "Facebook" : name === "instagram" ? "Instagram" : name === "tiktok" ? "TikTok" : name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
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
      <FloatingWhatsApp />
    </>
  );
}
