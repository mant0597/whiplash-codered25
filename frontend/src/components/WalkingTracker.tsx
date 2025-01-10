// src/components/WalkingTracker.tsx

import React, { useState, useEffect } from 'react';

interface Coordinates {
  latitude: number;
  longitude: number;
}

const WalkingTracker: React.FC = () => {
  const [currentLocation, setCurrentLocation] = useState<Coordinates | null>(null);
  const [distance, setDistance] = useState<number>(0);  // Distance in meters
  const [previousLocation, setPreviousLocation] = useState<Coordinates | null>(null);

  const calculateDistance = (coord1: Coordinates, coord2: Coordinates): number => {
    if (!coord1 || !coord2) return 0;

    const toRadians = (degree: number) => (degree * Math.PI) / 180;

    const lat1 = coord1.latitude;
    const lon1 = coord1.longitude;
    const lat2 = coord2.latitude;
    const lon2 = coord2.longitude;

    const R = 6371e3; // Earth radius in meters
    const φ1 = toRadians(lat1);
    const φ2 = toRadians(lat2);
    const Δφ = toRadians(lat2 - lat1);
    const Δλ = toRadians(lon2 - lon1);

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) *
      Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // returns the distance in meters
  };

  const updateLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const newLocation = { latitude, longitude };
          setCurrentLocation(newLocation);

          if (previousLocation) {
            const newDistance = calculateDistance(previousLocation, newLocation);
            setDistance(prev => prev + newDistance);
          }

          setPreviousLocation(newLocation);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    const interval = setInterval(updateLocation, 1000); // Update every second

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, [previousLocation]);

  return (
    <div className="p-4">
      <h3 className="text-xl font-bold">Walking Tracker</h3>
      <p className="text-lg">Current Distance: {distance.toFixed(2)} meters</p>
      <p className="text-sm">Location: {currentLocation?.latitude}, {currentLocation?.longitude}</p>
    </div>
  );
};

export default WalkingTracker;
