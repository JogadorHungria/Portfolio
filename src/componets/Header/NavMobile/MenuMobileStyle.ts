import styled from "styled-components";

export const MenuMobileStyle = styled.div`
  display: none;
  position: fixed;
  inset: 76px 0 0;
  z-index: 19;
  overflow-y: auto;
  background: rgba(7, 6, 10, 0.68);
  backdrop-filter: blur(3px);

  @media (max-width: 850px) {
    display: block;
    nav {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      gap: 0;
      padding: 12px 24px 18px;
      border-bottom: 1px solid rgba(196,181,253,0.2);
      background: #111018;
    }
    nav a {
      padding: 14px 6px;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      color: #eeeaf5;
      font-size: 1rem;
    }
    nav a:last-child { border-bottom: 0; }
    nav a:hover { color: #c4b5fd; }
  }
`;
