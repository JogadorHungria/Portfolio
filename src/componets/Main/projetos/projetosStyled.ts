import styled from "styled-components";

export const ProjetosStyled = styled.section`
  width: min(1120px, calc(100% - 48px));
  margin: 0 auto;
  padding: 100px 0 24px;

  .projects-inner { display: flex; flex-direction: column; align-items: center; }
  .section-intro {
    max-width: 650px;
    margin: 22px auto 38px;
    color: #b9b4c4;
    text-align: center;
    line-height: 1.7;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    align-items: stretch;
    gap: 20px;
    width: 100%;
  }

  @media (max-width: 900px) {
    .projects-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }

  @media (max-width: 620px) {
    width: calc(100% - 36px);
    padding-top: 76px;
    .projects-grid { grid-template-columns: 1fr; gap: 16px; }
    .section-intro { margin: 14px auto 26px; }
  }
`;
