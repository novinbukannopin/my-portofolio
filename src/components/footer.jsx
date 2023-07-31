import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const sizeIcons = "25px";
  return (
    <div className="footer">
      <p>
        Made by <strong>Achmad</strong>
      </p>
      <div className="social">
        <a href="https://github.com/Achmad96">
          {<FaGithub size={sizeIcons} />}
        </a>
        <a href="https://www.instagram.com/mamadd_aja/">
          {<FaInstagram size={sizeIcons} />}
        </a>
        <a href="https://www.youtube.com/@Achmad325">
          {<FaYoutube size={sizeIcons} />}
        </a>
      </div>
    </div>
  );
}
