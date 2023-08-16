import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard'
import Media from '../pages/Media'
import Projects from '../pages/Projects'
import Analytics from '../pages/Analytics'
import Inbox from '../pages/Inbox'
import Profile from '../pages/Profile'
import Settings from '../pages/Settings'
import Logout from '../pages/Logout'
import Teams from '../containers/Teams'
import Matches from '../containers/Matches'

const NavPage = () => {
  return (
<React.Fragment>
      <section>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/media" element={<Media />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/matches" element={<Matches />} />
        </Routes>
      </section>
    </React.Fragment>
  )
}

export default NavPage
