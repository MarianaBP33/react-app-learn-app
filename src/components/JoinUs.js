import React from "react";
import JoinUsStudent from "./JoinUsStudent";
import JoinUsTrainer from "./JoinUsTrainer";

const JoinUs = ({ title, image }) => {
    return (
        <div className="flex flex-col items-center justify-between bg-gray-100 p-8 rounded-lg shadow-md">
            <h1 className="font-bold text-3xl">Join Us</h1>
            <JoinUsStudent />
            <JoinUsTrainer />
        </div>
    );
}
    
export default JoinUs;