import imagem1 from "../../assets/imagem1.jpeg";
import imagem2 from "../../assets/imagem2.jpeg";
import imagem3 from "../../assets/imagem3.jpeg";
import imagem5 from "../../assets/imagem5.jpeg";
import imagem6 from "../../assets/imagem6.jpeg";

import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

import { MainContainer } from "./GaleryCarouselStyle";
import { Link } from "react-router-dom";

const GaleryCarousel = () => {
  const images = [imagem1, imagem2, imagem3, imagem5, imagem6].map((image) => ({
    src: `${image}`,
  }));

  return (
    <MainContainer>
      <Link to="/"> Voltar </Link>
      <Carousel
      
        canAutoPlay={false}
        hasIndexBoard={false}
        hasSizeButton={false}
        hasMediaButton={false}
        isMaximized={true}
        images={images}
        style={{ height: 500, width: 800 }}
      />
    </MainContainer>
  );
};

export default GaleryCarousel;

// Documentação https://www.npmjs.com/package/react-gallery-carousel
