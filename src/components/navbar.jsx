import { Fade } from "react-reveal";
import { Link } from "react-scroll";

export default function Navbar() {
  const delay = 500;
  const duration = 500;
  return (
    <nav>
      <Fade left delay={delay - 100}>
        <img src="/logo.png" alt="Logo" />
      </Fade>
      <div>
        <Fade left delay={delay}>
          <Link to="about" smooth={true} duration={duration}>
            About
          </Link>
        </Fade>
        <Fade left delay={delay + 100}>
          <Link to="projects" smooth={true} offset={-100} duration={duration}>
            Projects
          </Link>
        </Fade>
        <Fade left delay={delay + 200}>
          <Link to="contact" smooth={true} duration={duration}>
            Contact
          </Link>
        </Fade>
      </div>
    </nav>
  );
}
