import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router for routing

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-links">
        <li>
          <Link to="/teams">Teams</Link>
        </li>
        <li>
          <Link to="/matches">Matches</Link>
        </li>
        {/* You can add more sidebar links here */}
      </ul>
    </aside>
  );
};

export default Sidebar;

