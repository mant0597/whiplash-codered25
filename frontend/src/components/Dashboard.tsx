import React, { useState } from 'react';
import DailyEcoAgenda from './dashcomp/DailyEcoAgenda';
import GreenActivities from './dashcomp/GreenActivities';
import Quiz from './dashcomp/Quiz';
import LearningHub from './dashcomp/LearningHub';

function Dashboard() {
  const [activeSection, setActiveSection] = useState<'home' | 'quiz' | 'learning'>('home');

  return (
    <div className="flex min-h-screen bg-[#f0f9f0]">

      <main className="container mx-auto px-4 py-8 flex-1">
        {activeSection === 'home' && (
          <>
            <div className="bg-green-50 rounded-xl p-6 mb-8">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-3xl font-bold text-green-800 mb-2">Good day, Eco Warrior!</h1>
                  <p className="text-green-600">Earn points to grow your digital garden!</p>
                </div>
                <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  Consult
                </button>
              </div>
            </div>
            <DailyEcoAgenda />
            <GreenActivities setActiveSection={setActiveSection} />
          </>
        )}
        {activeSection === 'quiz' && <Quiz />}
        {activeSection === 'learning' && <LearningHub />}
      </main>
    </div>
  );
}

export default Dashboard;
