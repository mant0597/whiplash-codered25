import React from "react";

const VirtualGarden = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {/* Sidebar */}
          <aside className="bg-white p-4 rounded-lg shadow-lg lg:col-span-1">
            <h2 className="text-xl font-bold mb-6">Garden</h2>
            <nav>
              <ul className="space-y-4">
                <li>
                  <button className="w-full text-left px-4 py-2 rounded-lg bg-green-100 text-green-800 font-medium">
                    Plant a tree
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">
                    Eco Actions
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">
                    Track Progress
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">
                    Leaderboard
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">
                    Upcoming Tasks
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">
                    Share Achievements
                  </button>
                </li>
                <li>
                  <h3 className="mt-6 text-sm font-semibold text-gray-500">
                    Carbon Points
                  </h3>
                  <ul className="mt-2 space-y-2">
                    <li>
                      <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">
                        Progress Overview
                      </button>
                    </li>
                    <li>
                      <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">
                        Redeem Rewards
                      </button>
                    </li>
                    <li>
                      <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">
                        Account Summary
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <button className="mt-6 w-full text-left px-4 py-2 rounded-lg bg-gray-100">
              Guidance & Tips
            </button>
          </aside>

          {/* Main Content */}
          <main className="bg-white p-6 rounded-lg shadow-lg lg:col-span-3">
            <h1 className="text-2xl font-bold mb-2">
              Welcome to Your Virtual Garden!
            </h1>
            <p className="text-gray-600 mb-6">Level 76</p>
            <section>
              <h2 className="text-lg font-semibold mb-4">Your Garden's Diversity</h2>
              <div className="flex space-x-4">
                <div className="h-16 w-16 bg-gray-300 rounded-lg"></div>
                <div className="h-16 w-16 bg-gray-300 rounded-lg"></div>
                <div className="h-16 w-16 bg-gray-300 rounded-lg"></div>
                <div className="h-16 w-16 bg-gray-300 rounded-lg"></div>
                <div className="h-16 w-16 bg-green-500 text-white flex items-center justify-center rounded-lg">
                  Options
                </div>
              </div>
            </section>

            <section className="mt-6">
              <div className="bg-green-100 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">Eco-Friendly Challenges</h3>
                  <p className="text-sm text-gray-600">
                    Earn points and reduce carbon footprint!
                  </p>
                </div>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg">
                  Take Challenge
                </button>
              </div>
            </section>

            <section className="mt-6">
              <div className="bg-green-50 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">Today's Task</h3>
                  <p className="text-sm text-gray-600">Italian</p>
                  <p className="text-sm text-gray-600">Plant Growth Progress</p>
                </div>
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg">
                  Add Tree
                </button>
              </div>
            </section>

            <section className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Eco-Friendly Actions</h3>
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-green-100 h-16 w-16 flex items-center justify-center rounded-full">
                  Reading
                </div>
                <div className="bg-green-100 h-16 w-16 flex items-center justify-center rounded-full">
                  Listening to
                </div>
                <div className="bg-green-100 h-16 w-16 flex items-center justify-center rounded-full">
                  Understanding
                </div>
                <div className="bg-green-100 h-16 w-16 flex items-center justify-center rounded-full">
                  Eco Challenge
                </div>
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="bg-white p-4 rounded-lg shadow-lg lg:col-span-1">
            <div className="bg-green-100 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold">Daily Challenge</h3>
              <p className="text-sm text-gray-600">
                Plant and grow eco-friendly trees!
              </p>
              <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg w-full">
                Customize
              </button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Leaderboard</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <span>Top Blossom</span>
                  <span className="font-bold text-green-600">2258 points</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Seco Flora</span>
                  <span className="font-bold text-green-600">2019 points</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Third Bloomed</span>
                  <span className="font-bold text-green-600">1822 points</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Seven Your</span>
                  <span className="font-bold text-green-600">420 points</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default VirtualGarden;
