import styled from "styled-components";

export const MainContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 26px;
    height: 100vh;
    a{
        text-decoration: none;
        color: black;
        border: 1px solid black;
        border-radius: 6px;
        padding: 6px 20px;
        background-color: aliceblue;
        :hover{
            opacity: 0.8;
        }
    }
    
`