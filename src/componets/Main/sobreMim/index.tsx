import { SobreMinStyle } from "./SobreMinStyle";
import { Title } from "../../Titles";
export const SobreMin = () => {
  return (
    <SobreMinStyle id="aboutMe">
      <div className="effectScrollMonitoring">
        <Title text={"Sobre mim"} />
        <div>
          <p>
            Sou Joilson Hungria, desenvolvedor web com experiência prática na
            construção de interfaces e aplicações usando React, JavaScript e
            TypeScript. Gosto de transformar requisitos em produtos claros,
            responsivos e fáceis de usar.
          </p>
          <p>
            Meus projetos incluem experiências de compra, controle de gastos,
            autenticação e uma rede social sobre astronomia criada em equipe.
            Também venho ampliando minha base em Node.js, Express, Python,
            Django e PostgreSQL.
          </p>
          <p>
            Valorizo código organizado, colaboração e aprendizado contínuo. No
            portfólio, compartilho tanto o resultado quanto as tecnologias por
            trás de cada projeto.
          </p>
        </div>
      </div>
    </SobreMinStyle>
  );
};
