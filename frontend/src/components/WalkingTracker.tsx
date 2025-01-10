import React, { useState, useEffect } from 'react';

// Helper function to generate random numbers within a given range
const getRandomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

// Constants for carbon emissions (grams per kilometer)
const carbonEmissions = {
  walking: 0,        // Walking doesn't emit CO2
  cycling: 0,        // Non-motorized bike (human-powered) has 0 CO2 emissions
  motorizedBike: 150, // Approx. 150g of CO2 per km for electric/motorized bikes
  car: 271,           // Approx. 271g of CO2 per km for car
  publicTransport: 100, // Approx. 100g of CO2 per km for public transport
  flight: 255         // Approx. 255g of CO2 per km for flight
};

const WalkingTracker: React.FC = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [distance, setDistance] = useState<number>(0); // Total Distance in meters
  const [tracking, setTracking] = useState<boolean>(false); // Whether tracking is active
  const [mode, setMode] = useState<string>('walking'); // 'walking' or 'cycling'
  const [error, setError] = useState<string | null>(null); // Error state for location access
  const [points, setPoints] = useState<number>(0); // Points the user has earned

  // Points per 100 meters for walking, and 200 meters for cycling
  const walkingPointsThreshold = 20; // Walking 100 meters = 5 points
  const cyclingPointsThreshold = 200; // Cycling 200 meters = 5 points

  const [walkingDistance, setWalkingDistance] = useState<number>(0); // Walking distance in meters
  const [cyclingDistance, setCyclingDistance] = useState<number>(0); // Cycling distance in meters

  // Helper function to calculate random walking or cycling distance per second
  const getRandomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

  // Function to generate random walking distance (between 0.2m and 0.5m per second)
  const generateWalkingDistance = () => {
    return getRandomInRange(0.2, 0.5); // Random distance between 0.2 and 0.5 meters per second
  };

  // Function to generate random cycling distance (between 0.5m and 1.5m per second)
  const generateCyclingDistance = () => {
    return getRandomInRange(0.5, 1.5); // Random distance between 0.5 and 1.5 meters per second
  };

  // Function to simulate distance accumulation
  const incrementDistance = (targetDistance: number) => {
    setDistance((prev) => prev + targetDistance);
    // Update distance for walking or cycling
    if (mode === 'walking') {
      setWalkingDistance((prev) => {
        const newDistance = prev + targetDistance;
        if (newDistance >= walkingPointsThreshold) {
          const newPoints = Math.floor(newDistance / walkingPointsThreshold) * 5;
          setPoints(newPoints); // Award points for every 100 meters walked
        }
        return newDistance;
      });
    } else if (mode === 'cycling') {
      setCyclingDistance((prev) => {
        const newDistance = prev + targetDistance;
        if (newDistance >= cyclingPointsThreshold) {
          const newPoints = Math.floor(newDistance / cyclingPointsThreshold) * 5;
          setPoints(newPoints); // Award points for every 200 meters cycled
        }
        return newDistance;
      });
    }
  };

  // Fetch the current geolocation of the user
  const updateLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
          setError(null); // Reset error if location is successfully fetched
        },
        (error) => {
          setError('Error getting location: ' + error.message); // Show error message
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  // Start location tracking
  const startTracking = () => {
    setTracking(true);
  };

  // Stop location tracking
  const stopTracking = () => {
    setTracking(false);
  };

  // Simulate tracking with gradual distance increment and real location update
  useEffect(() => {
    if (tracking) {
      const interval = setInterval(() => {
        // Determine random distance based on mode (walking or cycling)
        const targetDistance = mode === 'walking' ? generateWalkingDistance() : generateCyclingDistance();
        incrementDistance(targetDistance); // Update the distance gradually

        // Update the real location using geolocation API
        updateLocation();
      }, 1000); // Update every second

      return () => {
        clearInterval(interval); // Clean up the interval when the component unmounts or tracking stops
      };
    }
  }, [tracking, mode]);

  // Function to calculate carbon emissions for a given distance and mode
  const calculateEmissions = (distanceInMeters: number, mode: string) => {
    const distanceInKm = distanceInMeters / 1000; // Convert distance to kilometers
    const emissions = carbonEmissions[mode] * distanceInKm; // CO2 in grams
    return emissions;
  };

  // Function to calculate CO2 savings (compared to walking or cycling)
  const calculateCO2Savings = (distanceInMeters: number, mode: string) => {
    const emissionsForWalking = calculateEmissions(distanceInMeters, 'walking');
    const emissionsForCycling = calculateEmissions(distanceInMeters, 'cycling');
    const emissionsForCar = calculateEmissions(distanceInMeters, 'car');
    const emissionsForPublicTransport = calculateEmissions(distanceInMeters, 'publicTransport');
    const emissionsForFlight = calculateEmissions(distanceInMeters, 'flight');

    // CO2 savings are calculated as emissions from other modes - walking/cycling emissions
    if (mode === 'walking') {
      return {
        carSavings: emissionsForCar - emissionsForWalking,
        bikeSavings: emissionsForCycling - emissionsForWalking,
        publicTransportSavings: emissionsForPublicTransport - emissionsForWalking,
        flightSavings: emissionsForFlight - emissionsForWalking,
      };
    } else if (mode === 'cycling') {
      return {
        carSavings: emissionsForCar - emissionsForCycling,
        walkingSavings: emissionsForWalking - emissionsForCycling,
        flightSavings: emissionsForFlight - emissionsForCycling,
      };
    }
    return {};
  };

  // Display the CO2 savings based on alternative modes (conditionally based on walking or cycling mode)
  const getCO2SavingsCards = () => {
    const savings = calculateCO2Savings(distance, mode);

    return (
      <div className="mt-4 grid grid-cols-2 gap-4">
        {mode === 'walking' && (
          <>
            <div className="p-4 border rounded-lg bg-blue-100 text-center">
              <h4 className="font-bold">Walking vs Car</h4>
              <p className="text-xl">{savings.carSavings.toFixed(2)} grams CO2 saved</p>
            </div>
            
            <div className="p-4 border rounded-lg bg-yellow-100 text-center">
              <h4 className="font-bold">Walking vs Public Transport</h4>
              <p className="text-xl">{savings.publicTransportSavings.toFixed(2)} grams CO2 saved</p>
            </div>
            <div className="p-4 border rounded-lg bg-indigo-100 text-center">
              <h4 className="font-bold">Walking vs Flight</h4>
              <p className="text-xl">{savings.flightSavings.toFixed(2)} grams CO2 saved</p>
            </div>
          </>
        )}

        {mode === 'cycling' && (
          <>
            <div className="p-4 border rounded-lg bg-green-100 text-center">
              <h4 className="font-bold">Cycling vs Car</h4>
              <p className="text-xl">{savings.carSavings.toFixed(2)} grams CO2 saved</p>
            </div>
          
            <div className="p-4 border rounded-lg bg-indigo-100 text-center">
              <h4 className="font-bold">Cycling vs Flight</h4>
              <p className="text-xl">{savings.flightSavings.toFixed(2)} grams CO2 saved</p>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-bold">Walking Tracker</h3>

      {error && <p className="text-red-500">{error}</p>} {/* Display error if any */}

      <p className="text-lg">Current Distance: {distance.toFixed(2)} meters</p>
      <p className="text-lg mt-2">Points Earned: {points}</p> {/* Display points earned */}

      <p className="text-sm mt-2">
        {latitude && longitude
          ? `Latitude: ${latitude.toFixed(4)}, Longitude: ${longitude.toFixed(4)}`
          : "Fetching location..."}
      </p>

      {/* Mode Selection for walking or cycling */}
      <div className="mt-4">
        <button
          onClick={() => setMode('walking')}
          className={`px-4 py-2 rounded ${mode === 'walking' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Walking
        </button>
        <button
          onClick={() => setMode('cycling')}
          className={`px-4 py-2 rounded ${mode === 'cycling' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Cycling
        </button>
      </div>

      {/* Start and Stop Tracking Buttons */}
      <div className="mt-4">
        {!tracking ? (
          <button onClick={startTracking} className="px-4 py-2 bg-green-500 text-white rounded">
            Start Tracking
          </button>
        ) : (
          <button onClick={stopTracking} className="px-4 py-2 bg-red-500 text-white rounded">
            Stop Tracking
          </button>
        )}
      </div>

      {/* Display CO2 Savings */}
      {getCO2SavingsCards()}
    </div>
  );
};

export default WalkingTracker;
