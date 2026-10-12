import React from "react";
import { HeaderStyle } from "./HeaderStyle";
import { HiMenu } from "react-icons/hi";
import { NavDesktop } from "./NavDesktop";

export const Header = ({ setMenuMobile, menuMobile }) => {
  const functionOpemMenu = () => {
    setMenuMobile(!menuMobile);
  };

  return (
    <HeaderStyle>
      <div className="header-inner">
        <a className="brand" href="#start" aria-label="Joilson Hungria, início">JH<span>.</span></a>
        <NavDesktop />
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuMobile ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuMobile}
          aria-controls="mobile-menu"
          onClick={functionOpemMenu}
        >
          <HiMenu fontSize={30} aria-hidden="true" />
        </button>
      </div>
    </HeaderStyle>
  );
};
