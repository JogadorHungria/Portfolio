import { useEffect, useState } from "react";
import { projetos } from "../../../mock";
import { Card } from "./CardProjeto";
import { ProjetosStyled } from "./projetosStyled";
import { Title } from "../../Titles";

export const Projetos = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Função para ajustar o número de itens por página com base na largura da tela
  const adjustItemsPerPage = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 900) {
      setItemsPerPage(3);
    } else if (screenWidth < 900 && screenWidth > 700) {
      setItemsPerPage(2);
    } else {
      setItemsPerPage(1);
    }
  };

  useEffect(() => {
    // Ajusta o número de itens ao carregar o componente
    adjustItemsPerPage();

    // Adiciona o evento de resize para monitorar mudanças no tamanho da tela
    window.addEventListener("resize", adjustItemsPerPage);

    // Limpa o evento ao desmontar o componente
    return () => {
      window.removeEventListener("resize", adjustItemsPerPage);
    };
  }, []);

  const nextSlide = () => {
    setStartIndex((prevIndex) => {
      const nextIndex = prevIndex + itemsPerPage;
      return nextIndex >= projetos.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => {
      const prevIndexValue = prevIndex - itemsPerPage;
      if (prevIndexValue < 0) {
        // Caso volte além do início, ajusta para o último grupo visível
        return projetos.length % itemsPerPage === 0
          ? projetos.length - itemsPerPage
          : projetos.length - (projetos.length % itemsPerPage);
      }
      return prevIndexValue;
    });
  };

  // Filtra os projetos para exibir somente os do índice atual
  const visibleProjects = projetos.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <ProjetosStyled id="projects">
      <div className="effectScrollMonitoring">
        <Title text={"Projetos"} />
        <button onClick={prevSlide} className="prev-button">{"<"}</button>
        <div className="carousel">
          <ul className="carousel-slides">
            {visibleProjects.map((projeto) => (
              <li key={projeto.id} className="carousel-item active">
                <Card projeto={projeto} />
              </li>
            ))}
          </ul>
        </div>
        <button onClick={nextSlide} className="next-button">{">"}</button>
      </div>
    </ProjetosStyled>
  );
};
