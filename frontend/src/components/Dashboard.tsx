import React from 'react';
import { TreePine, Award, Leaf } from 'lucide-react';
import type { Achievement, Stat } from '../types';

const Dashboard: React.FC = () => {
  const stats: Stat[] = [
    { label: 'Plant trees', value: '16' },
    { label: 'Trees', value: '100' },
    { label: 'Eco-Points', value: '500' },
    { label: 'Eco Badges', value: '9' },
    { label: 'Challenges', value: '6' }
  ];

  const achievements: Achievement[] = [
    { title: 'Eco Warrior', description: 'No carbon footprint', icon: <TreePine size={24} /> },
    { title: 'Green Guardian', description: 'Eco actions completed', icon: <Leaf size={24} /> },
    { title: 'Eco Champion', description: 'Eco courses completed', icon: <Award size={24} /> }
  ];

  return (
    <div className="flex-1 p-8 bg-gray-50 overflow-auto">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="flex items-center gap-4">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold">Carbon Tracker</h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>50 Eco-Points</span>
              <span>20 Friends</span>
            </div>
          </div>
        </div>
        <button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors">
          Track carbon
        </button>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center gap-4">
              <div className="p-3 bg-green-50 rounded-lg text-green-600">
                {achievement.icon}
              </div>
              <div>
                <div className="font-semibold">{achievement.title}</div>
                <div className="text-sm text-gray-600">{achievement.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Friend Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-xl flex items-center gap-4">
            <img 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Emma G."
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="font-semibold">Emma G.</div>
              <div className="text-sm text-gray-600">Growing a digital garden</div>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-xl flex items-center gap-4">
            <img 
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Oliver H."
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="font-semibold">Oliver H.</div>
              <div className="text-sm text-gray-600">Eco course in progress</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;