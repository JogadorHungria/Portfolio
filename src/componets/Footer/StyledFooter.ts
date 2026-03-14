import styled from "styled-components";

export const StyledFooter = styled.footer`
  max-width: 100vw;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: linear-gradient(blueviolet, black);
  margin-top: 70px;
  color: gray;
  position: relative;

  a {
    align-self: center;
    color: white;
    position: relative;
    top: -10px;
    left: 0px;
    bottom: 20px;
    background-color: blueviolet;
    border: solid 1px white;
    border-radius: var(--radius-1);
    padding: 5px 25px;
    z-index: 9;
    opacity: 0.8;
    transition: 0.3s;
    border-radius: 10px;
  }
  a:hover {
    opacity: 1;
    box-shadow: 0 0 8px;
    scale: calc(1.1);
  }
`;
