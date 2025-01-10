import React from 'react';
import { Play } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  description: string;
}

const videos: Video[] = [
  {
    id: '1',
    title: 'Understanding Climate Change',
    thumbnail: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce',
    duration: '12:30',
    description: 'Learn about the basics of climate change and its global impact.'
  },
  {
    id: '2',
    title: 'Sustainable Living Tips',
    thumbnail: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09',
    duration: '15:45',
    description: 'Practical tips for living a more sustainable lifestyle.'
  },
  {
    id: '3',
    title: 'Renewable Energy Explained',
    thumbnail: 'https://images.unsplash.com/photo-1509391366360-2e959784a276',
    duration: '18:20',
    description: 'Discover different types of renewable energy sources.'
  },
  {
    id: '4',
    title: 'Ocean Conservation',
    thumbnail: 'https://images.unsplash.com/photo-1583212292454-39d2a8494f2b',
    duration: '14:15',
    description: 'Exploring the importance of protecting our oceans.'
  },
  {
    id: '5',
    title: 'Zero Waste Living',
    thumbnail: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b',
    duration: '20:00',
    description: 'Tips and tricks for reducing waste in your daily life.'
  },
  {
    id: '6',
    title: 'Biodiversity Matters',
    thumbnail: 'https://images.unsplash.com/photo-1500829243541-74b677fecc30',
    duration: '16:40',
    description: 'Understanding the importance of biodiversity.'
  },
  {
    id: '7',
    title: 'Green Transportation',
    thumbnail: 'https://images.unsplash.com/photo-1519003300449-424ad0405076',
    duration: '13:55',
    description: 'Exploring eco-friendly transportation options.'
  },
  {
    id: '8',
    title: 'Sustainable Agriculture',
    thumbnail: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad',
    duration: '17:30',
    description: 'Learning about sustainable farming practices.'
  },
  {
    id: '9',
    title: 'Energy Conservation',
    thumbnail: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e',
    duration: '19:15',
    description: 'Tips for reducing energy consumption at home.'
  },
  {
    id: '10',
    title: 'Environmental Policy',
    thumbnail: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9',
    duration: '21:00',
    description: 'Understanding environmental regulations and policies.'
  }
];

const LearningHub = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-8">Eco Learning Hub</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <button className="bg-white rounded-full p-3">
                  <Play className="w-6 h-6 text-green-600" />
                </button>
              </div>
              <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                {video.duration}
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
              <p className="text-gray-600 text-sm">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningHub;