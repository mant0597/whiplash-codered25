import React from 'react';
import { TreePine } from 'lucide-react';

const VirtualTour: React.FC = () => {
  // Function to handle the button click and navigate to the virtual tour URL
  const handleStartTour = () => {
    window.location.href = 'https://fpsgarden.vercel.app/';
  };

  return (
    <div className="p-8">
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Virtual Garden Tour</h1>
        <p className="text-gray-600">Explore your virtual garden in 3D</p>
      </header>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
          alt="Virtual Garden"
          className="w-full h-[400px] object-cover"
        />
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Your Garden View</h2>
            <button
              onClick={handleStartTour} // Add onClick to start the tour
              className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <TreePine size={20} />
              Start Tour
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Oak Tree</h3>
              <p className="text-sm text-gray-600">Growth: 85%</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Pine Tree</h3>
              <p className="text-sm text-gray-600">Growth: 92%</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Cherry Tree</h3>
              <p className="text-sm text-gray-600">Growth: 78%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;
