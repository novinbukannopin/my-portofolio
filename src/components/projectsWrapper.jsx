import cashRegister from "../images/cash-register.png";
import noteApp from "../images/note-app.png";
import spotimad from "../images/spotimad.png";
import todolist from "../images/todolist.png";
import webAutomation from "../images/web-automation.png";
import ImageSlider from "./imageSlider";

export default function ProjectsWrapper() {
  const slides = [
    {
      title: "Cash Register",
      source: cashRegister,
    },
    {
      title: "Note App",
      source: noteApp,
    },
    {
      title: "Spotimad",
      source: spotimad,
    },
    {
      title: "Todolist",
      source: todolist,
    },
    {
      title: "Web Automation",
      source: webAutomation,
    },
  ];

  const containerStyle = {
    width: "100%",
    height: "100vh",
    margin: "0 auto",
  };

  return (
    <div className="projects" style={containerStyle}>
      <ImageSlider slides={slides} />
    </div>
  );
}
