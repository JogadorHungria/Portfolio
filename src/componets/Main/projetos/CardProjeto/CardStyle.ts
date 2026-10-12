import styled from "styled-components";

export const CardStyles = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  border: 1px solid rgba(196, 181, 253, 0.16);
  border-radius: 14px;
  background: linear-gradient(155deg, rgba(29, 23, 41, 0.98), rgba(15, 13, 20, 0.98));
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18);
  transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(196, 181, 253, 0.48);
    box-shadow: 0 24px 54px rgba(0, 0, 0, 0.3);
  }

  .project-image {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    background: #17121f;
  }

  .project-body {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    padding: 22px;
  }

  h3 { color: #fff; font-size: 1.2rem; line-height: 1.3; }
  p { color: #c6c1d0; font-size: 0.94rem; line-height: 1.7; }

  .project-tags { display: flex; flex-wrap: wrap; gap: 7px; }
  .project-tags span {
    padding: 4px 9px;
    border: 1px solid rgba(196, 181, 253, 0.18);
    border-radius: 999px;
    color: #d8ccff;
    font-size: 0.74rem;
  }

  .project-links { display: flex; flex-wrap: wrap; gap: 10px; margin-top: auto; padding-top: 4px; }
  .project-links a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 11px;
    border-radius: 7px;
    background: rgba(167, 139, 250, 0.11);
    color: white;
    font-size: 0.85rem;
    font-weight: 650;
  }
  .project-links a:hover { background: rgba(167, 139, 250, 0.25); }
`;
