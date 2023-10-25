import { useContext, useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import axios from 'axios';
export default function Header(){
  const {user} = useContext(UserContext);
  
  window.addEventListener("scroll", function() {
    const navbar = document.querySelector("#head");
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 0) {
      navbar.classList.add("head-scrolled");
    } else {
      navbar.classList.remove("head-scrolled");
    }
  });
  

  return (
    <div class="header">
      <header id="head" className={'flex px-5 justify-between rounded-sm fixed'}>
      <Link to={'/'} className="flex items-center px-8 gap-1">
        <span className="font-bold text-white text-4xl">InSpace</span>
      </Link>
      <div className='inline-flex'>
        <div className='m-2 text-xl text-white'>
          {user? null : <Link to={'/login'} >Login</Link>}
        </div>
        <div className='m-2 text-xl text-white'>
          {user? null : <Link to={'/register'} >register</Link>}
        </div>
      <Link to={user?'/account':'/login'} className="flex mx-8 my-0 px-4 bg-pink-400 items-center gap-2 border border-gray-300 rounded-full py-2 ">
        
        <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
          </svg>
        </div>
        {!!user && (
          <div>
            {user.name}
          </div>
        )}
      </Link></div>
    </header>
    </div>
    )
}