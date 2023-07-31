import "./App.css";
import Content from "./components/content";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

import Contact from "./components/contact";
import ProjectsWrapper from "./components/projectsWrapper";
import AlertContextProvider from "./contexts/AlertContext";
import About from "./components/about";

export default function App() {
  return (
    <div>
      <Navbar />
      <Content>
        <About />
        <ProjectsWrapper />
        <AlertContextProvider>
          <Contact />
        </AlertContextProvider>
      </Content>
      <Footer />
    </div>
  );
}
