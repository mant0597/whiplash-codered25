import React from 'react';
import { BarChart2, Leaf, Award } from 'lucide-react';

const Activity: React.FC = () => {
  return (
    <div className="p-8">
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Activity Overview</h1>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4">This Week's Progress</h2>
          <div className="h-48 flex items-end justify-between gap-2">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
              <div key={day} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full bg-green-200 rounded-t-lg transition-all duration-500"
                  style={{ height: `${Math.random() * 100}%` }}
                ></div>
                <span className="text-sm text-gray-600 mt-2">{day}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4">Achievements</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-50 rounded-lg">
                <Leaf className="text-green-600" size={24} />
              </div>
              <div>
                <div className="font-semibold">Eco Warrior</div>
                <div className="text-sm text-gray-600">Planted 10 trees this week</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-50 rounded-lg">
                <Award className="text-green-600" size={24} />
              </div>
              <div>
                <div className="font-semibold">Green Guardian</div>
                <div className="text-sm text-gray-600">Reduced carbon footprint by 20%</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Activity;