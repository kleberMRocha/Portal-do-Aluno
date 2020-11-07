const database = require('../models');

class MatriculaController {
  // by Matricula Id
  static async getMatricula(req, res) {
    try {
      const { id } = req.params;
      const matricula = await database.Matriculas
        .findOne({
          where: { id },
          include: {
            model: database.Turmas,
            required: true,
            include: {
              model: database.Diciplinas,
              required: true,
            },
          },
        });

      return res.status(200).json(matricula);
    } catch (error) {
      return res.json({ error: `Erro ao consultar o banco de dados - ${error}` });
    }
  }

  // by Estudante Id
  static async getAllMatriculas(req, res) {
    try {
      const id = parseInt(req.user, 10);
      const matriculas = await database.Matriculas
        .findAll({
          where: { estudanteId: id },
          include:
          {
            model: database.Turmas,
            required: true,
            include: {
              model: database.Periodosletivos,
              required: true,
            },
          },
        });

      return res.status(200).json(matriculas);
    } catch (error) {
      return res.json({ error: `Erro ao consultar o banco de dados - ${error}` });
    }
  }
}

module.exports = MatriculaController;
