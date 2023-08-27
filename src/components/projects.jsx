import React from "react";
import cashRegister from "../assets/CashRegister.png";
import noteApp from "../assets/NoteApp.png";
import spotimad from "../assets/Spotimad.png";
import todolist from "../assets/Todolist.png";
import webAutomation from "../assets/WebAutomation.png";
import { motion } from "framer-motion";

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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0 },
};

const Projects = React.forwardRef((props, ref) => {
  return (
    <motion.ul variants={container} initial="hidden" whileInView="show" className="projects" ref={ref} id="projects">
      {slides.map((value, index) => {
        return (
          <motion.li
            style={{
              ...cardStyle,
            }}
            variants={item}
            key={value.title}>
            <img src={value.src} style={{ ...imgStyle }} alt={value.title} />
            <p>{value.title}</p>
          </motion.li>
        );
      })}
    </motion.ul>
  );
});

export default Projects;
