import React from "react";

import { MainContent, Image } from "./ServicesContainerStyle";

import { Service, ServiceInvert } from "../ServicesSection";

import imagem1 from "../../../assets/imagem1.jpeg";
import imagem2 from "../../../assets/imagem2.jpeg";
import imagem3 from "../../../assets/imagem3.jpeg";

import Aniver from "../../../assets/anivercario.png";
import Bodas from "../../../assets/bodas.png";
import Casamento from "../../../assets/casamento.png";
import Chas from "../../../assets/chas.png";
import Corp from "../../../assets/corporativos.png";
import Matrim from "../../../assets/matrimonial.png";

 

import { useParams } from "react-router-dom";

export function ServicesContainer() {
  const params = useParams();
  const userID = Number(params.id);

  if (userID === 1) {
    return (
      <MainContent>
        <Image src={Matrim} alt="" />
        <h2>Serviço de Cerimonial</h2>
        <Service
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          img={imagem1}
        />
        <ServiceInvert
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          img={imagem2}
        />
        <Service
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          img={imagem3}
        />
      </MainContent>
    );
  }
  if (userID === 2) {
    return (
      <MainContent>
        <Image src={Casamento} alt="" />
        <h2>Assessoria Completa do Casamento</h2>
        <Service
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          img={imagem1}
        />
        <ServiceInvert
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          img={imagem2}
        />
        <Service
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          img={imagem3}
        />
      </MainContent>
    );
  }

  if (userID === 3) {
    return (
      <MainContent>
        <Image src={Corp} alt="" />
        <h2>Assessoria de Eventos Corporativos</h2>
        <Service
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          img={imagem1}
        />
        <ServiceInvert
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          img={imagem2}
        />
        <Service
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          img={imagem3}
        />
      </MainContent>
    );
  }

  if (userID === 4) {
    return (
      <MainContent>
        <Image src={Aniver} alt="" />
        <h2>Assessoria de Aniversário</h2>
        <Service
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          img={imagem1}
        />
        <ServiceInvert
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          img={imagem2}
        />
        <Service
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          img={imagem3}
        />
      </MainContent>
    );
  }

  if (userID === 5) {
    return (
      <MainContent>
        <Image src={Bodas} alt="" />
        <h2>Assessoria de Bodas</h2>
        <Service
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          img={imagem1}
        />
        <ServiceInvert
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          img={imagem2}
        />
        <Service
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          img={imagem3}
        />
      </MainContent>
    );
  }

  if (userID === 6) {
    return (
      <MainContent>
        <Image src={Chas} alt="" />
        <h2>Assessoria de Chás</h2>
        <Service
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          img={imagem1}
        />
        <ServiceInvert
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          img={imagem2}
        />
        <Service
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          img={imagem3}
        />
      </MainContent>
    );
  }
}

// Redux
// Array (simular banco de dados)
// styled components rederização condicional
// Use PARAMS
