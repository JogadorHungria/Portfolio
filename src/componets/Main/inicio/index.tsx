import { InicioStyled } from "./InicioStyled";

export const Inicio = () => {
  const perfilImag = "/imagens/image_perfil.jpg";

  return (
    <InicioStyled id="start">
      <div className="intro-copy">
        <span className="eyebrow">Desenvolvedor web · Full-stack</span>
        <h1>Joilson Hungria</h1>
        <p className="intro-role">Crio experiências digitais do front-end ao back-end.</p>
        <p className="intro-summary">
          Interfaces responsivas, aplicações úteis e código pensado para crescer.
          Conheça meu trabalho e os projetos que venho construindo.
        </p>
        <div className="intro-actions">
          <a className="primary-action" href="#projects">Ver projetos <span aria-hidden="true">↗</span></a>
          <a className="secondary-action" href="mailto:joilsonhungrianv@gmail.com">Vamos conversar</a>
        </div>
        <div className="intro-socials" aria-label="Perfis profissionais">
          <a href="https://github.com/JogadorHungria" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          <a href="https://www.linkedin.com/in/joilson-hungria-934182220/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="portrait-wrap">
        <span className="portrait-orbit" aria-hidden="true" />
        <img src={perfilImag} alt="Joilson Hungria, desenvolvedor web" />
        <span className="portrait-caption">Desenvolvedor web</span>
      </div>
    </InicioStyled>
  );
};
