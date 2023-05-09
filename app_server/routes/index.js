var express = require('express');
var router = express.Router();
const ctrl = require('../controllers/main')
const ctrlCourse = require("../controllers/courseview");
const ctrlUpload = require("../controllers/upload");

/* GET home page. */
router.get('/', ctrl.index);
router.get('/users', ctrl.users);

router.get('/course', ctrl.course);

router.get('/review', ctrl.review);

router.get('/about', ctrl.about);

router.get('/future', ctrl.future);

router.get('/contactus', ctrl.contactus);

router.get('/courseview/:course/', ctrlCourse.view)

router.get('/catalog', ctrl.catalog);

router.get('/upload', ctrl.upload);
router.post('/upload', ctrlUpload.upload);

router.get('/upload/:course/:num/:ent', ctrl.course);
router.post('/upload1',ctrlUpload.course)
router.get('/upload1', ctrl.upload);

module.exports = router;
