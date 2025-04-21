import styled from "styled-components";

export const CardStyles = styled.li`
  padding: 10px;
  border-radius: 5px;
  background-color: rgba(117, 11, 189, 1);
  width: 220px;
  animation: fadeIn 0.5s ease-in forwards; /* Aparecer ao carregar */
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s;
  z-index: 2;
  opacity: 80%
  ;

  :hover{
    opacity: 100%
  
  }

  img {
    width: 100%;
    min-height: 50%;
    border-radius: 4px;
  }

  h2 {
    font-size: 22px;
    color: white;
    font-weight: 600;
    align-self: baseline;
  }

  > div {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    height: 100%;
    width: 100%;

    .container_buttons {
      display: flex;
      flex-direction: column;
      gap: 3px;
      width: 100%;

      a {
        width: 90%;
      }
    }
  

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px); /* Adiciona um leve movimento */
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
`;
