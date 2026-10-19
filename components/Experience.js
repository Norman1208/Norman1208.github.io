import { EXPERIENCE } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="sec">
      <span className="lbl">Experience &amp; Education</span>
      <h2 className="h2">Career and academic background</h2>
      <div className="exp-grid">
        {EXPERIENCE.map((col) => (
          <div key={col.group} className="exp-col">
            {col.items.map((it) => (
              <article key={it.title} className="exp-item">
                {it.eyebrow && <span className="lbl">{it.eyebrow}</span>}
                <h3>{it.title}</h3>
                <p className="exp-org">{it.org}</p>
                <p>{it.text}</p>
              </article>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
