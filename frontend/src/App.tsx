import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change Switch to Routes
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import WalkingTrackerPage from './pages/WalkingTrackerPage'; 
import Garden from './components/Garden';
import Activity from './components/Activity';
import Settings from './components/Settings';
import VirtualTour from './components/VirtualTour';
import Help from './components/Help';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Login from './components/Login';  // Import Login Component
import Register from './components/Register';  // Import Register Component

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);  // Track login state

<<<<<<< HEAD
=======
  // Close mobile menu when window is resized to desktop view



>>>>>>> c2c3d1a75060dc9b04a4ec3e96fea7184a8d67f0
  useEffect(() => {
    const token = localStorage.getItem('authToken');  // Check if the token is stored
    if (token) {
      setIsLoggedIn(true);  // Set user as logged in
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);  // Set user as logged in after successful login
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');  // Remove token from localStorage
    setIsLoggedIn(false);  // Set user as logged out
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        {isLoggedIn ? (
          // Show the sidebar and dashboard if logged in
          <>
            <Sidebar
              activePage={activePage}
              setActivePage={setActivePage}
              isMobileMenuOpen={isMobileMenuOpen}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
            <div className="flex-1 flex flex-col min-h-screen">
              <main className="flex-1 overflow-auto" role="main">
                <Routes>
                  <Route path="/" element={<Dashboard onLogout={handleLogout} />} />
                  <Route path="/walking-tracker" element={<WalkingTrackerPage />} />
                  <Route path="/garden" element={<Garden />} />
                  <Route path="/activity" element={<Activity />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/help" element={<Help />} />
                  <Route path="/tour" element={<VirtualTour />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </>
        ) : (
          // Show login/register forms if not logged in
          <div className="flex-1 flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Routes>
                <Route path="/" element={<Login onLogin={handleLogin} />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
