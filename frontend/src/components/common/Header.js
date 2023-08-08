import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router for routing

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">Basketball Tournament</Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/teams">Teams</Link>
          </li>
          <li>
            <Link to="/matches">Matches</Link>
          </li>
          {/* You can add more navigation links here */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

