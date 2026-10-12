import React from "react";

import {
  BsEnvelopeFill,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { Title } from "../../Titles";
import { ContactsStyled } from "./CardContacts";

export const Contacts = () => {
  const iconSize = 50;

  return (
    <ContactsStyled id="contacts">
      <div className="effectScrollMonitoring ">
        <Title text={"Contatos"} />
        <p className="contact-intro">Tem um projeto em mente ou uma oportunidade para conversar? Me encontre por aqui.</p>

        <div className="containerIcons">
          <a
            href="https://www.linkedin.com/in/joilson-hungria-934182220/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin aria-hidden="true" color="#72b7ec" fontSize={iconSize} />
            LinkedIn
          </a>

          <a href="https://github.com/JogadorHungria" target="_blank" rel="noreferrer">
            <BsGithub aria-hidden="true" fontSize={iconSize} /> GitHub
          </a>

          <a href="mailto:joilsonhungrianv@gmail.com">
            <BsEnvelopeFill aria-hidden="true" fontSize={iconSize} /> E-mail
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=71991301551"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoWhatsapp aria-hidden="true" color="#4ade80" fontSize={iconSize} /> WhatsApp
          </a>
        </div>
      </div>
    </ContactsStyled>
  );
};
