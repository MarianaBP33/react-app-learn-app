import React, { useState } from 'react';

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username.trim() || !password.trim()) {
            setError("Please fill in all fields");
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setUsername('');
            setPassword('');
        }, 2000);
    }
    return (
        <div>
            <h1 className="text-4xl font-bold">Sign In</h1>
            <p className='font-medium text-md text-gray-500 mt-4' >Welcome Back</p>
            <div className='mt-8'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='text-lg font-medium'>Username</label>
                        <input
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-gray-100'
                            placeholder='Enter email'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}></input>
                    </div>
                    <div>
                        <label className='text-lg font-medium'>Password</label>
                        <input
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-gray-100'
                            placeholder='Enter password'
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    {error && <p className='text-red-500 text-.sm mt2'> {error}</p>}
                    <div className='mt-8 flex items-center justify-center'>
                        <button
                            className={`${
                                loading ? 'opacity-50 cursor-not-allowed' : 'active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] easy-in-out'
                            } bg-violet-500 text-white py-3 rounded-xl text-lg font-bold w-full`}
                            disabled={loading}
                        >
                            {loading ? 'Signing In...' : 'Sign In'}
                        </button>
                    </div>
                </form>
                <div className='mt-8 flex items-center justify-center'>
                    <label>or</label>
                </div>
                <div className='mt-4 flex justify-between items-center p-4'>
                    <label>Don't have an account?</label>
                    <button className='font-medium text-base text-violet-500'>Sign Up</button>
                </div>
            </div>
        </div>
    )
}