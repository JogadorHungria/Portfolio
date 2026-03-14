import { createGlobalStyle } from "styled-components";

export const StyleGlobal = createGlobalStyle`

.effectScrollMonitoring{
  opacity: 0;
  position: relative;
}

.effectScroll {
  opacity: 1; 
  animation: effectScroll 1s;
}


::-webkit-scrollbar {
      height: 10px;
      width: 10px;
      background-color: var(--color-1);
}

::-webkit-scrollbar-thumb {
      background-color: blueviolet;
      size: 1px;
      border-radius: 10px;
      margin: 2px;
}

body{
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  max-width: 100vw;
  min-height: 100vh;
  /* background-image: url("/imagens/fundo-descktop.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed; */
  background-color: "#020202";
  color:  white;
}

@media (max-width: 600px) {

  body{
    background-image: url("/imagens/fundo-mobile.jpg");
  }
 
}



:root {

  --color-1: #3f0071;
  --color-2: #CE4646;
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
  --radius-2: 12px;
  
  --size-1: 48px;
  --size-2: 32px;

  --gap-1: 60px;
  --gap-2: 45px;
  --gap-3: 30px;
  --gap-4: 20px;
  --gap-5: 10px;

  --container--1: 1200px ;
  --container--2: 800px ;
}

@media (max-width: 600px) {

  :root {
  --font-title-1: 30px;
  --font-title-2: 25px;
  --font-title-3: 20px;
  --font-title-4: 16px;
  }

}


`;
