import { SITE } from "../data/content";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Hero() {
  return (
    <section id="about" className="hero">
      <div className="hero-copy">
        <span className="lbl">{SITE.role}</span>
        <h1>{SITE.headline}</h1>
        <p className="hero-intro">{SITE.intro}</p>
        <div className="hero-actions">
          <a href="#publications" className="btn btn-primary">View Publications</a>
          <a href="#contact" className="btn btn-ghost">Get in Touch</a>
        </div>
      </div>
      <div className="hero-photo">
        {SITE.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={`${basePath}${SITE.photo}`} alt={`Portrait of ${SITE.name}`} />
        ) : (
          <span>[PROFILE PHOTO]<br />800 × 1000</span>
        )}
      </div>
    </section>
  );
}
