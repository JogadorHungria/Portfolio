import React from "react";
import { BackDrop } from "../../componets/BackDrop";

import { Container, InfoBox, FormBox, Form, Benefits } from "./style";
import { Footer } from "../../componets/Footer";
import { color } from "framer-motion";

export function FidezeLanding() {
  return (
    <Container>
      <BackDrop />

      <InfoBox>
        <h1>
          O Fí<span>De</span>Zé está chegando 🚗
        </h1>

        <p>
          Estamos criando um novo aplicativo de transporte feito especialmente
          para Simões Filho.
        </p>

        <p>
          Cadastre-se para receber um convite e seja um dos primeiros a testar
          quando lançarmos.
        </p>

        <p>— Garanta seu acesso antecipado —</p>

        <Benefits>
          <h3>Por que usar o FíDeZé?</h3>

          <ul>
            <li>✔ Atendimento mais humano</li>
            <li>✔ Motoristas que realmente conhecem a cidade</li>
            <li>✔ Motoristas analisados antes de entrar no app</li>
            <li>✔ Veículos verificados para mais segurança</li>
            <li>✔ Sem saldo pendente após corrida</li>
            <li>✔ Identificação clara do motorista antes da viagem</li>
          </ul>
        </Benefits>
      </InfoBox>

      <FormBox>
        <div>
          <h2>Cadastre-se para ser avisado quando o FíDeZé for lançado</h2>
        </div>

        <Form>
          <span>Nome</span>
          <input placeholder="Seu nome completo" />

          <span>Email</span>
          <input placeholder="seuemail@email.com" />

          <span>Telefone</span>
          <input type="tel" placeholder="(71) 9 9999-9999" />
          <button>Quero acesso antecipado</button>

          <small>
            Não enviaremos spam. Apenas avisaremos quando o aplicativo estiver
            disponível.
          </small>
        </Form>
      </FormBox>

      <footer
        style={{
          color: "#aca8a8",
          zIndex: 1,
          borderTop: "1px solid #b9b5b5",
          width: "100%",

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "40px",
        }}
      >
        <p>© {new Date().getFullYear()} FíDeZé</p>

        <p>Um aplicativo de transporte pensado para Simões Filho.</p>

        <p>Contato: (71) 9 9130-1551</p>

        <p>Email: joilsonhungrianv@gmail.com</p>
      </footer>
    </Container>
  );
}
