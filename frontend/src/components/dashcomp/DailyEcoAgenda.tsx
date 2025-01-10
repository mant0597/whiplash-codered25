import React from 'react';
import { Leaf, Music, Heart, Brain } from 'lucide-react';

const activities = [
  {
    title: 'Reduce Carbon Footprint',
    description: 'Eco-friendly tips',
    icon: Leaf,
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09',
    color: 'green'
  },
  {
    title: 'Relaxing Nature Sounds',
    description: 'Ambient sounds',
    icon: Music,
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969',
    color: 'blue'
  },
  {
    title: 'Green Living Tips',
    description: 'Eco-friendly workout videos',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09',
    color: 'pink'
  },
  {
    title: 'Reflect and Relax',
    description: 'Mindful eco-practices',
    icon: Brain,
    image: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84',
    color: 'purple'
  }
];

const DailyEcoAgenda = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-green-800 mb-6">Daily Eco Agenda</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl group cursor-pointer"
          >
            <img
              src={activity.image}
              alt={activity.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 p-4 flex flex-col justify-end">
              <h3 className="text-white text-lg font-semibold mb-1">{activity.title}</h3>
              <p className="text-white/80 text-sm">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyEcoAgenda;