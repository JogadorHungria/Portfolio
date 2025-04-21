import styled from "styled-components";

export const ProjetosStyled = styled.section`

padding-top: 50px;

.carousel {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 900px;
  max-width: 90vw;
}


.carousel-slides {

  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: space-around;
 
  
}

.carousel-item {
  padding: 6px;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.carousel-item.active {
  opacity: 1;
}

.prev-button,
.next-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10;
}

.prev-button {
  left: 0.5rem;
  color: white;
}

.next-button {
  right: 0.5rem;
  color: white;
}


`;
