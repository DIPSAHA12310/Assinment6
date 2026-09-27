import React from 'react';
import logo from "../assets/logo-text.png"
const Nav = () => {
    return (
       
             <nav className=" container mx-auto px-8 flex justify-between bg-amber-50 ">
        <img src={logo}alt="" />
     

      <ul className="flex gap-4 justify-center pt-5 font-bold">
        <li className='text-red-600'>
          Home 
        </li>
        <li>
          Technologies
        </li>
        <li>
          Project
        </li>
        <li>
          About
        </li>
        <li>
          Contact
        </li>
      </ul>


      <ul className="flex justify-end pt-5 gap-2">
        <button className=" btn btn-active bg-amber-50">Sign In</button>
        <button className="btn btn-secondary">Sign Up</button>

      </ul>

       </nav>
       
    );
};

export default Nav;