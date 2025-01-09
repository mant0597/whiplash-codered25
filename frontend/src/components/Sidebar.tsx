import React from 'react';
import { Leaf, Award, Users, Calendar, Settings, HelpCircle, TreePine, Home, BarChart, Menu, X, Camera, User } from 'lucide-react';
import type { SidebarProps, SidebarItemProps, MenuItem } from '../types';
import logo from '../assets/logo.png';

const Sidebar: React.FC<SidebarProps> = ({ activePage, setActivePage, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const menuItems: MenuItem[] = [
    { icon: <Home size={20} />, label: "Dashboard", id: "dashboard" },
    { icon: <BarChart size={20} />, label: "Activity", id: "activity" },
    { icon: <Calendar size={20} />, label: "Garden", id: "garden" },
    { icon: <Camera size={20} />, label: "Virtual Tour", id: "tour" },
    { icon: <User size={20} />, label: "Profile", id: "profile" },
    { icon: <Settings size={20} />, label: "Settings", id: "settings" },
    { icon: <HelpCircle size={20} />, label: "Help", id: "help" }
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

      <aside 
        className={`
          fixed md:static inset-y-0 left-0 z-40 w-64 bg-white border-r h-screen p-4 flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
        aria-hidden={!isMobileMenuOpen && window.innerWidth < 768}
      >
        <div className='w-40 h-0 ml-5 '>
          <img  src={logo} alt='Logo' />
        </div>
        <div className="mb-8 pt-40 md:mt-0">
          <button 
            className="w-full bg-green-500 hover:bg-green-600 text-white rounded-lg py-2 px-4 flex items-center justify-center gap-2 transition-colors"
            onClick={() => handleItemClick('garden')}
          >
            <TreePine size={20}/>
            Plant a Tree
          </button>
        </div>
        
        <nav className="flex-1">
          {menuItems.map((item) => (
            <SidebarItem 
              key={item.id}
              icon={item.icon} 
              label={item.label} 
              active={activePage === item.id}
              onClick={() => handleItemClick(item.id)}
            />
          ))}
        </nav>
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

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active = false, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer mb-2 transition-colors text-left
        ${active ? 'bg-green-50 text-green-600' : 'hover:bg-gray-50'}`}
      aria-current={active ? 'page' : undefined}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default Sidebar;