import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const duration = 1000;

const About = React.forwardRef((props, ref) => {
  return (
    <div className="about" ref={ref} id="about">
      <motion.div className="card" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <img src="https://avatars.githubusercontent.com/u/73148419?s=400&u=172e9812e0a3e57e3cd6aef1565178b5e12e28d5&v=4" alt="profile" />
        <div className="description">
          <h2>
            <TypeAnimation sequence={["Hi there", duration, "I'm Achmad", duration, "I'm FE Developer", duration]} speed={250} style={{ display: "inline-block" }} repeat={Infinity}></TypeAnimation>
          </h2>
          <p>A person who like coding, playing games and watching anime.</p>
        </div>
      </motion.div>
    </div>
  );
});

export default About;
