import { STATS } from "../data/content";

export default function Stats() {
  return (
    <section className="stats" aria-label="Highlights">
      {STATS.map((s) => (
        <div key={s.label} className="stat">
          <div className="stat-value">{s.value}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </section>
  );
}
