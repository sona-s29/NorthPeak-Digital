import BrandMark from "./BrandMark";
import { navLinks } from "../data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div>
          <a href="#top" className="brand brand-footer">
            <BrandMark />
            <span>
              NorthPeak <em>Digital</em>
            </span>
          </a>
          <p className="footer-tag">
            Strategy, sites, and growth systems for teams with altitude.
          </p>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          {navLinks.map((link) => (
            <a href={`#${link.id}`} key={link.id}>
              {link.label}
            </a>
          ))}
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <p className="wrap footer-credit">
        Built for Digital Heroes Training Task.
      </p>
    </footer>
  );
}
