import React, { useState, useEffect } from 'react';
import { getMatches } from '../services/fakeApi'; // Assuming you have a fake API service to fetch matches data

const MatchesContainer = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    // Fetch matches data from the API when the component mounts
    fetchMatchesData();
  }, []);

  const fetchMatchesData = async () => {
    try {
      const matchesData = await getMatches(); // Assuming the API service returns an array of matches
      setMatches(matchesData);
    } catch (error) {
      console.error('Error fetching matches data:', error);
      // You can handle error scenarios here (e.g., show a message, retry fetching, etc.)
    }
  };

  return (
    <div className="matches-container">
      <h2>Matches Schedule</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Home Team</th>
            <th>Away Team</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match) => (
            <tr key={match.id}>
              <td>{match.date}</td>
              <td>{match.homeTeam}</td>
              <td>{match.awayTeam}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MatchesContainer;

