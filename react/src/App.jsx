import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import Register from './pages/Register'
import HomePage from './pages/HomePage'
import Doacao from './pages/Doacao'
import UserProfile from './pages/UserProfile'
import LandingPage from './pages/LandingPage'
import ControlPanel from './pages/ControlPanel'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/doacao" element={<Doacao />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/controlPanel" element={<ControlPanel />} />
      </Routes>
    </Router>
  )
}

export default App
