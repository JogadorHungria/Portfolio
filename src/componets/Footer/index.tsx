import { StyledFooter } from "./StyledFooter";

export const Footer = () => {
  return (
    <StyledFooter>
      <a href="#start">Voltar ao início ↑</a>
      <span>© {new Date().getFullYear()} Joilson Hungria</span>
    </StyledFooter>
  );
};
