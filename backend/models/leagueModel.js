const pool = require('../db');

// Get all leagues
const getAllLeagues = async () => {
  try {
    const allLeagues = await pool.query('SELECT * FROM leagues');
    return allLeagues.rows;
  } catch (err) {
    throw err;
  }
};

// Get a single league by ID
const getLeagueById = async (id) => {
  try {
    const league = await pool.query('SELECT * FROM leagues WHERE id = $1', [id]);
    return league.rows[0];
  } catch (err) {
    throw err;
  }
};

// Create a new league
const createLeague = async (name, location, date) => {
  try {
    const newLeague = await pool.query(
      'INSERT INTO leagues (name, location, date) VALUES ($1, $2, $3) RETURNING *',
      [name, location, date]
    );
    return newLeague.rows[0];
  } catch (err) {
    throw err;
  }
};

// Update a league by ID
const updateLeague = async (id, name, location, date) => {
  try {
    const updatedLeague = await pool.query(
      'UPDATE leagues SET name = $1, location = $2, date = $3 WHERE id = $4 RETURNING *',
      [name, location, date, id]
    );
    return updatedLeague.rows[0];
  } catch (err) {
    throw err;
  }
};

// Delete a league by ID
const deleteLeague = async (id) => {
  try {
    const deletedLeague = await pool.query('DELETE FROM leagues WHERE id = $1 RETURNING *', [id]);
    return deletedLeague.rows[0];
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getAllLeagues,
  getLeagueById,
  createLeague,
  updateLeague,
  deleteLeague,
};

