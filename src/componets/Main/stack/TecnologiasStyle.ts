import styled from "styled-components";

export const TecnologiasStyle = styled.section`
  width: min(960px, calc(100% - 48px));
  margin: 0 auto;
  padding-top: 88px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 100%;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(118px, 1fr));
    gap: 12px;
    width: 100%;
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    min-height: 112px;
    padding: 12px 8px;
    border: 1px solid rgba(196,181,253,0.16);
    border-radius: 10px;
    background: rgba(18,16,24,0.78);
    color: #e8e4ef;
    text-align: center;
    transition: transform 180ms ease, border-color 180ms ease;
  }
  li:hover { transform: translateY(-3px); border-color: rgba(196,181,253,0.45); }
  li svg { width: 34px; height: 34px; color: #c4b5fd; }
  li h3 { font-size: 0.83rem; font-weight: 550; }

  @media (max-width: 480px) {
    width: calc(100% - 36px);
    ul { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; }
    li { min-height: 100px; }
    li h3 { font-size: 0.72rem; }
  }
`;
