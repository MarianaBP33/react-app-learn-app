import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white-100 text-gray shadow-lg">
      <div className="container mx-auto py-4 px-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/images/learn-logo.jpg" alt="Logo" className="h-8" />
          <nav className="hidden md:flex space-x-4 ml-4">
            <a href="/blog" className="hover:text-gray-200 text-gray-500 ml-4">Blog</a>
            <a href="/pricing" className="hover:text-gray-200 text-gray-500 ml-4">Pricing</a>
            <a href="/about" className="hover:text-gray-200 text-gray-500 ml-4">About Us</a>
          </nav>
        </div>
         <div className="md:hidden">
          <button
            className="focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M19.354 4.646a.5.5 0 010 .708L13.707 12l5.647 5.646a.5.5 0 11-.708.708L13 12.707 7.354 18.354a.5.5 0 11-.708-.708L12.293 12 6.646 6.354a.5.5 0 01.708-.708L13 11.293l5.646-5.647a.5.5 0 01.708 0z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M4 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
       <div className="md:hidden bg-white py-2 ml-4">
            <nav className="flex flex-col space-y-2">
                <div className="flex flex-col items-start space-y-1">
                <div className="flex items-center space-x-2">
                    <img src="/images/Avatar 25.jpg" alt="Avatar" className="h-8 rounded-full" />
                    <div>
                    <label className="text-sm font-bold">John Doe</label>
                    <label className="text-sm ml-4">John.Doe@gmail.com</label>
                    </div>
                </div>
                <a href="/blog" className="hover:text-violet-500 p-2">Blog</a>
                <a href="/pricing" className="hover:text-violet-500 p-2">Pricing</a>
                <a href="/about" className="hover:text-violet-500 p-2">About Us</a>
                <a href="/account" className="hover:text-violet-500 p-2">My Account</a>
                </div>
            </nav>
            </div>

      )}
    </header>
  );
};

export default Header;
