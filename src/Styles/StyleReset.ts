import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`

html, body, div, span, applet, object,
h1, h2, h3, h4, h5, h6, p, a, del, img, 
b, u, i, ol, ul, li, form, label,article, 
aside, figure, footer, header, 
nav, section{

    margin: 0;
    padding: 0;
    font-size: 100%;
    vertical-align: baseline;
    text-decoration: none;
    line-height: 1.5;
    
}



ol, ul {
    list-style: none;
}

blockquote, q {
    quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}

button , a , select{
    cursor: pointer;
}

input::placeholder{
    color: rgb(185, 185, 187);
}

dialog{
  border: solid 1px rgb(221, 219, 219);

}

dialog::backdrop{
  background-color: rgba(0, 0, 255, 0.11);
  
}

html {
    scroll-behavior: smooth;
}

`;
