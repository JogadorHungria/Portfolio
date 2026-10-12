import { IProjetos } from "../interface";

export const projetos: IProjetos[] = [
  {
    id: 4,
    img: "/imagens/projetos/fideze-pre-cadastro.png",
    name: "Fídizé",
    descricao:
      "Plataforma de mobilidade urbana para Simões Filho, com apps Expo para passageiros e motoristas e backend NestJS com PostgreSQL e Prisma. O fluxo cobre cadastro, login, solicitação, aceite e etapas da corrida, com localização e eventos em tempo real. Os três projetos passam na checagem de TypeScript. O MVP ainda precisa de validação ponta a ponta em dois celulares, reforços de segurança e preparação para produção.",
    stack: ["React Native", "Expo", "NestJS", "Prisma", "PostgreSQL", "Socket.IO", "Zustand"],
    linkName: "Ver pré-cadastro",
    link: "/fidize",
    repositorio: "",
  },
  {
    id: 1,
    img: "/imagens/projetos/HungriaBurguer-2.0.jpg",
    name: "Hungria Burger 2.0",
    descricao:
      "E-commerce de hamburgueria desenvolvido a partir de um protótipo no Figma. A aplicação permite criar uma conta, navegar pelo cardápio e adicionar ou remover produtos do carrinho. A segunda versão reorganiza a implementação em TypeScript.",
    stack: ["TypeScript", "React", "React Toastify", "React Router", "Styled Components", "Context API", "Yup"],
    linkName: "Abrir demonstração",
    link: "https://entrega-hanburgueria-2-0-jh.vercel.app/",
    repositorio:
      "https://github.com/Kenzie-Academy-Brasil-Developers/entrega-hamburgueria-2.0-jh",
  },
  {
    id: 2,
    img: "/imagens/projetos/kenzieHub.jpg",
    name: "Kenzie Hub",
    descricao:
      "Aplicação de autenticação com cadastro e login, construída com React e TypeScript. Depois de entrar, a pessoa usuária acessa uma área própria para gerenciar suas informações e tecnologias.",
    stack: ["React", "TypeScript", "React Router", "Styled Components", "Yup"],
    linkName: "Abrir demonstração",
    link: "https://entrega-s3-theta.vercel.app",
    repositorio:
      "https://github.com/Kenzie-Academy-Brasil-Developers/entrega-kenzie-hub-jh/tree/main/entrega-s3",
  },
  {
    id: 3,
    img: "/imagens/projetos/controle-de-gastos.jpg",
    name: "Nu Kenzie",
    descricao:
      "Aplicação de controle de gastos que permite registrar entradas e despesas para acompanhar o saldo. Um exercício de interface e gerenciamento de estado feito com React.",
    stack: ["React", "JavaScript", "HTML", "CSS", "React Toastify", "Styled Components"],
    linkName: "Abrir demonstração",
    link: "https://entrega-nu-kenzie-tau.vercel.app/",
    repositorio:
      "https://github.com/Kenzie-Academy-Brasil-Developers/gestao-de-gastos/tree/master/entrega-nu-kenzie",
  },
  {
    id: 5,
    img: "/imagens/projetos/gestaoDeEmpresas.png",
    name: "Gestão de Empresas",
    descricao:
      "Painel para administrar empresas, setores e funcionários. O exercício explora operações de cadastro, atualização e organização de dados com JavaScript.",
    stack: ["JavaScript", "HTML", "CSS"],
    linkName: "Ver no GitHub",
    link: "https://github.com/JogadorHungria/m2-final",
    repositorio: "",
  },
  {
    id: 7,
    img: "/imagens/projetos/hungria-magazine.jpg",
    name: "Hungria Magazine",
    descricao:
      "Primeiro projeto de e-commerce, feito com JavaScript, HTML e CSS sem frameworks. A interface permite explorar produtos e atualizar o carrinho de compras.",
    stack: ["JavaScript", "CSS", "HTML"],
    linkName: "Abrir demonstração",
    link: "https://kenzie-academy-brasil-developers.github.io/m1-capstone-ecommerce-templa_jogador_hungriate/",
    repositorio:
      "https://github.com/Kenzie-Academy-Brasil-Developers/m1-capstone-ecommerce-templa_jogador_hungriate",
  },
];
