const database = require('../models');

class EstudantesController {
  static async getEstudantes(req, res) {
    try {
      const estudante = await database.Estudantes.findAll();
      return res.status(200).json(estudante);
    } catch (error) {
      return res.json({ error: `Erro ao consultar o banco de dados - ${error}` });
    }
  }

  static async getUmEstudantes(req, res) {
    try {
      const { id } = req.params;
      const estudante = await database.Estudantes.findOne({ where: { id } });
      return res.status(200).json(estudante);
    } catch (error) {
      return res.json({ error: `Erro ao consultar o banco de dados - ${error}` });
    }
  }
}

module.exports = EstudantesController;
