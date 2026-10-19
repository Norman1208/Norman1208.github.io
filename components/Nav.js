import { NAV, SITE } from "../data/content";

export default function Nav() {
  return (
    <header className="nav">
      <a href="#about" className="nav-brand">{SITE.name}</a>
      <nav aria-label="Primary" className="nav-links">
        {NAV.map((n) => (
          <a key={n.href} href={n.href}>{n.label}</a>
        ))}
      </nav>
    </header>
  );
}
