import { Link, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { PageHeader, Section } from "./components/Sections";
import { useSeo } from "./components/useSeo";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import SchoolLife from "./pages/SchoolLife";
import Transport from "./pages/Transport";
import News from "./pages/News";
import NewsArticle from "./pages/NewsArticle";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";

function NotFound() {
  useSeo("Page not found", "The page you were looking for could not be found.");
  return (
    <>
      <PageHeader eyebrow="404" title="We could not find that page" lead="The link may be out of date or mistyped." />
      <Section>
        <div className="btn-row">
          <Link to="/" className="btn btn-primary">Back to home</Link>
          <Link to="/contact" className="btn btn-outline">Contact us</Link>
        </div>
      </Section>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="academics" element={<Academics />} />
        <Route path="admissions" element={<Admissions />} />
        <Route path="school-life" element={<SchoolLife />} />
        <Route path="transport" element={<Transport />} />
        <Route path="news" element={<News />} />
        <Route path="news/:slug" element={<NewsArticle />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
