import styled from "styled-components";

export const MainContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 68px;

    font-family: 'Roboto', sans-serif;
    
    

`

export const MainContent = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 68px;
    margin: 10vw;
    
`






export const ServiceSection = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 36px;
    img{
        height: 400px;
        padding: 30px;
        border: 1px solid black;
    }
    p{
        width: 600px;
        text-align: center;
        
    }

    



`

export const ServiceSectionInvert = styled.div`

    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    gap: 36px;
    p{
        width: 600px;
        text-align: center;
    }
    img{
        height: 400px;
        padding: 30px;
        border: 1px solid black;
    }

`