const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const database = require('../models');

const authErrorResponse = { error: 'houve um erro na autenticação!' };

class LoginController {
  static async getToken(req, res) {
    // expected
    // {
    //   "id":"2",
    //   "senha":"123",
    //   "role":"estudante"
    // }

    try {
      const userPassword = req.body.senha;
      const { role } = req.body;
      const { id } = req.body;

      const roleQuery = role === 'estudante'
        ? { userId: parseInt(id, 10) }
        : { docentUserId: parseInt(id, 10) };

      const user = await database.Users
        .findOne({ where: roleQuery });

      const { senha } = user;

      bcrypt.compare(userPassword, senha, (err, result) => {
        if (err) return res.status(401).json(authErrorResponse);
        if (!result) return res.status(401).json(authErrorResponse);

        const token = jwt.sign({ user }, userPassword, { expiresIn: '1h' });
        return res.status(201).json({ id: roleQuery, secretToken: token });
      });
    } catch (error) {
      return res.status(401).json(authErrorResponse);
    }
    return null;
  }

  static async authentication(req, res, next) {
    const { secretToken, senha } = req.body;

    if (!secretToken) {
      return res.status(401).json(authErrorResponse);
    }

    try {
      jwt.verify(secretToken, senha, (err, decoded) => {
        if (err) {
          return res.status(401).json(authErrorResponse);
        }
        next();
      });
    } catch (error) {
      return res.status(401).json(authErrorResponse);
    }
    return null;
  }
}

module.exports = LoginController;
