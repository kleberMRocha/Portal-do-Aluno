const { Router } = require('express');
const logincontroller = require('../../Controller/loginController');

const router = Router();

router
  .post('/login/', logincontroller.getToken);

module.exports = router;
