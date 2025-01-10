import React, { useState, useEffect } from 'react';
import { TreePine, Award, Leaf, User, Clock } from 'lucide-react';
import type { Achievement, Stat } from '../types';

const Profile: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [badgeCount, setBadgeCount] = useState<number>(0);
  const [points, setPoints] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [lastActivityDate, setLastActivityDate] = useState<Date | null>(null);
  const [plantTrees, setPlantTrees] = useState<number>(0);  // Track planted trees count

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
      fetchUserStats();
    }
  }, []);

  const fetchUserStats = async () => {
    const token = localStorage.getItem('authToken');
    if (token) {
      try {
        const response = await fetch('http://localhost:5000/api/user/stats', {
          method: 'GET',
          headers: {
            'x-auth-token': token,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user stats');
        }

        const data = await response.json();
        setBadgeCount(data.badgeCount ?? 0);
        setPoints(data.points ?? 0);

        const lastActivity = new Date(data.lastActivityDate);
        setLastActivityDate(lastActivity);
        calculateStreak(lastActivity);

        setPlantTrees(Number(data.plantTrees) || 0);
        localStorage.setItem('plantTrees', String(data.plantTrees ?? 0));

      } catch (error) {
        console.error('Error fetching user stats:', error);
      }
    }
  };

  const calculateStreak = (lastActivity: Date) => {
    if (!lastActivity) return;

    const currentDate = new Date();
    const diffTime = currentDate.getTime() - lastActivity.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 3600 * 24));

    if (diffDays === 1) {
      setStreak(prevStreak => prevStreak + 1);
    } else if (diffDays > 1) {
      setStreak(1);
    } else {
      setStreak(prevStreak => (prevStreak === 0 ? 1 : prevStreak));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('plantTrees');
    setIsLoggedIn(false);
    window.location.reload();
  };

  const handlePlantTree = () => {
    setIsDialogOpen(true);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setSelectedImage(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    }
  };

  const handleSubmitImage = async () => {
    if (!selectedImage) {
      alert('Please select an image to upload');
      return;
    }

    const token = localStorage.getItem('authToken');
    const formData = new FormData();
    formData.append('image', selectedImage);

    if (token) {
      try {
        const response = await fetch('http://localhost:5000/api/user/plant-trees', {
          method: 'POST',
          headers: {
            'x-auth-token': token,
          },
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Failed to plant tree');
        }

        const data = await response.json();
        setPlantTrees(data.plantTrees);
        localStorage.setItem('plantTrees', String(data.plantTrees));
        setIsDialogOpen(false);
      } catch (error) {
        console.error('Error planting tree:', error);
      }
    }
  };

  const handleCancel = () => {
    setIsDialogOpen(false);
    setSelectedImage(null);
    setImagePreview(null);
  };

  useEffect(() => {
    const storedPlantTrees = localStorage.getItem('plantTrees');
    if (storedPlantTrees) {
      setPlantTrees(Number(storedPlantTrees));
    }
  }, []);

  const stats: Stat[] = [
    { label: 'Daily Streak', value: streak.toString() },
    { label: 'Eco-Points', value: points.toString() },
    { label: 'Eco Badges', value: badgeCount.toString() },
    { label: 'Plant trees', value: (plantTrees ?? 0).toString() },
  ];

  const achievements: Achievement[] = [
    { title: 'Eco Warrior', description: 'No carbon footprint', icon: <TreePine size={24} /> },
    { title: 'Green Guardian', description: 'Eco actions completed', icon: <Leaf size={24} /> },
    { title: 'Eco Champion', description: 'Eco courses completed', icon: <Award size={24} /> },
    { title: 'Tree Hero', description: 'Planted 1000 trees', icon: <User size={24} /> },  // Added new achievement
  ];

  const recentActivities = [
    { icon: <TreePine size={20} />, action: 'Planted an Oak tree', time: '2 hours ago' },
    { icon: <Award size={20} />, action: 'Earned Green Thumb badge', time: '1 day ago' },
    { icon: <Clock size={20} />, action: 'Completed daily challenge', time: '2 days ago' },
  ];

  return (
    <div className="p-8 relative">
      <header className="mb-8">
        <div className="flex items-center gap-6">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
          />
          <div>
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-gray-600">Eco Warrior Level 76</p>
          </div>
        </div>
      </header>

      {/* Plant a Tree Button */}
      <button
        onClick={handlePlantTree}
        className="absolute top-8 right-8 bg-green-500 text-white py-2 px-4 rounded-lg"
      >
        Plant a Tree
      </button>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Stats */}
        <div className="space-y-8">
          <section className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Stats</h2>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-green-50 p-3 rounded-lg text-center">
                  <div className="font-bold text-2xl text-green-600">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Badges & Recent Activity */}
        <div className="space-y-8">
          <section className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Badges & Recent Activity</h2>
            <div className="grid grid-cols-2 gap-4">
              {/* Badges */}
              <div className="space-y-4">
                {[{ name: 'Eco Warrior', level: 'Gold' }, { name: 'Tree Master', level: 'Silver' }].map((badge, index) => (
                  <div key={index} className="bg-green-50 p-3 rounded-lg text-center">
                    <Award className="mx-auto text-green-600 mb-2" size={24} />
                    <div className="font-semibold text-sm">{badge.name}</div>
                    <div className="text-xs text-gray-600">{badge.level}</div>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-2 bg-green-50 rounded-lg text-green-600">
                      {activity.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{activity.action}</div>
                      <div className="text-sm text-gray-600">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Achievements */}
      <section className="bg-white rounded-xl p-6 shadow-sm mt-8">
        <h2 className="text-xl font-bold mb-4">Achievements</h2>
        <div className="flex justify-between">
          {/* Loop through all achievements and display them in a row */}
          {achievements.map((achievement, index) => (
            <div key={index} className="w-1/4 space-y-4">
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <div className="p-3 bg-green-100 text-green-600 rounded-lg">{achievement.icon}</div>
                <div className="font-semibold">{achievement.title}</div>
                <div className="text-sm text-gray-600">{achievement.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dialog Box for Image Upload */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-semibold mb-4">Upload Image</h2>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mb-4"
            />
            {imagePreview && (
              <div className="mb-4">
                <img src={imagePreview} alt="Preview" className="max-w-full h-40 object-cover" />
              </div>
            )}
            <div className="flex justify-between">
              <button
                onClick={handleCancel}
                className="bg-gray-400 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitImage}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
