import React from 'react';

const TeamLogo = ({ teamName, imageUrl }) => {
  return (
    <div className="team-logo">
      <img src={imageUrl} alt={`${teamName} Logo`} />
      <span>{teamName}</span>
    </div>
  );
};

export default TeamLogo;

