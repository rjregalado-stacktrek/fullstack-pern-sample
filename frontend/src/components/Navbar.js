import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <React.Fragment>
      <section>
        <header className="bg-blue-500 p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <div className="text-white text-xl font-bold">
              <NavLink to="/" className="logo-link">
                Basketball Tournament
              </NavLink>
            </div>
            <ul className="flex space-x-4">
              <li>
                <NavLink to="/teams" className="text-white">
                  Teams
                </NavLink>
              </li>
              <li>
                <NavLink to="/matches" className="text-white">
                  Matches
                </NavLink>
              </li>
              {/* Add more navigation links here */}
            </ul>
          </nav>
        </header>
      </section>
    </React.Fragment>
  );
};

export default Navbar;
