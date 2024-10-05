import React from "react";
import Main from "./pages/Main";
import LogoService from "./pages/LogoService";
import LogoDesign from "./pages/LogoDesign";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import Wonder from "./pages/Wonder";
import Outstanding from "./pages/Outstanding";
const Home = () => {
  return (
    <div>
      <Main />
      <LogoService />
      <LogoDesign />
      <Outstanding />

      <Portfolio />
      <Testimonials />
      <Blog />
      <Wonder />
    </div>
  );
};

export default Home;
