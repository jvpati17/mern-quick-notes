const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensuredLoggedIn = require('../../config/ensuredLoggedIn');

router.get('/check-token', ensuredLoggedIn, usersCtrl.checkToken);
router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login);


module.exports = router;