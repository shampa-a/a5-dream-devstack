//import React from 'react';
import logo from '../assets/logo-text.png';
const Navbar = () => { 
    return (
       <nav className="sticky top-0 z-50 bg-white flex flex-col md:flex-row justify-between">
        <img src={logo} alt="Hero" />

        <ul className="flex gap-4 items-center">
          <li className="text-red-300">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="flex gap-3 items-center">
      <button className="px-4 py-2 text-sm font-medium text-black hover:bg-gray-100">
  Sign In
</button>
         
  <button className="px-4 py-2 text-sm font-medium rounded-full bg-red-500 text-white hover:bg-red-600">
  Sign Up
</button>
        </div>
      </nav>
    );
};

export default Navbar;