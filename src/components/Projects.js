const projects = [
  {
    title: "Hycel.eu",
    description:
      "A service site for a professional animal rescue and transport company. Focused on clarity, trust, and accessibility—built with Next.js to present their services, contact info, and real-world field photos.",
    link: "https://hycel.eu",
  },
  {
    title: "Horseback Stunt Shows",
    description:
      "Promotional site for a horseback stunt team. Designed for bold visuals and mobile-first performance, showcasing services, photos, and performance info with flair.",
    link: "https://horsebackstuntshows.com",
  },
  {
    title: "Maja Winnick",
    description:
      "Personal brand site for an artist, featuring a minimalist layout, art gallery, and biography. Built to be simple, elegant, and easy to update with new works.",
    link: "https://majawinnick.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
