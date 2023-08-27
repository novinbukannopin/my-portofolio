import "./App.css";
import { useRef } from "react";
import Content from "./components/content";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

import Contact from "./components/contact";
import Projects from "./components/projects";
import About from "./components/about";

export default function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <Navbar scrollToELement={{ aboutRef, projectsRef, contactRef }} />
      <Content>
        <About ref={aboutRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
      </Content>
      <Footer />
    </div>
  );
}
