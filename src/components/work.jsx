import React from "react";
import noteApp from "../assets/NoteApp.png";
import spotimad from "../assets/Spotimad.png";
import webAutomation from "../assets/WebAutomation.png";
import { useState } from "react";

const images = [
  {
    title: "Spotimad",
    src: spotimad,
    type: {
      name: "Website Development",
      number: 1
    }
  },
  {
    title: "Tokopedia automation",
    src: webAutomation,
    type: {
      name: "Website Automation",
      number: 1
    }
  },
  {
    title: "Note App",
    src: noteApp,
    type: {
      name: "Desktop Development",
      number: 3
    }
  },
];

const imgStyle = {
  width: "250px",
  height: "250px",
};

const Work = React.forwardRef((props, ref) => {
  const [type, setType] = useState(0);
  const filteredImage = images.filter(v => v.type.number === type);

  return (
    <ul className="work flex flex-col items-center  gap-10" ref={ref} id="work">
      <div className="flex max-sm:flex-col flex-row items-center gap-10 text-xl border-b border-b-slate-800 p-3">
        <button className={type === 0 ? "p-2 bg-teal-300 rounded-md" :""} onClick={(() => setType(0))}>All projects</button>
        <button className={type === 1 ? "p-2 bg-teal-300 rounded-md" :""} onClick={() => setType(1)}>Website Development</button>
        <button className={type === 2 ? "p-2 bg-teal-300 rounded-md" :""} onClick={() => setType(2)}>Mobile</button>
        <button className={type === 3 ? "p-2 bg-teal-300 rounded-md" :""} onClick={() => setType(3)}>Desktop</button>
        <button className={type === 4 ? "p-2 bg-teal-300 rounded-md" :""} onClick={() => setType(4)}>Artificial Intelligent</button>
      </div>
      <div className="flex max-sm:flex-col flex-row gap-3">
      { filteredImage.length && type != 0 ? filteredImage.map((value, index) => {
        return (
          <li key={value.title} className="flex flex-col items-center h-fit p-5 bg-[url('/src/assets/card.jpg')]">
              <p className="text-2xl text-slate-950">{value.type.name}</p>
              <p className="text-xl text-slate-950">{value.title}</p>
              <img src={value.src} style={{ ...imgStyle }} alt={value.title} className="aspect-[16/9]" />
          </li>
        );
      }) : type === 0 ? images.map((value, index) => {
        return (
          <li key={value.title} className="flex flex-col items-center h-fit p-5 bg-[url('/src/assets/card.jpg')]">
              <p className="text-2xl text-slate-950">{value.type.name}</p>
              <p className="text-xl text-slate-950">{value.title}</p>
              <img src={value.src} style={{ ...imgStyle }} alt={value.title} className="aspect-[16/9]" />
          </li>
      )}):<p className="text-xl">I don't have any projects</p>}
      </div>
    </ul>
  );
});

export default Work;
