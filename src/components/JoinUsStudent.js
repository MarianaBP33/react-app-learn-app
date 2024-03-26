import React from 'react';

const JoinUsStudent = () => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-8 rounded-lg shadow-md">
      {/* Text Section */}
      <div className="flex-1 pr-4">
        <h1 className="text-4xl font-bold mb-4">Register as Student</h1>
        <p className="text-gray-700 mb-4">
         "Do consectetur proident proident id eiusmod deserunt
consequat pariatur ad ex velit do Lorem reprehenderit.
        </p>
        <button className="bg-violet-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
          Join Us
        </button>
      </div>
      {/* Image Section */}
      <div className="flex-1 pl-4">
        <img src="/images/Image 41.jpg" alt="Community" className="w-full h-auto rounded-lg" />
      </div>
    </div>
  );
};

export default JoinUsStudent;
