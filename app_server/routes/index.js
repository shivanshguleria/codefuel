var express = require('express');
var router = express.Router();
const ctrl = require('../controllers/main')
const ctrlCourse = require("../controllers/courseview");
const { route } = require('../../app');
/* GET home page. */
router.get('/', ctrl.index);

router.get('/login', ctrl.login);

router.get('/signup', ctrl.signup);

router.get('/users', ctrl.users);

router.get('/course', ctrl.course);

router.get('/review', ctrl.review);

router.get('/about', ctrl.about);

router.get('/future', ctrl.future);

router.get('/contactus', ctrl.contactus);

router.get('/courseview/:course', ctrlCourse.view)

module.exports = router;
