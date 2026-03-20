import React, { useState } from "react";
import { MainStyleds } from "./MainStyled";
import { Inicio } from "./inicio";
import { Tecnologias } from "./stack";
import { SobreMin } from "./sobreMim";
import { Projetos } from "./projetos";
import { Modal } from "./modal";
import { useContext } from "react";
import { GlobalContext } from "../../contexts";
import { Contacts } from "./Contacts";
import { Certificates } from "./certificates";
import { Header } from "../Header";
import { NavMobile } from "../Header/NavMobile/HeaderMobile";
export const Main = () => {
  const { opemModal } = useContext(GlobalContext);

  const [menuMobile, setMenuMobile] = useState(false);

  const closeMenuMobile = () => {
    setMenuMobile(false);
  };

  return (
    <MainStyleds>
      {opemModal && <Modal />}
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
