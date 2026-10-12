import { createGlobalStyle } from "styled-components";

export const StyleGlobal = createGlobalStyle`
  :root {
    color-scheme: dark;
    --color-1: #7c3aed;
    --color-2: #c4b5fd;
    --color-3: #4BA036;
    --color-grey-1: #000000;
    --color-grey-2: #343A40;
    --color-grey-3: #495057;
    --color-grey-4: #dddddd;
    --color-grey-5: #FFFFFF;
    --font-title-1: 40px;
    --font-title-2: 30px;
    --font-title-3: 25px;
    --font-title-4: 20px;
    --font-text-1: 18px;
    --font-text-2: 16px;
    --font-text-3: 14px;
    --font-weight-1: 700;
    --font-weight-2: 600;
    --font-weight-3: 500;
    --font-weight-4: 400;
    --radius-1: 4px;
    --radius-2: 8px;
    --size-1: 48px;
    --size-2: 32px;
    --gap-1: 60px;
    --gap-2: 45px;
    --gap-3: 30px;
    --gap-4: 20px;
    --gap-5: 10px;
    --container--1: 1200px;
    --container--2: 800px;
  }

  html { scroll-behavior: smooth; scroll-padding-top: 88px; }

  body {
    box-sizing: border-box;
    min-width: 320px;
    min-height: 100vh;
    max-width: 100vw;
    overflow-x: hidden;
    background: #0a090e;
    color: #f7f5fa;
    font-family: "Inter", system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  *, *::before, *::after { box-sizing: inherit; }
  a { color: inherit; text-decoration: none; }

  a:focus-visible, button:focus-visible {
    outline: 3px solid #c4b5fd;
    outline-offset: 4px;
  }

  .effectScrollMonitoring { opacity: 0; position: relative; }
  .effectScroll { opacity: 1; animation: effectScroll 700ms ease both; }

  ::-webkit-scrollbar { height: 10px; width: 10px; background-color: #100d17; }
  ::-webkit-scrollbar-thumb { background-color: #7c3aed; border-radius: 10px; }

  @media (max-width: 600px) {
    :root {
      --font-title-1: 30px;
      --font-title-2: 25px;
      --font-title-3: 20px;
      --font-title-4: 16px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      scroll-behavior: auto !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
