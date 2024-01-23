import styled from "styled-components";


export const ServiceSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 36px;
  img {
    height: 400px;
    padding: 30px;
    border: 1px solid black;
  }
  p {
    width: 600px;
    text-align: center;
  }
`;

export const ServiceSectionInvert = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  gap: 36px;
  p {
    width: 600px;
    text-align: center;
  }
  img {
    height: 400px;
    padding: 30px;
    border: 1px solid black;
  }
`;