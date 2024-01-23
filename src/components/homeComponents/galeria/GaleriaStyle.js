import styled from "styled-components";




export const MainContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 46px;
    padding: 4vw;
    
    
`

export const MainContent = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    align-items: center;
    min-height: 60vh;
    gap: 12px;
    row-gap: 46px;
    padding: 16px;
    max-width: 1000px;


    a{
        text-decoration: none;
        color: #000;
    }
    

    
       

`

export const ImagesDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    gap: 6px;

    height: 200px;
    width: 300px;
    
    
   img{
    height: 100%;
    width: 100%;
    transition: all ease 0.2s;
    border-radius: 12px;
    
   }:hover{
        transform: scale(1.02);
        opacity: 0.8;
    }



`