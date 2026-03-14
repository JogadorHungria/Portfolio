import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  padding: 40px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  background-image: url("/imagens/fideze/fideze-bg.png");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
`;

export const InfoBox = styled.div`
  max-width: 80vw;
  align-items: center;
  border-radius: 12px;
  color: #fff;
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 15px;

  z-index: 2;

  h1 {
    font-size: 26px;
    font-weight: 600;

    span {
      color: #e2df0a;
    }
  }

  p {
    max-width: 80vw;
    font-weight: 300;
    line-height: 1.5;
  }
`;

export const FormBox = styled.div`
  background: rgba(0, 0, 0, 0.65);
  border-radius: 20px;
  color: #c0bebe;

  border: 1px solid #ecdd0863;

  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 30px;

  width: 420px;
  max-width: 90%;
  min-width: 260px;

  z-index: 2;

  backdrop-filter: blur(4px);

  h2 {
    color: #ffffff;
    margin-bottom: 10px;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;

  span {
    font-size: 14px;
    font-weight: 400;
  }

  input,
  button {
    padding: 12px;
    border-radius: 6px;
    border: none;
    width: 100%;
    box-sizing: border-box;
    font-size: 14px;
  }

  input {
    background: #ffffff;
    color: #333;
  }

  button {
    margin-top: 10px;
    cursor: pointer;
    background-color: #d6e413;
    color: #000;
    font-weight: 600;
    border: 2px solid #ffffff;
    transition: 0.2s ease;
  }

  button:hover {
    opacity: 1;
    transform: translateY(-1px);
  }
`;
export const Benefits = styled.div`
  width: 420px;
  max-width: 80vw;
  min-width: 260px;
  padding: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid #ecdd0863;
  border-radius: 20px;

  h3 {
    color: #ffffff;
    margin-bottom: 20px;
    text-align: center;
    font-size: 19px;
    font-weight: 700;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    display: flex;
    flex-direction: column;
    gap: 10px;

    font-size: 16px;
  }

  li {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
