export const navLinks = [
  { id: "services", label: "Routes" },
  { id: "results", label: "Summit Log" },
  { id: "pricing", label: "Base Camp" },
];

export const services = [
  {
    num: "01",
    title: "Brand Strategy",
    desc: "Positioning, voice and visual identity that hold up past the first pitch deck.",
  },
  {
    num: "02",
    title: "Web Design & Development",
    desc: "Fast, accessible sites built by hand — no bloated builders slowing the ascent.",
  },
  {
    num: "03",
    title: "SEO & Search Growth",
    desc: "Technical SEO and content architecture that compounds instead of decaying.",
  },
  {
    num: "04",
    title: "Paid Media & Performance",
    desc: "Media buys tuned to payback period, not vanity impressions.",
  },
  {
    num: "05",
    title: "Content & Social",
    desc: "Editorial and social systems built to run without you refilling the tank weekly.",
  },
  {
    num: "06",
    title: "Analytics & CRO",
    desc: "Instrumentation and testing that tells you which trail actually converts.",
  },
];

export const results = [
  {
    stat: "+186%",
    label: "organic sessions, 5 months",
    quote:
      "NorthPeak rebuilt our site and search strategy in one pass. We stopped losing traffic to our own homepage.",
    author: "Priya M., Head of Growth, Fictional Outdoors Co.",
  },
  {
    stat: "3.1x",
    label: "return on ad spend",
    quote:
      "They tied every campaign to payback period from day one. No vanity dashboards.",
    author: "Daniel O., Founder, Fictional Roast Supply",
  },
  {
    stat: "1.2s",
    label: "homepage load, down from 6.4s",
    quote:
      "Our old site was hand-built on a page builder that fought us at every step. This one just works.",
    author: "Ana R., Ops Lead, Fictional Studio North",
  },
];

export const pricingTiers = [
  {
    name: "Basecamp",
    price: "$1,200",
    desc: "For teams testing the route before committing to the climb.",
    features: [
      "One-page site or landing page",
      "Monthly SEO check-in",
      "Basic analytics setup",
      "Email support",
    ],
    featured: false,
  },
  {
    name: "Ascent",
    price: "$3,400",
    desc: "For teams ready to grow deliberately across web and demand.",
    features: [
      "Full site build & redesign",
      "Ongoing SEO & content",
      "Paid media management",
      "Monthly strategy call",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Summit",
    price: "$7,500",
    desc: "For teams that need a full expedition team, not a vendor.",
    features: [
      "Everything in Ascent",
      "Dedicated strategist & dev",
      "Weekly reporting cadence",
      "CRO testing program",
      "Same-day support",
    ],
    featured: false,
  },
];

export const projectTypes = [
  { value: "brand", label: "Brand Strategy" },
  { value: "web", label: "Web Design & Development" },
  { value: "seo", label: "SEO & Search Growth" },
  { value: "paid", label: "Paid Media & Performance" },
  { value: "content", label: "Content & Social" },
  { value: "analytics", label: "Analytics & CRO" },
];
