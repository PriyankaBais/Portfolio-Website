import "../styles/main.css";
import "../styles/main.css";
import "../styles/home.css";
import "../styles/components/footer.css";
import "../styles/components/header.css";
const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="hero-content">
          <h1>Priyanka Bais</h1>
          <h2>Web Developer</h2>
          <p className="tagline">Building exceptional digital experiences with React and modern web technologies</p>
          <a href="/contact" className="cta-button">Hire Me</a>
        </div>
      </div>
    </section>
  );
};

export default Home;