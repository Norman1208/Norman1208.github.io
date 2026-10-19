import { PROJECTS, PROJECTS_NOTE } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="sec">
      <span className="lbl">Projects</span>
      <h2 className="h2">Engineering and software work</h2>
      <div className="proj-grid">
        {PROJECTS.map((p) => (
          <article key={p.title} className={`card${p.featured ? " card-wide" : ""}`}>
            <span className="lbl">{p.kind}</span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <ul className="tags">
              {p.tags.map((t) => (
                <li key={t} className="tag">{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="proj-note">{PROJECTS_NOTE}</p>
    </section>
  );
}
