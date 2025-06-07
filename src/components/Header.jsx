import { NavLink } from 'react-router-dom';
import "../styles/main.css";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">Welcome to my Portfolio Website....</div>
        <nav>
          <ul className="nav-list">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about"
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/projects"
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/skills"
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact"
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;