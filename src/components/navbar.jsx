import { Link } from "react-scroll";
import { useRef, useEffect, useState } from "react";

export default function Navbar({ scrollToELement }) {
  const duration = 500;
  const { aboutRef, projectsRef, contactRef } = scrollToELement;
  const aboutBtn = useRef(null);
  const projectsBtn = useRef(null);
  const contactBtn = useRef(null);
  const [activeButton, setActiveButton] = useState(0);
  const btnList = [aboutBtn, projectsBtn, contactBtn];
  const contentList = [aboutRef, projectsRef, contactRef];

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    contentList.forEach((value, index) => {
      const childElement = value.current;
      const buttonElement = btnList[index].current;

      if (childElement && buttonElement) {
        const childRect = childElement.getBoundingClientRect();
        const isInView = childRect.top < window.innerHeight && childRect.bottom > 0;
        if (isInView) {
          setActiveButton(index);
        }
      }
    });
  };

  return (
    <nav>
      <img src="/logo.png" alt="Logo" />
      <div>
        <Link ref={aboutBtn} to="about" smooth={true} duration={duration} className={activeButton === 0 ? "active" : ""}>
          About
        </Link>
        <Link ref={projectsBtn} to="projects" smooth={true} offset={-100} duration={duration} className={activeButton === 1 ? "active" : ""}>
          Projects
        </Link>
        <Link ref={contactBtn} to="contact" smooth={true} duration={duration} className={activeButton === 2 ? "active" : ""}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
