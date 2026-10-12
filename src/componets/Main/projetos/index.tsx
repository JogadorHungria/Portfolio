import { projetos } from "../../../mock";
import { Card } from "./CardProjeto";
import { ProjetosStyled } from "./projetosStyled";
import { Title } from "../../Titles";

export const Projetos = () => (
  <ProjetosStyled id="projects">
    <div className="projects-inner effectScrollMonitoring">
      <Title text="Projetos selecionados" />
      <p className="section-intro">
        Aplicações que construí para praticar interfaces, estado, autenticação e experiências de compra.
        Cada projeto inclui uma demonstração ou acesso ao código.
      </p>
      <ul className="projects-grid">
        {projetos.map((projeto) => <li key={projeto.id}><Card projeto={projeto} /></li>)}
      </ul>
    </div>
  </ProjetosStyled>
);
