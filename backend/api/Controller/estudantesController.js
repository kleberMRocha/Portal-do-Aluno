const database = require('../models');

class EstudantesController {
  static async getEstudantes(req, res) {
    try {
      const alunos = await database.Estudantes.findAll();
      return res.status(200).json(alunos);
    } catch (error) {
      return res.json({ error: `Erro ao consultar o banco de dados - ${error}` });
    }
  }

  static async getUmEstudantes(req, res) {
    try {
      const { id } = req.params;
      const aluno = await database.Estudantes.findOne({ where: { id } });
      return res.status(200).json(aluno);
    } catch (error) {
      return res.json({ error: `Erro ao consultar o banco de dados - ${error}` });
    }
  }
}

module.exports = EstudantesController;
