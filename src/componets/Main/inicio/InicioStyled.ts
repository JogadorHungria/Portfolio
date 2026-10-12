import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const InicioStyled = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(1120px, calc(100% - 48px));
  min-height: min(820px, 100svh);
  margin: 0 auto;
  padding: 150px 0 90px;
  gap: 48px;

  .intro-copy {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: min(630px, 62%);
    gap: 20px;
    animation: ${fadeIn} 0.8s ease both;
  }

  .eyebrow {
    color: #c4b5fd;
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h1 {
    margin: 0;
    font-family: "Inter", sans-serif;
    font-size: clamp(3rem, 7vw, 5.8rem);
    font-weight: 800;
    letter-spacing: -0.065em;
    line-height: 1.02;
    text-shadow: none;
  }

  .intro-role {
    margin: 0;
    max-width: 620px;
    color: #e9d5ff;
    font-size: clamp(1.3rem, 2.8vw, 2rem);
    font-weight: 650;
    line-height: 1.3;
  }

  .intro-summary {
    margin: 0;
    max-width: 550px;
    color: #c6c1d0;
    font-size: 1.05rem;
    line-height: 1.8;
  }

  .intro-actions,
  .intro-socials {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 14px;
  }

  .intro-actions { margin-top: 8px; }

  .intro-actions a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    min-height: 48px;
    padding: 0 20px;
    border: 1px solid #a78bfa;
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 700;
    transition: transform 180ms ease, background 180ms ease, border-color 180ms ease;
  }

  .primary-action { background: #7c3aed; color: white; }
  .primary-action:hover { background: #8b5cf6; transform: translateY(-2px); }
  .secondary-action { background: rgba(255,255,255,0.04); color: white; }
  .secondary-action:hover { background: rgba(255,255,255,0.1); transform: translateY(-2px); }

  .intro-socials { gap: 24px; margin-top: 6px; }
  .intro-socials a { color: #c6c1d0; font-size: 0.9rem; }
  .intro-socials a:hover { color: white; }

  .portrait-wrap {
    position: relative;
    display: grid;
    place-items: center;
    flex: 0 1 370px;
    aspect-ratio: 1;
    isolation: isolate;
  }

  .portrait-orbit {
    position: absolute;
    inset: 0;
    border: 1px solid rgba(196,181,253,0.35);
    border-radius: 50%;
    transform: rotate(-18deg) scale(0.9, 1.04);
    z-index: -1;
  }

  img {
    width: 76%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 50%;
    border: 5px solid rgba(255,255,255,0.08);
    box-shadow: 0 28px 80px rgba(0,0,0,0.4), 0 0 80px rgba(124,58,237,0.25);
  }

  .portrait-caption {
    position: absolute;
    right: -2px;
    bottom: 12%;
    padding: 10px 14px;
    border: 1px solid rgba(196,181,253,0.28);
    border-radius: 999px;
    background: #16121f;
    color: #e9d5ff;
    font-size: 0.82rem;
  }

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    justify-content: center;
    text-align: center;
    min-height: auto;
    padding: 140px 0 76px;
    gap: 36px;

    .intro-copy { align-items: center; width: min(100%, 600px); }
    .intro-summary { font-size: 1rem; }
    .portrait-wrap { flex-basis: auto; width: min(280px, 70vw); }
    .portrait-caption { right: -12px; }
  }

  @media (max-width: 480px) {
    width: calc(100% - 36px);
    h1 { font-size: clamp(2.7rem, 14vw, 3.6rem); }
    .intro-actions { width: 100%; flex-direction: column; }
    .intro-actions a { width: 100%; box-sizing: border-box; }
  }
`;
