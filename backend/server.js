const express = require('express');
const cors = require('cors');
const pool = require('./db'); // Ensure you have set up the database connection properly
const leagueRoutes = require('./routes/leagueRoutes');
const { authenticateToken } = require('./middleware/authMiddleware');

const app = express();

app.use(cors());
app.use(express.json());

// Use league routes (with authentication middleware for protected routes)
app.use('/api', authenticateToken, leagueRoutes);

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
