import React, { useState } from 'react';

export default function RegisterTrainer() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!firstName.trim() || !lastName.trim() || !email.trim() || !specialization.trim() ){
            setError("Please fill in all fields");
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setFirstName('');
            setEmail('');
            setSpecialization('');
        }, 2000);
    }
    return (
        <div className='flex flex-col justify-center h-fit ml-5 mb-5'>
            <h1 className="text-4xl font-bold">Registration</h1>
            <p className='font-medium text-md text-gray-500 mt-4' >Trainer</p>
               <div className='lg:flex lg:items-center lg:justify-between w-full mt-4'>
                <div className='lg:w-1/2'>
                    <img src="/images/registrationImage.jpg" alt="registration" style={{ width: '450px', height: '600px' }}  className="hidden lg:block w-full" />
                </div>
                <div className='mt-8 w-full lg:mt-0 lg:w-1/2 lg:pl-8 flex items-start justify-start'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className='text-lg font-medium'>First Name</label>
                            <input
                                className='w-full border-2 border-gray-200 rounded-xl p-4 mt-1 bg-transparent'
                                placeholder='Enter email'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}></input>
                        </div>
                        <div className='mt-2'>
                            <label className='text-lg font-medium'>Last Name</label>
                            <input
                                className='w-full border-2 border-gray-200 rounded-xl p-4 mt-1 bg-transparent'
                                placeholder='Enter email'
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}></input>
                        </div>
                        <div className='mt-2'>
                            <label className='text-lg font-medium'>Email</label>
                            <input
                                className='w-full border-2 border-gray-200 rounded-xl p-4 mt-1 bg-transparent'
                                placeholder='Enter email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                         <div className='mt-2'>
                            <label className='text-lg font-medium'>Specialization</label>
                            <select
                                className='w-full border-2 border-gray-200 rounded-xl p-4 mt-1 bg-transparent'
                                value={specialization}
                                onChange={(e) => setSpecialization(e.target.value)}>
                                <option>Please select</option>
                                <option value="yoga">Yoga</option>
                                <option value="fitness">Fitness</option>
                                <option value="zumba">Zumba</option>
                                <option value="pilates">Pilates</option>
                            </select>
                        </div>
                        {error && <p className='text-red-500 text-.sm mt2'> {error}</p>}
                        <div className='mt-8 flex items-center justify-center'>
                            <button
                                className={`${
                                    loading ? 'opacity-50 cursor-not-allowed' : 'active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] easy-in-out'
                                } bg-violet-500 text-white py-3 rounded-xl text-lg font-bold w-full`}
                                disabled={loading}
                            >
                                {loading ? 'Loading...' : 'Submit'}
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
    )
}