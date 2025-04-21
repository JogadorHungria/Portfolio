import styled from "styled-components";

export const CardStyles = styled.li`
  padding: 10px;
  border-radius: 5px;
  background-color: rgba(117, 11, 189, 1);
  min-width: 220px;
  max-width: 220px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s;
  z-index: 2;
  :hover {
    transform: scale(1.02);
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
  }
`;
