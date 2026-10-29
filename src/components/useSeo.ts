import { useEffect } from "react";

function setMeta(selector: string, attr: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    const [, key] = selector.match(/\[(?:name|property)="([^"]+)"\]/) ?? [];
    el.setAttribute(selector.includes("property=") ? "property" : "name", key ?? "");
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

/** Sets the page title, description and social tags. Call once per page. */
export function useSeo(title: string, description: string) {
  useEffect(() => {
    const full = title.startsWith("Zawadi") ? title : `${title} | Zawadi Junior Academy`;
    document.title = full;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", full);
    setMeta('meta[property="og:description"]', "content", description);
  }, [title, description]);
}
