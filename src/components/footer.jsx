import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const sizeIcons = "25px";
  return (
    <div className="footer">
      <p>
        Made by <strong>Achmad</strong>
      </p>
      <div className="social">
        <a>{<FaGithub size={sizeIcons} />}</a>
        <a>{<FaInstagram size={sizeIcons} />}</a>
        <a>{<FaTwitter size={sizeIcons} />}</a>
      </div>
    </div>
  );
}
