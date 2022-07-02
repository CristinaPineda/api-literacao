const mongoose = require('../database/connection.js');

const schemaProject = new mongoose.Schema({
  tipo: {
    type: String,
    required: true,
  },
  resposta: {
    type: String,
    required: true,
  },
  regiao: {
    type: String,
    required: true,
  },
  imagem: {
    type: String,
    required: true,
  },
  dicas: [ String ],
  required: true,
});

const projectsCards = mongoose.model('ProjectCard', schemaProject);

module.exports = projectsCards;