import "./App.css";
import { useRef } from "react";
import Content from "./components/content";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Contact from "./components/contact";
import Work from "./components/work";
import About from "./components/about"

export default function App() {
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <Navbar scrollToELement={{ aboutRef, workRef, contactRef }} />
      <Content>
        <About ref={aboutRef} />
        <Work ref={workRef} />
        <Contact ref={contactRef} />
      </Content>
      <Footer />
    </div>
  );
}
