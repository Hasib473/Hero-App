import React from 'react';
import logo from '../../assets/logo.png';
import { FaGithub } from "react-icons/fa";
import { NavLink } from 'react-router';


const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-8">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to="/">Home</NavLink></li>
        <li>
          <NavLink to="/product">Apps</NavLink>
        </li>
        <li><NavLink to="/install">Installation</NavLink></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl font-bold text-violet-600 uppercase"><img className='w-[50px]' src={logo} alt="" /> Hero.io</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to="/" className={({isActive})=> isActive? "text-violet-600  underline": 'text-black'}>Home</NavLink></li>
      <li>
        <NavLink to="/product" className={({isActive}) => isActive? 'text-violet-600 underline' : 'text-black'}>Apps</NavLink>
      </li>
      <li><NavLink to="/install" className={({isActive}) => isActive? 'text-violet-600 underline' : 'text-black'}   >Installation</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <NavLink to={'https://github.com/Hasib473'} className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"><FaGithub /> Contribute
</NavLink>
  </div>
</div>
            
        </div>
    );
};

export default Header;