import cashRegister from "../assets/CashRegister.png";
import noteApp from "../assets/NoteApp.png";
import spotimad from "../assets/Spotimad.png";
import todolist from "../assets/Todolist.png";
import webAutomation from "../assets/WebAutomation.png";
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
    <div className="projects" id="projects" style={containerStyle}>
      <ImageSlider slides={slides} />
    </div>
  );
}
