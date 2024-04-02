import React from "react";
import { Link } from "react-router-dom";

const EditMyProfileStudent = () => {
    return (
        <div className="w-full text-center mb-8">
        <h1 className="text-4xl font-bold">My Account</h1>
        <div className="flex items-center justify-center w-full">
        <div className="flex-1 text-left ml-5">
            <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
            <div className="mb-4 flex items-center">
                <img src="/images/Avatar 6.jpg" alt="Profile" className="h-8 mr-4" style={{ width: '100px', height: '100px' }} />
                <div className="text-left">
                    <div className="mb-1">
                                <label className="font-bold">Upload your photo</label>
                                <p>Your photo should be in PNG or JPG format</p>
                    </div>
                    <div className="flex items-center">
                                <button className="text-violet-500 border-violet-500 p-2 border-2">Choose image</button>
                                <button className="ml-4 text-gray-600">Remove</button>
                    </div>
                </div>
                </div>
                    <div className="mb-4 py-2">
                    <div className="mt-2 flex flex-col">
                            <label className="font-bold">First Name</label>
                            <input placeholder="Mariana" />
                        </div>
                        <div className="mt-2 flex flex-col">
                            <label className="font-bold">Last Name</label>
                            <input placeholder="Bojorquez" />
                        </div>
                    <div className="mt-2 flex flex-col">
                            <label className="font-bold">Username</label>
                            <input placeholder="Mariana.bojorquez" />
                        </div>
                    <div className="mt-2 flex flex-col">
                            <label className="font-bold">Date of birth</label>
                            <input placeholder="11.10.2001" />
                        </div>
                     <div className="mt-2 flex flex-col">
                            <label className="font-bold">Address</label>
                            <input placeholder="Somewhere ..." />
                        </div>
                    <div className="mt-2 flex flex-col">
                            <label className="font-bold">Email</label>
                            <input placeholder="Mariana.b@gmail.com" />
                        </div>
                        <div className="flex mt-4">
                            <Link to="/myAccountStudent"className="bg-green-500 hover:bg-green-600 text-white mr-3 px-4 py-2 rounded-md">Save Profile</Link>
                        </div>
                    </div>
                 </div>
        {/* My Trainers */}
        <div className="flex-1">
            <h2 className="ml-8">My Trainers</h2>
        </div>
        </div>

        </div>


    );
}

export default EditMyProfileStudent;