// Simulated data for teams
const teamsData = [
  { id: 1, name: 'Team A', logoUrl: 'https://example.com/team-a-logo.png' },
  { id: 2, name: 'Team B', logoUrl: 'https://example.com/team-b-logo.png' },
  { id: 3, name: 'Team C', logoUrl: 'https://example.com/team-c-logo.png' },
  // Add more teams here
];

// Simulated data for matches
const matchesData = [
  { id: 1, date: '2023-08-10', homeTeam: 'Team A', awayTeam: 'Team B' },
  { id: 2, date: '2023-08-12', homeTeam: 'Team C', awayTeam: 'Team A' },
  { id: 3, date: '2023-08-15', homeTeam: 'Team B', awayTeam: 'Team C' },
  // Add more matches here
];

// Simulated delay to mimic API response time
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Simulated API functions
export const getTeams = async () => {
  await delay(500); // Simulate API delay
  return teamsData;
};

export const getMatches = async () => {
  await delay(500); // Simulate API delay
  return matchesData;
};

