import "../styles/main.css";
import "../styles/components/footer.css";
import "../styles/components/header.css";
import "../styles/projects.css";
const projects = [
  {
    id: 1,
    title: "E-commerce website-EShop",
    description: "E-Shop is a front-end e-commerce website built with HTML, CSS, and JavaScript that lets users browse products and manage a shopping cart. It offers a responsive design with dynamic cart updates and a simulated payment process.",
    technologies: ["HTML", "CSS", "Javascript",],
  },
  {
    id: 2,
    title: "Game-Tic Tac Toe",
    description: "Tic Tac Toe is a simple two-player game built using React, allowing users to take turns marking X or O on a 3x3 grid. The app features interactive UI, state management, and win/draw detection logic.",
    technologies: ["React"],
    
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive React portfolio website showcasing projects and skills with smooth animated transitions and a modern, user-friendly design.",
    technologies: ["React"],
  
  }
];

const Projects = () => {
  return (
    <section className="projects">
      <div className="container">
        <h1>My Projects</h1>
        <div className="projects-grid">
          {projects.map(project => (
            <div className="project-card" key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
          
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;