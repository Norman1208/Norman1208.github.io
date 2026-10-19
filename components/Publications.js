import { PUBLICATIONS, CONTACT } from "../data/content";

// Bold the author's own name inside the author string.
function Authors({ text }) {
  const parts = text.split("A. N. Firdaus");
  return (
    <p className="pub-au">
      {parts.map((p, i) => (
        <span key={i}>
          {p}
          {i < parts.length - 1 && <strong>A. N. Firdaus</strong>}
        </span>
      ))}
    </p>
  );
}

export default function Publications() {
  return (
    <section id="publications" className="sec">
      <div className="sec-head">
        <div>
          <span className="lbl">Research</span>
          <h2 className="h2">Selected publications</h2>
        </div>
        <a href={CONTACT.scholar} className="link-strong">View all on Google Scholar →</a>
      </div>
      <ol className="pubs">
        {PUBLICATIONS.map((p) => (
          <li key={p.title} className="pub">
            <span className="pub-year">{p.year}</span>
            <div>
              <h3>{p.title}</h3>
              <Authors text={p.authors} />
              <p className="pub-venue">{p.venue}</p>
            </div>
            <div className="pub-meta">
              {p.citations > 0 && <span>Cited by {p.citations}</span>}
              {p.url && <a href={p.url}>View paper</a>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
