import styled from "styled-components";

export const HeaderStyle = styled.header`
  box-shadow: 0px 0px 20px 0px blueviolet;
  display: flex;
  align-items: center;

  width: 100%;
  height: 100px;

  background-image: linear-gradient(black, blueviolet);
  color: white;

  position: fixed;
  top: 0;
  left: 0; /* garante alinhamento correto */
  z-index: 11;

  overflow-x: hidden; /* evita scroll lateral */

  div {
    position: relative; /* necessário pro svg absolute */

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    min-height: 50px;
    padding: 10px;

    max-width: var(--container--1);
    margin: 0 auto;

    box-sizing: border-box; /* evita estouro de largura */

    h1 {
      font-size: var(--font-title-2);
      font-family: "Carter One", cursive, "Inter", sans-serif;
    }

    svg {
      opacity: 0.8;
      display: none;
    }

    svg:hover {
      opacity: 1;
    }

    nav {
      display: flex;
      gap: 20px;

      a {
        color: white;
        font-size: 18px;
        padding: 5px;
        border-bottom: 1px solid transparent;
        width: max-content;
      }

      a:hover {
        border-bottom: 1px solid;
        transform: scale(1.1);
        transition: 0.3s;
      }
    }

    @media (max-width: 850px) {
      svg {
        display: block;
        cursor: pointer;
        position: absolute; /* CORREÇÃO PRINCIPAL */
        right: 20px;
      }

      nav {
        display: none;
      }

      .displayFlex {
        display: flex;
      }
    }

    @media (max-width: 350px) {
      > h1 {
        font-size: 1.5rem;
      }
    }
  }
`;
