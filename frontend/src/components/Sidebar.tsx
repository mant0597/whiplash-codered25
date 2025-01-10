import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Award, Users, Calendar, Settings, HelpCircle, TreePine, Home, BarChart, Menu, X, Camera, User } from 'lucide-react';
import logo from '../assets/logo.png';

const Sidebar: React.FC<{
  activePage: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ activePage, setActivePage, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true); 
    }
  }, []);

  const menuItems = [
    { icon: <Home size={20} />, label: "Dashboard", id: "home", link: "/" },
    { icon: <BarChart size={20} />, label: "Activity", id: "activity", link: "/activity" },
    { icon: <Calendar size={20} />, label: "Garden", id: "garden", link: "/garden" },
    { icon: <Leaf size={20} />, label: "Walking Tracker", id: "walking-tracker", link: "/walking-tracker" },
    { icon: <Camera size={20} />, label: "Virtual Tour", id: "tour", link: "/tour" },
    { icon: <User size={20} />, label: "Profile", id: "profile", link: "/profile" },
    { icon: <Settings size={20} />, label: "Settings", id: "settings", link: "/settings" },
    { icon: <HelpCircle size={20} />, label: "Help", id: "help", link: "/help" },
  ];

  const handleItemClick = (id: string) => {
    setActivePage(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow-md"
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside className={`fixed md:static inset-y-0 left-0 z-40 w-60 bg-white border-r h-screen p- flex flex-col
        transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`} 
        aria-hidden={!isMobileMenuOpen && window.innerWidth < 768}>
        
        <div className='w-full h-auto'>
          <img src={logo} alt='Logo' className="w-full" />
        </div>

        <nav className="flex-1">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer mb-2 transition-colors text-left
                ${activePage === item.id ? 'bg-green-50 text-green-600' : 'hover:bg-gray-50'}`}
              onClick={() => handleItemClick(item.id)}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-4">
          {isLoggedIn ? (
            <button 
              onClick={() => {
                localStorage.removeItem('authToken');
                setIsLoggedIn(false);
                window.location.reload();
              }} 
              className="w-full bg-red-600 hover:bg-red-800 text-white py-2 px-4 rounded-lg"
            >
              Logout
            </button>
          ) : (
            <Link 
              to="/login" 
              className="w-full bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded-lg"
            >
              Login
            </Link>
          )}
        </div>
      </aside>

      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
          role="presentation"
        />
      )}
    </>
  );
};

export default Sidebar;
