"use client"
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '../data/nav';




export const Header = () => {



 
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
          /></Link>
       </div >
        
          <div className='flex justify-center items-center mt-4 sm:mt-0 w-full sm:w-auto mb-4'>
            <form >
          <input
            className="rounded-md p-1 pl-4 mt-6 mr-6 text-center text-brown outline-main bg-ligth mx:auto"
            type="text"
            placeholder="Pesquisar "
      
          />
        </form>
        </div>
      </div>
      <nav className="bg-main">
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
    </header>
  );
};
