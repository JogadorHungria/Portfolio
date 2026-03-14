import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const InicioStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(60px, 15vh, 150px) 20px;
  font-family: "Carter One", cursive, "Inter", sans-serif;
  padding-top: 190px;

  img {
    width: clamp(200px, 25vw, 350px);
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.6);
    margin-left: 80px;
    background-color: rgba(9, 9, 9, 0.7);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.8);
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: clamp(15px, 2vw, 25px);
    animation: ${fadeIn} 1s ease forwards;

    span {
      font-size: clamp(20px, 3vw, 37px);
      color: rgba(194, 188, 188, 1);
      text-shadow: 0px 0px 6px blueviolet;
    }

    h1 {
      font-size: clamp(36px, 5vw, 60px);
      text-shadow: 0px 0px 8px blue;
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    img {
      margin: 40px 0 0 0;
    }
  }
`;
