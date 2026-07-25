import { services } from "../data";

export default function Services() {
  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="wrap">
        <p className="eyebrow">ROUTES</p>
        <h2 id="services-title">Pick the right path up the mountain.</h2>
        <div className="grid-services">
          {services.map((service) => (
            <article className="card-service" key={service.num}>
              <span className="waypoint">{service.num}</span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
