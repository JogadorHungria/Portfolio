import styled from "styled-components";

export const StyledCertificate = styled.div`
  width: min(1120px, calc(100% - 48px));
  margin: 0 auto;
  padding: 80px 0 0;

  > div {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: center;
    gap: 20px;
    margin-top: 34px;
  }

  img {
    width: 100%;
    max-height: 360px;
    aspect-ratio: 3 / 2;
    object-fit: contain;
    border: 1px solid rgba(196,181,253,0.13);
    border-radius: 12px;
    background: #131118;
    transition: transform 180ms ease, border-color 180ms ease;
  }
  img:hover { transform: translateY(-3px); border-color: rgba(196,181,253,0.4); }

  @media (max-width: 720px) {
    width: calc(100% - 36px);
    > div { grid-template-columns: 1fr; gap: 14px; }
  }
`;
