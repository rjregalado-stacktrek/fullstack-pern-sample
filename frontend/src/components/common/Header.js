import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link to="/" className="logo-link">
            Basketball Tournament
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/teams" className="text-white">
              Teams
            </Link>
          </li>
          <li>
            <Link to="/matches" className="text-white">
              Matches
            </Link>
          </li>
          {/* Add more navigation links here */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;



