import { Link } from "react-scroll";
import { useRef, useEffect, useState } from "react";

export default function Navbar({ scrollToELement }) {
  const duration = 500;
  const { aboutRef, workRef,  contactRef} = scrollToELement;
  const aboutBtn = useRef(null);
  const workBtn = useRef(null);
  const contactBtn = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const btnList = [aboutBtn, workBtn, contactBtn];
  const contentList = [aboutRef, workRef, contactRef];

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
          setActiveIndex(index);
        }
      }
    });
  };

  return (
    <nav className="fixed flex items-center justify-between w-full h-20 z-50">
      <img src="/logo.png" className="w-10 h-10 max-sm:ml-5 ml-24" alt="Logo" />
      <div className="flex max-sm:text-base text-xl max-sm:gap-5 gap-10 font-extrabold">
        <Link ref={aboutBtn} to="about" smooth={true} duration={duration} className={activeIndex === 0 ? "active" : ""}>
        <span>01. </span> About
        </Link>
        <Link ref={workBtn} to="work" smooth={true} offset={-100} duration={duration} className={activeIndex === 1 ? "active" : ""}  >
         <span>02. </span> Work
        </Link>
        <Link ref={contactBtn} to="contact" smooth={true} duration={duration} className={activeIndex === 2 ? "active" : ""}  >
         <span>03. </span> Contact
        </Link>
      </div>
    </nav>
  );
}
