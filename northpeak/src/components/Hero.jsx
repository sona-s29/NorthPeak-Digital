function ContourField() {
  return (
    <div className="contour-field" aria-hidden="true">
      <svg viewBox="0 0 1440 620" preserveAspectRatio="none">
        <path
          className="contour c1"
          d="M-90 140C80 60 206 42 346 86c138 43 217 146 370 133 170-14 226-152 390-148 130 3 211 93 426 58"
        />
        <path
          className="contour"
          d="M-80 240C72 160 232 154 363 203c161 61 216 165 372 151 173-16 229-156 394-130 118 18 184 97 394 60"
        />
        <path
          className="contour"
          d="M-110 342c202-97 335-65 465-13 159 64 250 153 404 109 148-42 219-153 382-112 137 35 197 114 391 83"
        />
        <path
          className="contour c4"
          d="M-120 468c188-78 299-62 450-8 178 63 276 112 435 50 139-54 233-153 393-95 126 45 214 101 384 80"
        />
        <path
          className="contour"
          d="M-80 572c185-76 331-73 499-10 150 56 256 75 398 2 146-76 252-142 406-69 99 47 178 74 306 58"
        />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <ContourField />
      <div className="wrap hero-inner">
        <p className="eyebrow">DIGITAL GROWTH FOR AMBITIOUS TEAMS</p>
        <h1>
          Build a sharper brand, faster website, and cleaner path to revenue.
        </h1>
        <p className="hero-sub">
          NorthPeak Digital helps growing teams turn scattered marketing into a
          focused system for search, conversion, and long-term demand.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#contact">
            Start the climb
          </a>
          <a className="btn btn-ghost" href="#services">
            Explore routes
          </a>
        </div>
      </div>
    </section>
  );
}
