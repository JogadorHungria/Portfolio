import styled from "styled-components";

export const SobreMinStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 900px;
  padding: clamp(40px, 10vh, 120px) 20px;
  gap: clamp(20px, 3vw, 30px);

  div.effectScrollMonitoring {
    display: flex;
    flex-direction: column;
    gap: clamp(20px, 3vw, 30px);
    width: 100%;
  }

  div.effectScrollMonitoring > div {
    display: flex;
    flex-direction: column;
    padding: clamp(20px, 2vw, 30px);
    gap: clamp(15px, 2vw, 20px);
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 8px;
    border: 1px solid var(--color-1);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
  }

  span {
    color: blueviolet;
  }

  p {
    font-size: clamp(16px, 1.2vw, 20px);
    text-align: justify;
    line-height: 1.7;
    color: var(--color-grey-4);
    text-indent: 12px;
  }

  @media (max-width: 800px) {
    padding-top: 60px;

    div.effectScrollMonitoring > div {
      padding: 20px;
    }
  }

  @media (max-width: 400px) {
    div.effectScrollMonitoring > div {
      padding: 15px;
    }

    p {
      font-size: 14px;
    }
  }
`;
