import { Fade } from "react-reveal";
import Tada from "react-reveal/Tada";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="card">
        <Fade left>
          <img
            className="img-profile"
            src="https://avatars.githubusercontent.com/u/73148419?s=400&u=172e9812e0a3e57e3cd6aef1565178b5e12e28d5&v=4"
            alt="profile"
          />
        </Fade>
        <Fade bottom>
          <div className="description">
            <h3>
              Hi there <Tada delay={1100}>👋</Tada>
            </h3>
            <p>
              I'm Achmad, I'm beginner developer. Now I study at University
              Islam Negeri Sunan Ampel, Surabaya.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}
