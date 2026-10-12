import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  min-height: 150px;
  margin-top: 90px;
  border-top: 1px solid rgba(196,181,253,0.12);
  background: rgba(10,9,14,0.7);
  color: #9f9aaa;
  font-size: 0.88rem;

  a {
    color: #ded6f4;
    transition: color 160ms ease;
  }
  a:hover { color: white; }
`;
