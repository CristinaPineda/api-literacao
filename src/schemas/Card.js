import mongoose from '../database/connection.js';

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
  dicas: [ String ]
});

const projectsCards = mongoose.model('ProjectCard', schemaProject);

export default projectsCards;