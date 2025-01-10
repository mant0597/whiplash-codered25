import React from 'react';
import { Play, Clock, BookOpen } from 'lucide-react';

const courseData = [
  {
    title: "Introduction to Climate Change",
    description: "Learn the basics of climate science and global warming.",
    duration: "2 hours",
    lessons: 8,
    image: "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Sustainable Living 101",
    description: "Practical tips for reducing your environmental impact.",
    duration: "3 hours",
    lessons: 12,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Renewable Energy Fundamentals",
    description: "Explore different types of renewable energy sources.",
    duration: "4 hours",
    lessons: 15,
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export default function Courses() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-green-600">Environmental Education Courses</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courseData.map((course, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span>{course.lessons} lessons</span>
                </div>
              </div>
              
              <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors">
                <Play className="h-4 w-4 mr-2" />
                Start Learning
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}