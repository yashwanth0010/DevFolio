import "../Assets/css/Header.css";
import { Link } from 'react-scroll';

function Header() {
  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a href="">Welcome!</a>
          </h1>

          <nav id="navbar" className="navbar">
            <ul>
              <li
              >
                <Link to="hero" smooth={true} duration={100}>Home</Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={100}>About</Link>
              </li>
              <li>
                <Link to="experience" smooth={true} duration={100}>Experience</Link>
              </li>
              <li>
                <Link to="education" smooth={true} duration={100}>Education</Link>
              </li>
              <li>
                <Link to="projects" smooth={true} duration={100}>Projects</Link>
              </li>
              <li>
                <Link to="skills" smooth={true} duration={100}>Skills</Link>
              </li>
              <li>
                <Link to="achievements" smooth={true} duration={100}>Achievements</Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={100}>Contact</Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
