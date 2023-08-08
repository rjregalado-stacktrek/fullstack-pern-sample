const pool = require('../db');

// Get all leagues
const getAllLeagues = async (req, res) => {
  try {
    const allLeagues = await pool.query('SELECT * FROM leagues');
    res.json(allLeagues.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a single league by ID
const getLeagueById = async (req, res) => {
  const { id } = req.params;
  try {
    const league = await pool.query('SELECT * FROM leagues WHERE id = $1', [id]);
    if (league.rows.length === 0) {
      return res.status(404).json({ error: 'League not found' });
    }
    res.json(league.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create a new league
const createLeague = async (req, res) => {
  const { name, location, date } = req.body;
  try {
    const newLeague = await pool.query(
      'INSERT INTO leagues (name, location, date) VALUES ($1, $2, $3) RETURNING *',
      [name, location, date]
    );
    res.status(201).json(newLeague.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a league by ID
const updateLeague = async (req, res) => {
  const { id } = req.params;
  const { name, location, date } = req.body;
  try {
    const updatedLeague = await pool.query(
      'UPDATE leagues SET name = $1, location = $2, date = $3 WHERE id = $4 RETURNING *',
      [name, location, date, id]
    );
    if (updatedLeague.rows.length === 0) {
      return res.status(404).json({ error: 'League not found' });
    }
    res.json(updatedLeague.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a league by ID
const deleteLeague = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedLeague = await pool.query('DELETE FROM leagues WHERE id = $1 RETURNING *', [id]);
    if (deletedLeague.rows.length === 0) {
      return res.status(404).json({ error: 'League not found' });
    }
    res.json({ message: 'League deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllLeagues,
  getLeagueById,
  createLeague,
  updateLeague,
  deleteLeague,
};

