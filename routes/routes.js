var express = require('express');
var router = express.Router();

var homeController = require('../controllers/home');
var userController = require('../controllers/user');
var testController = require('../controllers/test');

router.get('/', homeController.getIndex);
router.post('/echo', testController.postEcho);
router.get('/login', userController.getLogin);
router.post('/login', userController.postLogin);
router.get('/signup', userController.getSignup);
router.post('/signup', userController.postSignup);

module.exports = router;