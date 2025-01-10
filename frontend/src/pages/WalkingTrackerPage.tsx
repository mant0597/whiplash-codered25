// src/pages/WalkingTrackerPage.tsx

import React from 'react';
import WalkingTracker from '../components/WalkingTracker';

const WalkingTrackerPage: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <WalkingTracker />
      </div>
    </div>
  );
};

export default WalkingTrackerPage;
