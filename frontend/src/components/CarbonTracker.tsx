import React, { useState } from 'react';
import { Car, Home, Plane, ShoppingBag } from 'lucide-react';

export default function CarbonTracker() {
  const [transportation, setTransportation] = useState(0);
  const [household, setHousehold] = useState(0);
  const [lifestyle, setLifestyle] = useState(0);

  const totalEmissions = transportation + household + lifestyle;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-green-600">Carbon Footprint Calculator</h1>
      
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Car className="h-6 w-6 text-green-600 mr-2" />
            <h2 className="text-xl font-semibold">Transportation</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Weekly car mileage
              </label>
              <input
                type="number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                value={transportation}
                onChange={(e) => setTransportation(Number(e.target.value))}
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Home className="h-6 w-6 text-green-600 mr-2" />
            <h2 className="text-xl font-semibold">Household</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Monthly electricity usage (kWh)
              </label>
              <input
                type="number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                value={household}
                onChange={(e) => setHousehold(Number(e.target.value))}
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <ShoppingBag className="h-6 w-6 text-green-600 mr-2" />
            <h2 className="text-xl font-semibold">Lifestyle</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Monthly shopping expenses ($)
              </label>
              <input
                type="number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                value={lifestyle}
                onChange={(e) => setLifestyle(Number(e.target.value))}
              />
            </div>
          </div>
        </div>

        <div className="bg-green-600 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Your Carbon Footprint</h2>
          <p className="text-3xl font-bold">{totalEmissions.toFixed(2)} kg CO2e</p>
          <p className="mt-2">Based on your inputs, this is your estimated monthly carbon footprint.</p>
        </div>
      </div>
    </div>
  );
}