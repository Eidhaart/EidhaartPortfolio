export default function Skills() {
  const skills = {
    "Frontend Systems": [
      { name: "HTML5", iconClass: "devicon-html5-plain" },
      { name: "CSS3", iconClass: "devicon-css3-plain" },
      { name: "JavaScript", iconClass: "devicon-javascript-plain" },
      { name: "React", iconClass: "devicon-react-original" },
      { name: "Next.js", iconClass: "devicon-nextjs-plain" },
    ],
    "Backend Arsenal": [
      { name: "Node.js", iconClass: "devicon-nodejs-plain" },
      { name: "Express.js", iconClass: "devicon-express-original" },
      { name: "MongoDB", iconClass: "devicon-mongodb-plain" },
    ],
    "Support Tools": [
      { name: "GitHub", iconClass: "devicon-github-original" },
      { name: "VSCode", iconClass: "devicon-vscode-plain" },
      { name: "Figma", iconClass: "devicon-figma-plain" },
    ],
  };

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items], index) => (
          <div className="skill-category" key={index}>
            <h3>{category}</h3>
            <ul>
              {items.map((skill, i) => (
                <li className="skill-pill" key={i}>
                  <i className={`skill-icon ${skill.iconClass}`}></i>
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
