import React from "react";
import todolist from "../assets/todolist.png"
import calculator from "../assets/calculator.png"
import { useState } from "react";

const images = [
  {
    title: "Todolist",
    src: todolist,
    type: {
      name: "Website",
      number: 1
    },
    link: ""
  },
  {
    title: "Calculator",
    src: calculator,
    type: {
      name: "Website",
      number: 1
    },
    link: ""
  },
];

const Work = React.forwardRef((props, ref) => {
  const [type, setType] = useState(0);
  const filteredImage = images.filter(v => v.type.number === type);

  return (
    <ul className="work flex flex-col items-center  gap-10" ref={ref} id="work">
      <div className="flex max-sm:flex-col flex-row items-center gap-10 text-xl border-b border-b-slate-800 p-3">
        <button className={type === 0 ? "p-2 bg-teal-300 rounded-md" : ""} onClick={(() => setType(0))}>All projects</button>
        <button className={type === 1 ? "p-2 bg-teal-300 rounded-md" : ""} onClick={() => setType(1)}>Website</button>
        <button className={type === 2 ? "p-2 bg-teal-300 rounded-md" : ""} onClick={() => setType(2)}>Mobile</button>
        <button className={type === 3 ? "p-2 bg-teal-300 rounded-md" : ""} onClick={() => setType(3)}>Desktop</button>
        <button className={type === 4 ? "p-2 bg-teal-300 rounded-md" : ""} onClick={() => setType(4)}>Artificial Intelligent</button>
      </div>
      <div className="flex max-sm:flex-col flex-row gap-3">
      { filteredImage.length && type !== 0 ? filteredImage.map((value, index) => {
        return (
          <li key={value.title} className="flex flex-col items-center h-fit p-5 bg-[url('/src/assets/card.jpg')]">
              <p className="text-2xl text-slate-950">{value.type.name}</p>
              <p className="text-xl text-slate-950">{value.title}</p>
              <img src={value.src} alt={value.title} className="w-80 aspect-[16/9]"></img>
          </li>
        );
      }) : type === 0 ? images.map((value, index) => {
        return (
          <li key={value.title} className="flex flex-col items-center h-fit p-5 bg-[url('/src/assets/card.jpg')]">
              <p className="text-2xl text-slate-950">{value.type.name}</p>
              <p className="text-xl text-slate-950">{value.title}</p>
              <img src={value.src} alt={value.title} className="w-80 aspect-[16/9]"></img>
          </li>
      )}):<p className="text-xl">I don't have any projects</p>}
      </div>
    </ul>
  );
});

export default Work;
