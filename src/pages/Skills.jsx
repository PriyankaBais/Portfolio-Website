import "../styles/main.css";
import "../styles/skills.css";
import "../styles/components/footer.css";
import "../styles/components/header.css";
const skills = [
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "HTML/CSS", level: 98 },
  { name: "Node.js", level: 82 },
   { name: "Express.js", level: 86 },
  { name: "MongoDB", level: 85 },
  { name: "Git", level: 90 },
  { name: "Github", level: 100 },
  { name: "SQL", level: 91 }

];

const Skills = () => {
  return (
    <section className="skills">
      <div className="container">
        <h1>My Skills</h1>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-info">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;