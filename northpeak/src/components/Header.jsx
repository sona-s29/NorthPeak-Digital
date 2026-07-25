import { useEffect, useState } from "react";
import BrandMark from "./BrandMark";
import { navLinks } from "../data";

export default function Header() {
  // "top" covers the hero, before any tracked section has scrolled into view.
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const sectionIds = ["top", ...navLinks.map((link) => link.id), "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport among those
        // currently intersecting, so the header tracks whichever section
        // the reader is actually looking at.
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        // Treat a section as "active" once it's crossed just below the
        // sticky header, and until it's mostly scrolled past.
        rootMargin: "-84px 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a href="#top" className="brand" aria-label="NorthPeak Digital home">
          <BrandMark />
          <span>
            NorthPeak <em>Digital</em>
          </span>
        </a>
        <nav className="site-nav" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={activeSection === link.id ? "page" : undefined}
              className={activeSection === link.id ? "is-active" : undefined}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={
              "nav-cta" + (activeSection === "contact" ? " is-active" : "")
            }
            aria-current={activeSection === "contact" ? "page" : undefined}
          >
            Start the climb
          </a>
        </nav>
      </div>
    </header>
  );
}
