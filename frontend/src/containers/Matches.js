import React, { useState, useEffect } from 'react';
import { getMatches } from '../services/fakeApi'; // Assuming you have a fake API service to fetch matches data

const Matches = () => {
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
    <div className="centered text-xl h-screen">
      <div className="matches-container">
        <h2 className="text-blue-900 text-4xl text-center py-2">Matches Schedule</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className='px-4 py-2'>Date</th>
              <th className='px-4 py-2'>Home Team</th>
              <th className='px-4 py-2'>Away Team</th>
            </tr>
          </thead>
          <tbody>
            {matches.map((match) => (
              <tr key={match.id}>
                <td className='px-4 py-2'>{match.date}</td>
                <td className='px-4 py-2'>{match.homeTeam}</td>
                <td className='px-4 py-2'>{match.awayTeam}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Matches;


