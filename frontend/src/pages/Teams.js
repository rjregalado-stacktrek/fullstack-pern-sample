import React from 'react';
import TeamsContainer from '../containers/TeamsContainer';
import LeagueForm from '../components/shared/LeagueForm';

const Teams = () => {
  return (
    <div className="teams-page">
      <h1>Teams in the Tournament</h1>
      <TeamsContainer />
    </div>
  );
};

export default Teams;

