import React, { useState } from "react";
import { Header } from "../../componets/Header";
import { Main } from "../../componets/Main";
import { Footer } from "../../componets/Footer";
import { NavMobile } from "../../componets/Header/NavMobile/HeaderMobile";

export function Portfolio() {
  const [menuMobile, setMenuMobile] = useState(false);

  const closeMenuMobile = () => {
    setMenuMobile(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: 'url("/imagens/fundo-descktop.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header setMenuMobile={setMenuMobile} menuMobile={menuMobile} />

      {menuMobile && <NavMobile openCloseMenu={closeMenuMobile} />}

      <Main />

      <Footer />
    </div>
  );
}
