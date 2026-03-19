import styled from "styled-components";

export const ProjetosStyled = styled.section`
  padding-top: 50px;

  .carousel {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .carousel-slides {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    overflow: hidden;
  }

  .carousel-item {
    flex: 0 0 calc(100% / 3 - 12px); /* 3 cards desktop */
    padding: 6px;
    opacity: 0;
    transition:
      opacity 0.5s ease,
      transform 0.5s ease;
    transform: scale(0.95);
  }

  .carousel-item.active {
    opacity: 1;
    transform: scale(1);
  }

  .prev-button,
  .next-button {
    position: absolute;
    top: 50%;
    transform: translateY(-60%);
    background-color: rgba(0, 0, 0, 0.2);
    border: none;
    font-size: 2rem;
    cursor: pointer;
    z-index: 10;
    color: grey;
    padding: 0.5rem 1rem;
    border-radius: 50%;
    transition:
      background-color 0.3s,
      color 0.3s;
  }

  .prev-button:hover,
  .next-button:hover {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
  }

  /* DISTÂNCIA MAIOR DOS CARDS */
  .prev-button {
    left: -50px; /* mais afastado do carrossel */
  }

  .next-button {
    right: -50px;
  }

  .carousel-indicators {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    gap: 5px;
  }

  .indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: grey;
    opacity: 0.5;
    transition:
      opacity 0.3s,
      background-color 0.3s;
  }

  .indicator.active {
    background-color: white;
    opacity: 1;
  }

  /* RESPONSIVO */
  @media (max-width: 900px) {
    .carousel-item {
      flex: 0 0 calc(100% / 2 - 12px); /* 2 cards tablet */
    }

    .prev-button {
      left: -30px;
    }

    .next-button {
      right: -30px;
    }
  }

  @media (max-width: 700px) {
    .carousel-item {
      flex: 0 0 100%; /* 1 card mobile */
    }

    .prev-button {
      left: -50px; /* perto da borda da tela */
    }

    .next-button {
      right: -20px;
    }
  }
`;
