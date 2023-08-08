import React, { useState, useEffect } from 'react';
import TeamLogo from '../components/shared/TeamLogo';
import { getTeams } from '../services/fakeApi'; // Assuming you have a fake API service to fetch teams data

const TeamsContainer = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Fetch teams data from the API when the component mounts
    fetchTeamsData();
  }, []);

  const fetchTeamsData = async () => {
    try {
      const teamsData = await getTeams(); // Assuming the API service returns an array of teams
      setTeams(teamsData);
    } catch (error) {
      console.error('Error fetching teams data:', error);
      // You can handle error scenarios here (e.g., show a message, retry fetching, etc.)
    }
  };

  return (
    <div className="teams-container">
      <h2>Teams in the Tournament</h2>
      <div className="teams-list">
        {teams.map((team) => (
          <TeamLogo key={team.id} teamName={team.name} imageUrl={team.logoUrl} />
        ))}
      </div>
    </div>
  );
};

export default TeamsContainer;

