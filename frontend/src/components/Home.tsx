import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center py-16 bg-gradient-to-b from-green-600 to-green-500 text-white rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Track Your Environmental Impact</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of people making a difference by understanding and reducing their carbon footprint.</p>
        <Link to="/carbon-tracker" className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition-colors">
          Start Tracking
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-green-600">Carbon Tracker</h2>
          <p className="text-gray-600 mb-4">Calculate and track your carbon footprint with our easy-to-use tools.</p>
          <Link to="/carbon-tracker" className="text-green-600 font-semibold hover:text-green-700">Learn more →</Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-green-600">Eco Quiz</h2>
          <p className="text-gray-600 mb-4">Test your environmental knowledge and learn new ways to help the planet.</p>
          <Link to="/eco-quiz" className="text-green-600 font-semibold hover:text-green-700">Take the quiz →</Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-green-600">Courses</h2>
          <p className="text-gray-600 mb-4">Explore our educational content about environmental sustainability.</p>
          <Link to="/courses" className="text-green-600 font-semibold hover:text-green-700">Browse courses →</Link>
        </div>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-600">Latest Environmental News</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Renewable Energy" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">The Rise of Renewable Energy</h3>
            <p className="text-gray-600">Latest developments in sustainable energy solutions and their impact on our environment.</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Ocean Conservation" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ocean Conservation Efforts</h3>
            <p className="text-gray-600">Global initiatives to protect marine life and reduce ocean pollution.</p>
          </div>
        </div>
      </section>
    </div>
  );
}