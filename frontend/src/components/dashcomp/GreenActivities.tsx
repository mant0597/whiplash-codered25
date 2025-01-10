import React from 'react';
import { Share2, Leaf, BookOpen, GraduationCap, Plus } from 'lucide-react';

interface GreenActivitiesProps {
  setActiveSection: (section: 'quiz' | 'learning') => void;
}

const activities = [
  {
    title: 'Share Eco Wins',
    description: 'Share your sustainable achievements',
    icon: Share2,
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09'
  },
  {
    title: 'Plant Trees',
    description: 'Join community planting initiatives',
    icon: Leaf,
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09'
  },
  {
    title: 'Eco Learning Hub',
    description: 'Educational resources on sustainability',
    icon: BookOpen,
    link: 'learning',
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969'
  },
  {
    title: 'Eco Quiz',
    description: 'Test your environmental knowledge',
    icon: GraduationCap,
    link: 'quiz',
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66'
  }
];

const GreenActivities: React.FC<GreenActivitiesProps> = ({ setActiveSection }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-green-800 mb-6">Green Activities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {activities.map((activity, index) => (
          <div
            key={index}
            onClick={() => activity.link && setActiveSection(activity.link as 'quiz' | 'learning')}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          >
            <div className="relative h-40">
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">{activity.title}</h3>
              <p className="text-gray-600 text-sm">{activity.description}</p>
            </div>
          </div>
        ))}
        <div className="bg-green-50 rounded-xl flex flex-col items-center justify-center p-6 cursor-pointer hover:bg-green-100 transition-colors">
          <Plus className="w-8 h-8 text-green-600 mb-2" />
          <span className="text-green-700 font-medium">Add Eco Action</span>
        </div>
      </div>
    </div>
  );
};

export default GreenActivities;