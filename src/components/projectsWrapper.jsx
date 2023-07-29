import cashRegister from "../assets/CashRegister.png";
import noteApp from "../assets/NoteApp.png";
import spotimad from "../assets/Spotimad.png";
import todolist from "../assets/Todolist.png";
import webAutomation from "../assets/WebAutomation.png";
import ImageSlider from "./imageSlider";

export default function ProjectsWrapper() {
  const slides = [
    {
      id: 1,
      source: cashRegister,
    },
    {
      id: 2,
      source: noteApp,
    },
    {
      id: 3,
      source: spotimad,
    },
    {
      id: 4,
      source: todolist,
    },
    {
      id: 5,
      source: webAutomation,
    },
  ];

  return (
    <div className="projects" id="projects">
      <ImageSlider slides={slides} />
    </div>
  );
}
