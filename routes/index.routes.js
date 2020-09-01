const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index.controllers');




router.get('/', indexController.getAll);
router.get('/formSave', indexController.formSave);
router.post('/saveData', indexController.actionSave);
router.get('/edit/:id', indexController.formUpdate);
router.post('/Update', indexController.actionUpdate);
router.get('/delete/:id', indexController.delete);


module.exports = router;