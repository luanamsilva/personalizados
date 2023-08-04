'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '../data/nav';


export const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const handleShowMenu = () =>{
    setShowMenu(!showMenu)
  }
  return (
    <header>
      <div className="flex justify-between flex-wrap sm:w-full">
        <div>
          <Link href={'/'}>
            <Image
              className="m-3 ml-28"
              src="/images/logo.jpeg"
              width={90}
              height={90}
              alt="logo"
            />
          </Link>
        </div>


        <div className="flex justify-center items-center mt-4 sm:mt-0 w-full sm:w-auto mb-4"></div>
      </div>
      <nav className={`bg-main ${showMenu ? 'block' : 'hidden'} md:block`}>
        <ul className="flex text-white text-md flex-col items-center sm:flex-row sm:justify-center sm:items-center p-3 gap-10 ">
          <li className="text-white text-md hover:text-gray-200">
            <Link href="/">Página Inicial</Link>
          </li>
          {navLinks.map((link, index) => (
            <li className="hover:text-gray-200" key={index}>
              <Link href={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="bg-main flex justify-end  md:hidden">
        <button
          id="menuButton"
          type="button"
          className="inline-flex items-center justify-center rounded-md p-1 pr-4 text-rose hover:text-gray-300 transition duration-150 ease-in-out"
          aria-label="Menu"
          aria-expanded="false"
          onClick={handleShowMenu}
        >
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h15M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      
      </div>
    </header>
  );
};
