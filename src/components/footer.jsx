import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const sizeIcons = "25px";
  return (
    <div className="flex max-sm:flex-col justify-between items-center h-[10vh]">
      <p className="sm:ml-5">
        Made by <strong>Achmad</strong>
      </p>
      <div className="flex h-full justify-center items-center max-sm:gap-5 gap-10">
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
