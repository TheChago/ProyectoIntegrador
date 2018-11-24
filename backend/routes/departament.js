'use strict'

var express = require('express');
var DepartamentController = require('../controllers/departament');

var router = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './uploads'});



router.get('/home', DepartamentController.home);
router.post('/test', DepartamentController.test);
router.post('/save-departament', DepartamentController.saveDepartament);
router.get('/departament/:id?', DepartamentController.getDepartament);
router.get('/departaments', DepartamentController.getDepartaments);
router.put('/departament/:id', DepartamentController.updateDepartament);
router.delete('/departament/:id', DepartamentController.deleteDepartament);
router.post('/upload-image/:id', multipartMiddleware, DepartamentController.uploadImage);
router.get('/get-image/:image', DepartamentController.getImageFile);

module.exports = router;