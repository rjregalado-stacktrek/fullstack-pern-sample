import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white h-screen w-1/4 flex flex-col justify-center">
      <ul className="space-y-2 p-4">
        <li>
          <Link
            to="/teams"
            className="block hover:text-blue-500 transition duration-300"
          >
            Teams
          </Link>
        </li>
        <li>
          <Link
            to="/matches"
            className="block hover:text-blue-500 transition duration-300"
          >
            Matches
          </Link>
        </li>
        {/* Add more sidebar links here */}
      </ul>
    </aside>
  );
};

export default Sidebar;



