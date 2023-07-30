import { Fade } from "react-reveal";
import cashRegister from "../assets/CashRegister.png";
import noteApp from "../assets/NoteApp.png";
import spotimad from "../assets/Spotimad.png";
import todolist from "../assets/Todolist.png";
import webAutomation from "../assets/WebAutomation.png";

const slides = [
  {
    title: "Cash Register",
    src: cashRegister,
  },
  {
    title: "Note App",
    src: noteApp,
  },
  {
    title: "Spotimad",
    src: spotimad,
  },
  {
    title: "Todolist",
    src: todolist,
  },
  {
    title: "Web Automation",
    src: webAutomation,
  },
];

const cardStyle = {
  display: "flex",
  flexDirection: "column",
  padding: "10px",
  width: "250px",
  height: "auto",
  fontSize: "20px",
  gap: "1rem",
};

const imgStyle = {
  width: "250px",
  height: "250px",
};

export default function ProjectsWrapper() {
  return (
    <div className="projects" id="projects">
      {slides.map((value, index) => {
        return (
          <Fade key={value.title} left delay={index * 100}>
            <div
              style={{
                ...cardStyle,
              }}
            >
              <img src={value.src} style={{ ...imgStyle }} alt={value.title} />
              <p>{value.title}</p>
            </div>
          </Fade>
        );
      })}
    </div>
  );
}
