// Edit this file to update the whole site.

export const SITE = {
  name: "Achmad Norman Firdaus",
  title: "Achmad Norman Firdaus – Portfolio",
  description:
    "Instrumentation and control engineer: precision measurement, embedded systems, computer vision, and reliable software.",
  role: "Instrumentation & Control Engineer",
  headline: "Precision measurement, embedded systems, and reliable software.",
  intro:
    "I am an instrumentation and control engineer with a master’s degree from Institut Teknologi Bandung. My work spans electrical safety testing, medical robotics maintenance, data acquisition on STM32, and web systems for instrument management.",
  // Put your photo at public/profile.jpg (800 x 1000 works well), then set photo: "/profile.jpg"
  photo: null,
};

export const CONTACT = {
  email: "your.email@example.com", // TODO
  github: "https://github.com/your-username", // TODO
  linkedin: "https://www.linkedin.com/in/your-profile", // TODO
  scholar: "https://scholar.google.com/citations?user=oZZsQKAAAAAJ&hl=en",
};

export const STATS = [
  { value: "4", label: "Peer-reviewed conference papers" },
  { value: "4.00 / 4.00", label: "M.T. GPA, Instrumentation & Control, ITB" },
  { value: "3.69 / 4.00", label: "S.T. GPA, Engineering Physics, ITB" },
  { value: "West Java", label: "Indonesia" },
];

export const EXPERIENCE = [
  {
    group: "Industry",
    items: [
      {
        eyebrow: "Industry",
        title: "Standard Research Engineer",
        org: "LG Electronics, Cikarang",
        text: "Electrical and instrument safety testing on consumer electronics, including hazard identification and knowledge-sharing with design teams.",
      },
      {
        title: "Maintenance / Robotics Engineer",
        org: "Sina Robotics and Medical Innovations, Makassar",
        text: "Maintained telesurgery robotic systems and trained surgeons on the SinaFlex robotic platform.",
      },
      {
        eyebrow: "Leadership",
        title: "Head of Scholarship Program",
        org: "Rumah Sahabat Muda Scholarship, Bandung · 2022–2023",
        text: "Also served as content writer for the Engineering Physics student association’s technology magazine.",
      },
    ],
  },
  {
    group: "Education",
    items: [
      {
        eyebrow: "Education",
        title: "M.T., Instrumentation & Control Engineering",
        org: "Institut Teknologi Bandung · GPA 4.00 / 4.00",
        text: "Research in computer vision, deep learning, and precision instrumentation.",
      },
      {
        title: "S.T., Engineering Physics",
        org: "Institut Teknologi Bandung · GPA 3.69 / 4.00",
        text: "Coursework in NDT instrumentation and inspection, physics of materials, and solid state physics.",
      },
      {
        eyebrow: "Teaching",
        title: "Programming Instructor",
        org: "Algonova and elementary schools",
        text: "Teaches game development with Unity (C#) and Pygame Zero.",
      },
    ],
  },
];

// Add `url` (DOI or publisher link) to show a "View paper" link.
export const PUBLICATIONS = [
  {
    year: 2024,
    title: "Comparison Performance on SOTA Deep Learning Models for Coffee Beans Grading Inspection",
    authors: "A. N. Firdaus, A. Rakhmawati, V. Nadhira, E. Juliastuti, G. N. Utomo, et al.",
    venue: "2024 14th Asian Control Conference (ASCC), pp. 100–105",
    citations: 0,
    url: "",
  },
  {
    year: 2024,
    title: "Zinc Oxide Nanoflowers as an Active Material for Ethanol Gas Sensor",
    authors: "A. Prayoga, F. A. Ihsan, M. H. Al-Farizi, J. F. Sumbowo, A. N. Firdaus, A. P. Wijaya, et al.",
    venue: "AIP Conference Proceedings 3003(1)",
    citations: 1,
    url: "",
  },
  {
    year: 2023,
    title: "RGB-D Camera-Based Scanner for Hand Measurement",
    authors: "A. N. Firdaus, S. Suprijanto, A. G. Risangtuni",
    venue: "2023 8th International Conference on Instrumentation, Control, and Automation",
    citations: 3,
    url: "",
  },
  {
    year: 2023,
    title: "DFT Study of Lithium Diffusion in Pristine CaF₂ and MgF₂",
    authors: "F. A. Ihsan, M. H. Al-Farizi, J. F. Sumbowo, A. N. Firdaus, A. Prayoga, A. P. Wijaya, et al.",
    venue: "Proceedings of the 1st Conference on Quantum Sciences and Technology",
    citations: 0,
    url: "",
  },
];

export const PROJECTS = [
  {
    featured: true,
    kind: "Instrumentation · In progress",
    title: "Triaxial Tester Data Acquisition System",
    text: "STM32-based instrumentation for a geotechnical triaxial tester: six-wire LVDT signal conditioning with software demodulation, load cell acquisition via HX711, and three pore pressure channels. A desktop application for live sensor visualization is the next phase.",
    tags: ["STM32", "LVDT", "ADC / DAC / DMA", "Analog front-end"],
  },
  {
    kind: "Web · Django, Next.js",
    title: "ITMS Portal",
    text: "Instrument lifecycle tracking with QR codes, calibration certificate parsing with deviation calculation, and Excel audit export.",
    tags: ["Django", "Next.js"],
  },
  {
    kind: "Web · Flask",
    title: "TVLab",
    text: "Sample management and calibration tracking with magic-link login, QR scanning, and role-based access.",
    tags: ["Flask", "RBAC"],
  },
  {
    kind: "Platform · Next.js, NestJS",
    title: "GeoVastra",
    text: "Training platform for geotechnical and mining engineers, backed by Supabase.",
    tags: ["Next.js", "NestJS", "Supabase"],
  },
  {
    kind: "Automation · Python",
    title: "Expense Tracking Bot",
    text: "Telegram bot that reads receipt photos with a vision model, logs to Google Sheets, and forecasts spending.",
    tags: ["Python", "Google Sheets"],
  },
];

export const PROJECTS_NOTE =
  "Additional hardware work: battery charge/discharge testing with DC loads, an ICE-to-electric motorcycle conversion (BLDC, Votol EM controller), and ESP32 environmental monitoring for smart home automation.";

export const SKILLS = [
  { title: "Embedded & hardware", tags: ["STM32", "ESP32", "KiCad", "Signal conditioning"] },
  { title: "Web & software", tags: ["Python", "Flask", "Django", "Next.js", "NestJS"] },
  { title: "Machine learning", tags: ["Computer vision", "Deep learning", "RGB-D"] },
  { title: "Testing & safety", tags: ["Electrical safety", "NDT", "IEC 61511"] },
];

export const NAV = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#publications", label: "Publications" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
