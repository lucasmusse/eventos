import React from "react";
import Header from "../../components/homeComponents/header/Header";
import Footer from "../../components/homeComponents/footer/Footer";
import { MainContainer } from "./paginaServicosStyle";
import { ServicesContainer } from "../../components/servicosComponents/servicesList/ServicesContainer";
import { useEffect } from "react";

export function PaginaServicos() {

  useEffect(() => {
    window.scrollTo(0, 0); // Isso fará com que a página role para o topo quando o componente for montado
  }, []);

  return (
    <MainContainer>
      <Header />
      <ServicesContainer />
      <Footer />
    </MainContainer>
  );
}
