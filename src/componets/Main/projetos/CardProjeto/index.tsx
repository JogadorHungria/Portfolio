import { IProjetos } from "../../../../interface";
import { CardStyles } from "./CardStyle";

export const Card = ({ projeto }: { projeto: IProjetos }) => (
  <CardStyles>
    <img className="project-image" src={projeto.img} alt={`Prévia do projeto ${projeto.name}`} loading="lazy" />
    <div className="project-body">
      <h3>{projeto.name}</h3>
      <p>{projeto.descricao}</p>
      {!!projeto.stack?.length && (
        <ul className="project-tags" aria-label={`Tecnologias usadas em ${projeto.name}`}>
          {projeto.stack.slice(0, 5).map((technology) => <li key={technology}><span>{technology}</span></li>)}
        </ul>
      )}
      <div className="project-links">
        {projeto.link && projeto.link !== "#" && (
          <a href={projeto.link} target="_blank" rel="noreferrer">{projeto.linkName || "Ver projeto"} <span aria-hidden="true">↗</span></a>
        )}
        {projeto.repositorio && (
          <a href={projeto.repositorio} target="_blank" rel="noreferrer">Código-fonte <span aria-hidden="true">↗</span></a>
        )}
      </div>
    </div>
  </CardStyles>
);
