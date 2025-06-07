import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import "../styles/main.css";
import "../styles/components/footer.css"; // Make sure to create this file

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        {/* Horizontal Navigation Links */}
        <div className="footer-nav">
          <a href="/" className="nav-link">Home</a>
          <span className="nav-divider">•</span>
          <a href="/about" className="nav-link">About</a>
          <span className="nav-divider">•</span>
          <a href="/projects" className="nav-link">Projects</a>
          <span className="nav-divider">•</span>
          <a href="/skills" className="nav-link">Skills</a>
          <span className="nav-divider">•</span>
          <a href="/contact" className="nav-link">Contact</a>
        </div>

        {/* Social Links */}
        <div className="social-links">
          <a href="https://github.com/PriyankaBais" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/priyanka-bais-16b63a288/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
          <a href="mailto:priyanka0601bais@gmail.com">
            <FaEnvelope className="social-icon" />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Priyanka Bais. All rights reserved.</p>
          <p>Built with React and ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;