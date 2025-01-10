import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
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
import Login from './components/Login';  
import Register from './components/Register';  
import WalkingTracker from './components/WalkingTracker';
import Ml from './components/Ml';  // Import the Ml page

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);  

  useEffect(() => {
    const token = localStorage.getItem('authToken');  
    if (token) {
      setIsLoggedIn(true);  
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);  
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');  
    setIsLoggedIn(false);  
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
                  <Route path="/ml" element={<Ml />} /> {/* Add the Ml route here */}
                </Routes>
              </main>
              <Footer />
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Routes>
                <Route path="/" element={<Login onLogin={handleLogin} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/walking-tracker" element={<WalkingTracker />} />
              </Routes>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
