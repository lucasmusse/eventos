import React from "react";
import { MainContainer, MainContent, ImagesDiv } from "./GaleriaStyle";
import imagem1 from '../../../assets/imagem1.jpeg'
import imagem2 from '../../../assets/imagem2.jpeg'
import imagem3 from '../../../assets/imagem3.jpeg'
import imagem5 from '../../../assets/imagem5.jpeg'
import imagem6 from '../../../assets/imagem6.jpeg'



import { Link } from "react-router-dom";




const Galeria = () => {

    

    return (
        <MainContainer id="galeria">

            <h2>Galeria</h2>

            <MainContent>
                <Link to="galerycarousel">
                    <ImagesDiv>
                        <img src={imagem1} alt="" />
                        <p>Suelen & Douglas</p>
                    </ImagesDiv>
                </Link>

                <Link to="galerycarousel">
                    <ImagesDiv>
                        <img src={imagem2} alt="" />
                        <p>Bruna & Jonatan</p>
                    </ImagesDiv>
                </Link>
                <Link to="galerycarousel">
                    <ImagesDiv>
                        <img src={imagem3} alt="" />
                        <p>Jéssica & Gustavo</p>
                    </ImagesDiv>
                </Link>
                <Link to="galerycarousel">
                    <ImagesDiv>
                        <img src={imagem5} alt="" />
                        <p>Elaine & Diogo</p>
                    </ImagesDiv>
                </Link>
                <Link to="galerycarousel">
                    <ImagesDiv>
                        <img src={imagem6} alt="" />
                        <p>Carol & Maikon</p>
                    </ImagesDiv>
                </Link>
                <Link to="galerycarousel">
                    <ImagesDiv>
                        <img src={imagem1} alt="" />
                        <p>Ana & Anderson</p>
                    </ImagesDiv>
                </Link>



            </MainContent>
        </MainContainer>
    )
}

export default Galeria