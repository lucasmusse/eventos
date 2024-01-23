import styled from "styled-components";

export const MainContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding-right: 40px;
    
    img{
        height: 280px
    }

   

`

export const MainContent = styled.div`
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        gap: 8px;
        padding: 30px;
        border-top:1px solid black;
        width: 350px;

`

export const ContactItem = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    
    a{
        text-decoration: none;
        color: black;
    }


    img{
        height: 20px;
        
    }

`