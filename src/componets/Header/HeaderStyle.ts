import styled from "styled-components";

export const HeaderStyle = styled.header`
  position: fixed;
  inset: 0 0 auto;
  z-index: 20;
  height: 76px;
  border-bottom: 1px solid rgba(196,181,253,0.12);
  background: rgba(10, 9, 14, 0.84);
  backdrop-filter: blur(18px);

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: min(1120px, calc(100% - 48px));
    height: 100%;
    margin: 0 auto;
  }

  .brand {
    color: white;
    font-size: 1.35rem;
    font-weight: 850;
    letter-spacing: -0.06em;
  }
  .brand span { color: #a78bfa; }

  nav {
    display: flex;
    align-items: center;
    gap: clamp(14px, 2.4vw, 30px);
  }
  nav a {
    color: #ccc7d5;
    font-size: 0.88rem;
    transition: color 160ms ease;
  }
  nav a:hover { color: white; }

  .menu-toggle {
    display: none;
    padding: 8px;
    border: 1px solid rgba(196,181,253,0.22);
    border-radius: 8px;
    background: transparent;
    color: white;
    line-height: 0;
  }

  @media (max-width: 850px) {
    .menu-toggle { display: inline-flex; }
    nav { display: none; }
  }
  @media (max-width: 480px) {
    .header-inner { width: calc(100% - 36px); }
  }
`;
