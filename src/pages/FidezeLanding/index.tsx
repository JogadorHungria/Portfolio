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
          Fí<span>De</span>Zé, O app que conecta você a motoristas que conhecem
          sua cidade
        </h1>

        <p>
          Estou criando um novo aplicativo de transporte feito especialmente
          para Simões Filho.
        </p>

        <p>Cadastre-se e seja um dos primeiros a testar o FíDeZé.</p>

        <p>— Garanta seu acesso antecipado —</p>

        <Benefits>
          <h3>Por que usar o FíDeZé?</h3>

          <ul>
            <li>🔒 Mais segurança em cada corrida</li>
            <li>📍 Quem dirige conhece sua cidade de verdade</li>
            <li>🛂 Motoristas analisados antes de entrar</li>
            <li>🚗 Veículos verificados</li>
            <li>💰 Corridas justas para passageiros e motoristas</li>
            <li>👤 Você sabe quem vai te buscar antes da corrida</li>
            <li>
              🤝 Aqui sua opinião importa — estamos sempre ouvindo para melhorar
              cada detalhe da experiência.
            </li>
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

          <button type="submit">Quero fazer parte</button>

          <small>
            Não enviaremos spam.
            <br /> Apenas avisaremos quando o aplicativo estiver disponível.
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
          fontSize: "12px",
        }}
      >
        <p>© {new Date().getFullYear()} FíDeZé</p>
        <p>
          O FíDeZé conecta passageiros a motoristas parceiros independentes.
        </p>
        <p>Um aplicativo pensado para Simões Filho.</p>
        <p>Contato: (71) 9 9130-1551</p>
        <p>Email: joilsonhungrianv@gmail.com</p>
      </footer>
    </Container>
  );
}
