import React from 'react';
import { TreePine, Calendar } from 'lucide-react';
import type { GardenTree } from '../types';

const Garden: React.FC = () => {
  const trees: GardenTree[] = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
      name: 'Willow',
      type: 'Planting Coordinator'
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1628696159353-ae5f132155c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
      name: 'Maple',
      type: 'Tree Care Specialist'
    },
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
      name: 'Pine',
      type: 'Growth Manager'
    }
  ];

  return (
    <div className="p-8">
      <header className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Welcome to Your Virtual Garden!</h1>
        <p className="text-gray-600">Level 76</p>
      </header>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Your Garden's Diversity</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trees.map((tree) => (
            <div key={tree.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
              <img src={tree.image} alt={tree.name} className="w-full h-32 object-cover rounded-lg mb-3" />
              <h3 className="font-semibold">{tree.name}</h3>
              <p className="text-sm text-gray-600">{tree.type}</p>
            </div>
          ))}
          <button className="bg-green-500 hover:bg-green-600 text-white rounded-xl p-4 flex items-center justify-center transition-colors">
            <TreePine size={24} />
            <span className="ml-2">Add Tree</span>
          </button>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-green-50 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">Today's Tasks</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Plant New Trees</span>
              </div>
              <button className="px-3 py-1 bg-green-500 text-white rounded-lg text-sm">Start</button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Water Garden</span>
              </div>
              <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg text-sm">Done</button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Calendar</h2>
            <Calendar size={20} />
          </div>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 31 }, (_, i) => (
              <div 
                key={i} 
                className={`aspect-square flex items-center justify-center rounded-lg text-sm
                  ${i === 14 ? 'bg-green-500 text-white' : 'hover:bg-gray-50'}`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Garden;