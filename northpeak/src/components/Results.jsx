import { results } from "../data";

export default function Results() {
  return (
    <section
      className="section section-dark"
      id="results"
      aria-labelledby="results-title"
    >
      <div className="wrap">
        <p className="eyebrow">SUMMIT LOG</p>
        <h2 id="results-title">Proof from teams already moving higher.</h2>
        <div className="grid-results">
          {results.map((result) => (
            <figure className="card-result" key={result.stat}>
              <p className="stat">{result.stat}</p>
              <p className="stat-label">{result.label}</p>
              <blockquote>{result.quote}</blockquote>
              <figcaption>{result.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
