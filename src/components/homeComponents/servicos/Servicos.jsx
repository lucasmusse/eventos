import React from "react";
import { MainContainer, MainContent, Card } from "./ServicosStyle";
import Aniver from "../../../assets/anivercario.png";
import Bodas from "../../../assets/bodas.png";
import Casamento from "../../../assets/casamento.png";
import Chas from "../../../assets/chas.png";
import Corp from "../../../assets/corporativos.png";
import Matrim from "../../../assets/matrimonial.png";
import { Link } from "react-router-dom";




const Servicos = () => {
  return (
    <MainContainer id="servicos">
      <h2>Nossos Serviços</h2>

      <MainContent>
        <Card>
          <img src={Matrim} alt="" />

          <div>
            <h3>Serviço de Cerimonial</h3>
            <Link to="/servicos/1" href="#">
              Saber Mais
            </Link>
          </div>
        </Card>
        <Card>
          <img src={Casamento} alt="" />

          <div>
            <h3>Assessoria Completa do Casamento</h3>
            <Link to="/servicos/2" href="#">
              Saber Mais
            </Link>
          </div>
        </Card>
        <Card>
          <img src={Corp} alt="" />

          <div>
            <h3>Assessoria de Eventos Corporativos</h3>
            <Link to="/servicos/3" href="#">
              Saber Mais
            </Link>
          </div>
        </Card>
        <Card>
          <img src={Aniver} alt="" />

          <div>
            <h3>Assessoria de Aniversário</h3>
            <Link to="/servicos/4" href="#">
              Saber Mais
            </Link>
          </div>
        </Card>
        <Card>
          <img src={Bodas} alt="" />

          <div>
            <h3>Assessoria de Bodas</h3>
            <Link to="/servicos/5" href="#">
              Saber Mais
            </Link>
          </div>
        </Card>
        <Card>
          <img src={Chas} alt="" />

          <div>
            <h3>Assessoria de Chás</h3>
            <Link to="/servicos/6" href="#">
              Saber Mais
            </Link>
          </div>
        </Card>
      </MainContent>
    </MainContainer>
  );
};

export default Servicos;
