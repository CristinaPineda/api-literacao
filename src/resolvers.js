const questions = [
  {
    id: 1,
    tipo: "autor(a)",
    resposta: "Cora Coralina",
    regiao: "Centro-Oeste",
    imagem: "https://api-projects-cris-pineda.s3.amazonaws.com/literacao-images/centro-oeste.png",
    dicas: [
      "Sou uma poetisa e contista",
      "Meu primeiro livro foi publicado em 1965, quando já tinha 76 anos",
      "Meu verdadeiro nome é Anna Lins dos Guimarães Peixoto",
      "Nasci em Vilas Boas - Goiás",
      "Minha primeira obra foi 'Poema dos becos de Goiás e estórias mais'",
      "Minhas obras são baseadas no cotidiano do interior brasileiro",
      "Recebi o título de 'Doutor Honoris Causa da UFG-Universidade Federal de Goiás em 1983",
      "Recebi a condecoração de Ordem do Mérito Cultural",
      "Uma de minhas obras foi saudada por Carlos Drummond de Andrade",
      "Cursei até a 3ª série do ensino primário"
    ]
  },
  {
    id: 2,
    tipo: "autor(a)",
    resposta: "Milton Hatoum",
    regiao: "Norte",
    imagem: "https://api-projects-cris-pineda.s3.amazonaws.com/literacao-images/norte.png",
    dicas: [
      "Sou escritor, tradutor e professor",
      "Sou um dos grandes escritores ainda vivos do Brasil",
      "Nasci em Manaus - AM",
      "Uma das minhas maiores obras é o livro 'Relato de um certo Oriente',publicado em 1989",
      "Minhas obras pertencem à Literatura Contemporânea",
      "Minhas narrativas possuem caráter memorialístico, elementos regionais e hibridismo cultural",
      "Também Sou formado em arquitetura",
      "Sou colunista do jornal O Estado de São Paulo",
      "Em meus livros predominam os personagens melancólicos",
      "Estudei literatura na França"
    ]
  }
];

module.exports = {
  Query: {
    questions: () => questions,
    question: () => questions[1],
  },
  Mutation: {
    createQuestion: () => {},
    deleteQuestion: () => {},
    editQuestion: () => {},
  },
};