import React from "react";
import { MainContainer, MainContent, ContactItem } from "./FooterStyle";
import Logo from '../../../assets/logopng.png'
import Whats from '../../../assets/whats.png'
import Insta from '../../../assets/insta.png'
import Email from '../../../assets/mail.png'

const Footer = () => {
    return (
        <MainContainer>
            <MainContent>
                <ContactItem>
                    <img src={Whats} alt="" />
                    <p><a href="https://api.whatsapp.com/send?phone=5547996053569">(47) 9 9605-3569</a></p>
                </ContactItem>
                <ContactItem>
                    <img src={Email} alt="" />
                    <p>event.assessoriaonline@gmail.com</p>
                </ContactItem>
                <ContactItem>
                    <img src={Insta} alt="" />
                    <p><a href="https://www.instagram.com/event.assessoria/">@event.assessoria</a></p>
                </ContactItem>



            </MainContent>

            <img src={Logo} alt="" />
        </MainContainer>
    )
}

export default Footer