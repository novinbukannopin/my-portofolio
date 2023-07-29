import "./App.css";
import Content from "./components/content";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.title = "Achmad's Portofolio";
  }, []);

  return (
    <div>
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}
