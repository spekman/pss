const connection = require('../database/connection');
const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');

router.get('/pokemon', TaskController.listAll);
router.post('/addPoke', TaskController.addPoke);
router.get('/renderBox', TaskController.renderBox);
router.delete('/releasePoke/:id', TaskController.releasePoke);

module.exports = router;