import { SobreMinStyle } from "./SobreMinStyle";
import { Title } from "../../Titles";
export const SobreMin = () => {
  return (
    <SobreMinStyle id="aboutMe">
      <div style={{ marginTop: "100px" }} className="effectScrollMonitoring">
        <Title text={"Sobre mim"} />
        <div>
          <p>
            {<span> # </span>}
            "Sou um desenvolvedor web apaixonado por transformar ideias em
            realidade através de soluções digitais inovadoras. Com habilidades
            sólidas em front-end e back-end, meu objetivo é criar experiências
            interativas e funcionais que impactem positivamente os usuários.
            Estou sempre atualizado com as últimas tecnologias e tendências do
            setor, buscando constantemente aprimorar minhas habilidades para
            oferecer resultados de alta qualidade. Sou um colaborador
            entusiasmado, pronto para enfrentar desafios e contribuir para
            projetos web de sucesso."
          </p>
        </div>
      </div>

      <p></p>
    </SobreMinStyle>
  );
};
