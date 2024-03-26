import React from "react";

const MyAccountStudent = () => {
    return (
        <div className="w-full text-center mb-8">
        <h1 className="text-4xl font-bold">My Account</h1>
        <div className="flex items-center justify-center w-full">
        <div className="flex-1 text-left ml-5">
            <h2 className="text-2xl font-bold mb-4">My Profile</h2>
            <div className="mb-4 flex items-center">
                <img src="/images/Avatar 6.jpg" alt="Profile" className="h-8 mr-4" style={{ width: '100px', height: '100px' }} />
                <div className="text-left">
                    <div className="mb-1">
                    <label className="font-bold">Status</label>
                    </div>
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </svg>
                    <label className="text-green-500">Active</label>
                    </div>
                </div>
                </div>
            <div className="mb-4 py-2 ">
            <div className="mt-2">
                <label className="font-bold">First Name</label>
                <p>Mariana</p>
            </div>
            <div className="mt-2">
                <label className="font-bold">Last Name</label>
                <p>Bojorquez</p>
            </div>
            <div className="mt-2">
                <label className="font-bold">Username</label>
                <p>Mariana.Bojorquez</p>
            </div>
            <div className="mt-2">
                <label className="font-bold">Date of birth</label>
                <p>11.10.2001</p>
            </div>
            <div className="mt-2">
                <label className="font-bold">Address</label>
                <p>Street 122, somewhere Mexico</p>
            </div>
            <div className="mt-2">
                <label className="font-bold">Email</label>
                <p>mariana.b@example.com</p>
            </div>
                    </div>
                    <div className="flex">
                        <button className="bg-violet-500 hover:bg-violet-600 text-white mr-3 px-4 py-2 rounded-md">Edit Profile</button>
                        <button className="bg-teal-500 hover:bg-teal-600 text-white ml-3 px-4 py-2 rounded-md">Change Password</button>
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

export default MyAccountStudent;