
// import "../styles/main.css";
// import "../styles/about.css";
// import "../styles/components/footer.css";
// import "../styles/components/header.css";
// const About = () => {
//   return (
//     <section className="about">
//       <div className="container">
//         <h1>About Me</h1>
//         <div className="about-content">
//           <div className="about-text">
//             <h2>Professional Summary</h2>
//             <p>
//               Passionate Web developer with 2+ years of experience building responsive and
//               accessible web applications. Specialized in React ecosystem with strong expertise
//               in state management, performance optimization, and modern CSS techniques.
//             </p>
            
//             <h2>Education</h2>
//             <div className="timeline">
//               <div className="timeline-item">
//                 <h3>Master of Computer Application</h3>
//                 <p>NIT Kurukshetra • 2023-2026</p>
//               </div>
//               <div className="timeline-item">
//                 <h3>Bachelor of Computer Application</h3>
//                 <p>RDVV • 2019-2021</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import "../styles/main.css";
import "../styles/about.css";
import "../styles/components/footer.css";
import "../styles/components/header.css";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h1>About Me</h1>
        <div className="about-content">
          <div className="about-text">
            <h2>Professional Summary</h2>
            <p>
              Passionate Full Stack Developer with 2+ years of experience building responsive and 
              accessible web applications. Specialized in the React ecosystem with strong expertise 
              in state management, performance optimization, and modern CSS techniques.
            </p>
            <p>
              Proficient in backend development with Node.js and Express, with hands-on experience 
              in database management using both MongoDB (NoSQL) and SQL databases. Skilled in 
              integrating frontend interfaces with backend services.
            </p>
            
            <h2>Technical Skills</h2>
            <div className="skills-highlight">
              <div className="skill-category">
                <h3>Frontend</h3>
                <ul>
                  <li>React.js</li>
                  <li>JavaScript (ES6+)</li>
                  <li>HTML5 & CSS3</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Backend</h3>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Databases</h3>
                <ul>
                  <li>MongoDB</li>
                  <li>SQL</li>
                  <li>Firebase</li>
                </ul>
              </div>
            </div>

            <h2>Education</h2>
            <div className="timeline">
              <div className="timeline-item">
                <h3>Master of Computer Application</h3>
                <p>NIT Kurukshetra • 2023-2026</p>
                <p>CGPA • 8.01</p>
              </div>
              <div className="timeline-item">
                <h3>Bachelor of Computer Application</h3>
                <p>RDVV • 2019-2021</p>
                <p>percentage • 69.03%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;