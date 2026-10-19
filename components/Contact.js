import { CONTACT } from "../data/content";

export default function Contact() {
  return (
    <footer id="contact" className="contact">
      <span className="lbl lbl-light">Contact</span>
      <h2 className="h2 h2-light">Open to research and engineering collaboration</h2>
      <p>Reach out about instrumentation, embedded systems, computer vision, or research partnerships.</p>
      <div className="contact-links">
        <a href={`mailto:${CONTACT.email}`} className="btn btn-light">Email</a>
        <a href={CONTACT.github} className="btn btn-outline">GitHub</a>
        <a href={CONTACT.scholar} className="btn btn-outline">Google Scholar</a>
        <a href={CONTACT.linkedin} className="btn btn-outline">LinkedIn</a>
      </div>
    </footer>
  );
}
