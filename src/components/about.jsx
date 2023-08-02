import React from "react";
import { Fade } from "react-reveal";
import Shake from "react-reveal/Shake";
import { TypeAnimation } from "react-type-animation";

const About = React.forwardRef((props, ref) => {
  return (
    <div className="about" ref={ref} id="about">
      <div className="card">
        <Fade left>
          <img
            src="https://avatars.githubusercontent.com/u/73148419?s=400&u=172e9812e0a3e57e3cd6aef1565178b5e12e28d5&v=4"
            alt="profile"
          />
        </Fade>
        <Fade bottom>
          <div className="description">
            <h2>
              <TypeAnimation
                sequence={[
                  "Hi there",
                  1000,
                  "I'm Achmad",
                  1000,
                  "Nice too meet you",
                  1000,
                ]}
                wrapper="span"
                speed={250}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              ></TypeAnimation>
              <Shake delay={1100}>👋</Shake>
            </h2>
            <p>
              I'm Achmad, I'm beginner developer. Now I study at University
              Islam Negeri Sunan Ampel, Surabaya.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
});

export default About;
