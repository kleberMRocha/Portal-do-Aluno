const database = require('../models');

class MatriculaController {
  static async getMatricula(req, res) {
    try {
      const { id } = req.params;
      const matricula = await database.Matriculas.findOne({ where: { estudanteId: id } });
      const diciplinas = await database.Diciplinas
        .findAll({ where: { turmaId: matricula.turmaId } });
      const turma = await database.Turmas
        .findOne({ where: { id: matricula.turmaId } });
      const perLetivo = await database.Periodosletivos
        .findOne({ where: { id: turma.perletivoId } });

      return res.status(200)
        .json([
          { matricula: matricula.id, status: matricula.status },
          diciplinas,
          { Nome_Turma: turma.nome },
          { periodosletivo: perLetivo.nome },
        ]);
    } catch (error) {
      return res.json({ error: `Erro ao consultar o banco de dados - ${error}` });
    }
  }

  static async getAllMatriculas(req, res) {
    try {
      const { id } = req.params;
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
