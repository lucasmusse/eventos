import React from "react";

import { Body } from "./IndexStyle";
import Header from "../components/homeComponents/header/Header";
import Banner from "../components/homeComponents/banner/Banner";
import About from "../components/homeComponents/about/About";
import Servicos from "../components/homeComponents/servicos/Servicos";
import Galeria from "../components/homeComponents/galeria/Galeria";
import Contato from "../components/homeComponents/contato/Contato";
import Footer from "../components/homeComponents/footer/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Isso fará com que a página role para o topo quando o componente for montado
  }, []);

  return (
    <Body>
      <Header />
      <Banner />
      <About />
      <Servicos />
      <Galeria />
      <Contato />
      <Footer />
    </Body>
  );
};

export default Index;
