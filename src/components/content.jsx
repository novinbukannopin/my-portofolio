import EmailForm from "./emailForm";
import Wrapper from "./wrapper";
import AlertContextProvider from "../contexts/AlerContext";

export default function Content() {
  return (
    <div className="content">
      <div className="about" id="about">
        <div className="card">
          <img
            className="img-profile"
            src="https://avatars.githubusercontent.com/u/73148419?s=400&u=172e9812e0a3e57e3cd6aef1565178b5e12e28d5&v=4"
            alt="profile"
          />
          <div className="description">
            <h3>Hi there</h3>
            <p>
              I'm Achmad, I'm beginner developer. Now I study at University
              Islam Negeri Sunan Ampel.
            </p>
          </div>
        </div>
      </div>
      <div className="projects" id="projects">
        <Wrapper />
      </div>
      <AlertContextProvider>
        <EmailForm />
      </AlertContextProvider>
    </div>
  );
}
