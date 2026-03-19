import { InicioStyled } from "./InicioStyled";

export const Inicio = () => {
  const perfilImag = "/imagens/image_perfil.jpg";

  return (
    <InicioStyled id="start">
      <div>
        <span>Olá, eu sou</span>
        <h1>Joilson Hungria</h1>
        <span>Desenvolvedor Full-Stack</span>
      </div>
      <img src={perfilImag} alt="img de perfil" />
    </InicioStyled>
  );
};
