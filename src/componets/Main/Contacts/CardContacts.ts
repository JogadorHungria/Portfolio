import styled from "styled-components";

export const ContactsStyled = styled.section`
  width: min(1120px, calc(100% - 48px));
  margin: 0 auto;
  padding: 100px 0 20px;

  > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;
  }

  .containerIcons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;

    a {
      display: block;
      color: #e5e1ec;
      display: flex;
      gap: 10px;
      align-items: center;
      font-size: 0.95rem;
      font-weight: 600;
      padding: 5px;
      transition: 0.2s;
      padding: 10px;
      border: 1px solid rgba(196,181,253,0.18);
      border-radius: 9px;
      background: rgba(255,255,255,0.035);
      min-width: 155px;
    }

    a:hover {
      transform: scale(1.1);
      border-color: rgba(196,181,253,0.55);
      background-color: rgba(138, 43, 226, 0.14);
    }
  }

  .contact-intro { max-width: 550px; color: #b9b4c4; text-align: center; }

  @media (max-width: 710px) {
    width: calc(100% - 36px);
    .containerIcons { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .containerIcons a { min-width: 0; justify-content: center; }
  }

  @media (max-width: 380px) {
    .containerIcons { grid-template-columns: 1fr; }
  }
`;
