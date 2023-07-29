import EmailForm from "./emailForm";
import ProjectsWrapper from "./projectsWrapper";
import AlertContextProvider from "../contexts/AlerContext";
import About from "./about";

export default function Content() {
  return (
    <div className="content">
      <About />
      <ProjectsWrapper />
      <AlertContextProvider>
        <EmailForm />
      </AlertContextProvider>
    </div>
  );
}
