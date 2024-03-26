import React from "react";

const Box = ({ tag, title, image }) => {
    return (
        <div className="flex flex-col bg-gray-100 p-8 rounded-lg shadow-md">
            {/* Image Section */}
            <div className="mb-4">
                <img src={image} alt="Community" className="w-full h-auto rounded-lg" />
            </div>
            {/* Text Section */}
            <div>
                <p className="text-violet-500 font-bold">{tag}</p>
                <h1 className="text-4xl font-bold mb-4">{title}</h1>
                <div className="flex justify-between">
                <p>Dec 24, 2022</p>
                <button className="bg-gray-300 text-black px-4 py-2 rounded-md">
                    5 mins to read
                </button>
                </div>
            </div>
            </div>


    );
}

export default Box;