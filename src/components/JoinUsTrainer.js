import React from 'react';
import { Link } from 'react-router-dom';

const JoinUsTrainer = () => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-8 rounded-lg shadow-md mt-5">
      {/* Text Section */}
      <div className="flex-1 pr-4">
        <h1 className="text-4xl font-bold mb-4">Register as Trainer</h1>
        <p className="text-gray-700 mb-4">
         "Do consectetur proident proident id eiusmod deserunt
consequat pariatur ad ex velit do Lorem reprehenderit.
        </p>
        <Link to="/registrationTrainer" className="bg-violet-500 hover:bg-violet-700 text-white px-4 py-2 rounded-md">
          Join Us
        </Link>
      </div>
      {/* Image Section */}
      <div className="flex-1 pl-4">
        <img src="/images/Image 40.jpg" alt="Community" className="w-full h-auto rounded-lg" />
      </div>
    </div>
  );
};

export default JoinUsTrainer;
