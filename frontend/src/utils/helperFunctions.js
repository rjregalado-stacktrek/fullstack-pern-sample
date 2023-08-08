// Function to format a date in a user-friendly way
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
};

// Function to capitalize the first letter of a string
export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Function to calculate the time remaining until a given date
export const calculateTimeRemaining = (targetDate) => {
  const targetTime = new Date(targetDate).getTime();
  const currentTime = new Date().getTime();
  const timeRemaining = targetTime - currentTime;

  // Convert timeRemaining to days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

// Other utility functions can be added as needed
// For example, functions to handle validation, formatting, or data manipulation


