import styled from "styled-components";

export const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 46px;
  padding: 4vw;

  background-color: #FFEBD6;
`;

export const MainContent = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 22px;
  row-gap: 60px;
  max-width: 1000px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  text-align: center;
  row-gap: 16px;
  width: 260px;
  min-height: 150px;
  padding: 8px;

  img {
    width: 80px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 120px;

    width: 100%;
  }

  a {
    text-decoration: none;
    border: 1px solid black;
    color: black;
    padding: 6px 0;
    border-radius: 6px;
  }
`;
