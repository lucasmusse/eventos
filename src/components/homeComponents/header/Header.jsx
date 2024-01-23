import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import LogoPng from '../../../assets/logopng.png'
import './Header.css'
import { Link } from "react-router-dom";






const Header = () => {
    return(
        <div className="header">
            <div className="header--logo">
                <img src={LogoPng} alt="" />
            </div>
            <div className="header--menu">
            <AnchorLink href="#inicio"><Link to="/">Início</Link></AnchorLink>
                <AnchorLink href="#sobreNos"><Link to="/">Sobre Nós</Link></AnchorLink>
                <AnchorLink href="#servicos">Serviços</AnchorLink>
                <AnchorLink href="#galeria">Galeria</AnchorLink>
                <AnchorLink href="#contato">Contato</AnchorLink>
            </div>
        </div>
    )
}

export default Header