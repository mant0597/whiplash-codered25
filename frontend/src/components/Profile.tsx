import React from 'react';
import { User, Award, TreePine, Clock } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <div className="p-8">
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

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <section className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Activity Overview</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="font-bold text-2xl text-green-600">156</div>
                <div className="text-sm text-gray-600">Trees Planted</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="font-bold text-2xl text-green-600">2,450</div>
                <div className="text-sm text-gray-600">Eco Points</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="font-bold text-2xl text-green-600">12</div>
                <div className="text-sm text-gray-600">Achievements</div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[
                { icon: <TreePine size={20} />, action: "Planted an Oak tree", time: "2 hours ago" },
                { icon: <Award size={20} />, action: "Earned Green Thumb badge", time: "1 day ago" },
                { icon: <Clock size={20} />, action: "Completed daily challenge", time: "2 days ago" }
              ].map((activity, index) => (
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
          </section>
        </div>

        <div className="space-y-8">
          <section className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Badges</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Eco Warrior", level: "Gold" },
                { name: "Tree Master", level: "Silver" },
                { name: "Green Guide", level: "Bronze" },
                { name: "Earth Keeper", level: "Gold" }
              ].map((badge, index) => (
                <div key={index} className="bg-green-50 p-3 rounded-lg text-center">
                  <Award className="mx-auto text-green-600 mb-2" size={24} />
                  <div className="font-semibold text-sm">{badge.name}</div>
                  <div className="text-xs text-gray-600">{badge.level}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;