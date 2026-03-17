import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { BackDrop } from "../../componets/BackDrop";
import { Container, InfoBox, FormBox, Form, Benefits } from "./style";
import { Footer } from "../../componets/Footer";

export function FidezeLanding() {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ywsb56t",
        "template_r3ehbap",
        formRef.current,
        "OMr098E2D4a25g9xg",
      )
      .then(() => {
        setSuccess(true);
        formRef.current;
      })
      .catch(() => {
        alert("Erro ao enviar cadastro.");
      });
  };

  if (success) {
    return (
      <Container>
        <BackDrop />

        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            zIndex: 2,
          }}
        >
          <h1 style={{ fontSize: "29px" }}>🎉 Parabéns!</h1>

          <p style={{ fontSize: "20px", marginTop: "10px" }}>
            Você finalizou seu pré-cadastro no FíDeZé.
          </p>

          <p style={{ marginTop: "20px", color: "#dbd8d8" }}>
            Estamos preparando os primeiros testes em Simões Filho.
          </p>

          <p style={{ marginTop: "10px", color: "#cfcece" }}>
            Se você for selecionado para a fase inicial, entraremos em contato.
            🚗
          </p>
        </div>
      </Container>
    );
  }

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

        <Form ref={formRef} onSubmit={sendEmail}>
          <span>Nome *</span>
          <input name="name" placeholder="Seu nome completo" required />

          <span>Email *</span>
          <input
            name="email"
            type="email"
            placeholder="seuemail@email.com"
            required
          />

          <span>WhatsApp (opcional)</span>
          <input name="phone" type="tel" placeholder="(71) 9 9999-9999" />

          <button type="submit">Quero acesso antecipado</button>

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
