import { pricingTiers } from "../data";

export default function Pricing() {
  return (
    <section className="section" id="pricing" aria-labelledby="pricing-title">
      <div className="wrap">
        <p className="eyebrow">BASE CAMP</p>
        <h2 id="pricing-title">Engagements sized for the climb ahead.</h2>
        <div className="grid-pricing">
          {pricingTiers.map((tier) => (
            <article
              className={
                "card-price" + (tier.featured ? " card-price-featured" : "")
              }
              key={tier.name}
            >
              {tier.featured ? (
                <p className="featured-flag">Popular route</p>
              ) : null}
              <h3>{tier.name}</h3>
              <p className="price">
                {tier.price} <span>/ mo</span>
              </p>
              <p className="price-desc">{tier.desc}</p>
              <ul>
                {tier.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a
                className={
                  tier.featured ? "btn btn-primary" : "btn btn-outline"
                }
                href="#contact"
              >
                Choose {tier.name}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
