import styled from "styled-components";

export const SobreMinStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: min(850px, calc(100% - 48px));
  max-width: none;
  padding: 50px 0 0;
  gap: clamp(20px, 3vw, 30px);

  div.effectScrollMonitoring {
    display: flex;
    flex-direction: column;
    gap: 28px;
    width: 100%;
  }

  div.effectScrollMonitoring > div {
    display: flex;
    flex-direction: column;
    padding: 26px 30px;
    gap: 16px;
    background: rgba(18, 16, 24, 0.82);
    border-radius: 12px;
    border: 1px solid rgba(196,181,253,0.14);
  }

  p {
    font-size: 1rem;
    text-align: left;
    line-height: 1.8;
    color: #c6c1d0;
  }

  @media (max-width: 800px) {
    padding-top: 38px;

    div.effectScrollMonitoring > div {
      padding: 20px;
    }
  }

  @media (max-width: 400px) {
    div.effectScrollMonitoring > div {
      padding: 16px;
    }

    p {
      font-size: 0.95rem;
    }
  }
`;
