import React from 'react';

const TeamLogo = ({ teamName, imageUrl }) => {
  return (
    <div className="flex items-center mt-5">
      <img src={imageUrl}  className="h-10 w-10 mr-2" />
      <span className="text-lg">{teamName}</span>
    </div>
  );
};

export default TeamLogo;
//alt={`${teamName} Logo`}