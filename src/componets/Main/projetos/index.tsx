import { useEffect, useState } from "react";
import { projetos } from "../../../mock";
import { Card } from "./CardProjeto";
import { ProjetosStyled } from "./projetosStyled";
import { Title } from "../../Titles";

export const Projetos = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const adjustItemsPerPage = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 900) {
      setItemsPerPage(3);
    } else if (screenWidth >= 700) {
      setItemsPerPage(2);
    } else {
      setItemsPerPage(1);
    }
  };

  useEffect(() => {
    adjustItemsPerPage();
    window.addEventListener("resize", adjustItemsPerPage);
    return () => window.removeEventListener("resize", adjustItemsPerPage);
  }, []);

  const totalPages = Math.ceil(projetos.length / itemsPerPage);
  const currentPage = Math.floor(startIndex / itemsPerPage) + 1;

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
        return projetos.length % itemsPerPage === 0
          ? projetos.length - itemsPerPage
          : projetos.length - (projetos.length % itemsPerPage);
      }
      return prevIndexValue;
    });
  };

  const visibleProjects = projetos.slice(startIndex, startIndex + itemsPerPage);

  return (
    <ProjetosStyled id="projects">
      <div style={{ marginTop: "70px" }} className="effectScrollMonitoring">
        <Title text={"Projetos"} />

        <div style={{ marginTop: "50px" }} className="carousel">
          <button onClick={prevSlide} className="prev-button">
            {"<"}
          </button>

          <ul className="carousel-slides">
            {visibleProjects.map((projeto) => (
              <li key={projeto.id} className="carousel-item active">
                <Card projeto={projeto} />
              </li>
            ))}
          </ul>

          <button onClick={nextSlide} className="next-button">
            {">"}
          </button>
        </div>

        <div className="carousel-indicators">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span
              key={index}
              className={`indicator ${currentPage === index + 1 ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </ProjetosStyled>
  );
};
