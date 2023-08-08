const express = require('express');
const router = express.Router();
const leagueController = require('../controllers/leagueController');

// GET all leagues
router.get('/leagues', leagueController.getAllLeagues);

// GET a single league by ID
router.get('/leagues/:id', leagueController.getLeagueById);

// CREATE a new league
router.post('/leagues', leagueController.createLeague);

// UPDATE a league by ID
router.put('/leagues/:id', leagueController.updateLeague);

// DELETE a league by ID
router.delete('/leagues/:id', leagueController.deleteLeague);

module.exports = router;

