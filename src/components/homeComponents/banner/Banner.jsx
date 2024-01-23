import React from "react";
import { useState, useEffect } from "react";
import "./Banner.css";

import imagem1 from "../../../assets/imagem1.jpeg";
import imagem2 from "../../../assets/imagem2.jpeg";
import imagem3 from "../../../assets/imagem3.jpeg";
import imagem5 from "../../../assets/imagem5.jpeg";
import imagem6 from "../../../assets/imagem6.jpeg";

const Banner = () => {
  const imagesList = [imagem1, imagem2, imagem3, imagem5, imagem6];

  const [image, setImage] = useState(imagem1);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % imagesList.length;
      setCurrentIndex(nextIndex);
      setImage(imagesList[nextIndex]);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [currentIndex, imagesList]);

  return (
    <section id="inicio" className="banner">
      {imagesList.map((imageItem, index) => (
        <img
          key={index}
          className={`banner ${index === currentIndex ? "active" : ""} ${
            index === currentIndex + 1 ||
            (index === 0 && currentIndex === imagesList.length - 1)
              ? "next"
              : ""
          } ${
            index === currentIndex - 1 ||
            (index === imagesList.length - 1 && currentIndex === 0)
              ? "previous"
              : ""
          }`}
          src={imageItem}
          alt=""
        />
      ))}
    </section>
  );
};

export default Banner;
