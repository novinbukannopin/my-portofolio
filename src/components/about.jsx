import React from "react";
import { Link } from "react-scroll"
const About = React.forwardRef((props, ref) => {
  return (
    <div className="about flex items-center" ref={ref} id="about">
      <div className="flex max-sm:ml-5 max-md:ml-20 ml-60">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
          <p className="text-teal-200 font-extrabold text-2xl">Hi, my name is</p>
          <h1 className="font-extrabold text-6xl">Achmad Raihan</h1>
          <h1 className="font-extrabold text-4xl">I build things for web.</h1>
          </div>
          <p className="text-base max-w-prose">I am from Indonesia. Currently I am learning <span>ReactJS</span>, <span>TailwindCSS</span>, <span>NextJS</span>. I am currently pursuing my bachelor's degree at Sunan Ampel State Islamic University, Information Systems Program.</p>
          <Link to="contact" spy={true} smooth={true} className="border-2 text-lg border-cyan-500 w-fit p-3 hover:cursor-pointer hover:border-cyan-950 hover:bg-cyan-950">Want to send a suggestion?</Link>
        </div>
      </div>
    </div>
  );
});

export default About;
