import React, { useEffect, useState } from "react";
import { MainStyleds } from "./MainStyled";
import { Inicio } from "./inicio";
import { Tecnologias } from "./stack";
import { SobreMin } from "./sobreMim";
import { Projetos } from "./projetos";
import { Contacts } from "./Contacts";
import { Certificates } from "./certificates";
import { Header } from "../Header";
import { NavMobile } from "../Header/NavMobile/HeaderMobile";
export const Main = () => {
  const [menuMobile, setMenuMobile] = useState(false);

  const closeMenuMobile = () => {
    setMenuMobile(false);
  };

  useEffect(() => {
    if (!menuMobile) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenuMobile();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuMobile]);

  return (
    <MainStyleds>
      <Header setMenuMobile={setMenuMobile} menuMobile={menuMobile} />

      {menuMobile && <NavMobile openCloseMenu={closeMenuMobile} />}

      <Inicio />
      <SobreMin />
      <Certificates />
      <Tecnologias sizeIcon={70} />
      <Projetos />
      <Contacts />
    </MainStyleds>
  );
};
