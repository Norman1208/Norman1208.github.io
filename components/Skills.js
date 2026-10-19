import { SKILLS } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="sec">
      <span className="lbl">Skills</span>
      <h2 className="h2">Core competencies</h2>
      <div className="skill-grid">
        {SKILLS.map((s) => (
          <article key={s.title} className="card">
            <h3 className="card-sm">{s.title}</h3>
            <ul className="tags tags-flat">
              {s.tags.map((t) => (
                <li key={t} className="tag">{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
