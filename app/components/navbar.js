"use client"
import Link from 'next/link';
import Image from 'next/image';
import logo from "../../public/logo.png";
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className='w-screen flex justify-around items-center'>
      <Link className='flex lg:hidden justify-center' href="/"><Image src={logo} alt='Logo' width={200} height={200}/></Link>
      <ul className={`hidden lg:flex w-full h-auto z-50 justify-evenly items-center lg:static top-0 left-0 lg:w-auto bg-white lg:bg-transparent transform lg:transform-none transition-transform duration-300 space-y-12 lg:space-y-0`}>
        <li className='lg:w-1/5 flex flex-col items-center'>
          <h1 className={`text-xl pt-3 font-Metropolis-Regular hover:text-blue-400 transition duration-500 lg:px-8 text-gray-500 flex justify-center mx-auto`}>
            <Link href="/">Carrosserie</Link>
          </h1>
          <span className='text-xs text-blue-500 font-bold animate-zoom'>Nouveau !</span>
        </li>
        <li className='lg:w-1/5'>
          <h1 className={`text-xl text-center font-Metropolis-Regular hover:text-blue-400 transition duration-500 px-6 text-gray-500 flex justify-center mx-auto`}>
            <Link href="/">Vidange BVA</Link>
          </h1>
        </li>
        <Link className='hidden lg:flex justify-center' href="/"><Image src={logo} alt='Logo' width={170} height={170}/></Link>
        <li className='lg:w-1/5' >
          <h1 className={`text-xl font-Metropolis-Regular hover:text-blue-400 transition duration-500 px-8 text-gray-500 flex justify-center mx-auto`}>
            <Link href="/">Climatisation</Link>
          </h1>
        </li>
        <li className='lg:w-1/5' >
          <h1 className={`text-xl font-Metropolis-Regular hover:text-blue-400 transition duration-500 px-8 text-gray-500 text-center flex justify-center mx-auto`}>
            <Link href="/">Pare-brise</Link>
          </h1>
        </li>
      </ul>
      <div className="lg:hidden flex flex-1 justify-end">
        <button onClick={toggleMenu} className="hover:text-mustard focus:outline-none">
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>
      <div
        className={`fixed z-50 top-0 right-0 h-full w-3/4 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        <div className="flex flex-col p-4">
          <button onClick={toggleMenu} className="self-end mb-4">
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
          <Link
            href="/"
            className="py-2 text-lg hover:text-blue-500 transition duration-300 ease-in-out"
            onClick={() => setIsOpen(false)}
          >
            Carrosserie
          </Link>
          <Link
            href="/"
            className="py-2 text-lg hover:text-blue-500 transition duration-300 ease-in-out"
            onClick={() => setIsOpen(false)}
          >
            Vidange BVA
          </Link>
          <Link
            href="/"
            className="py-2 text-lg hover:text-blue-500 transition duration-300 ease-in-out"
            onClick={() => setIsOpen(false)}
          >
            Climatisation
          </Link>
          <Link
            href="/"
            className="py-2 text-lg hover:text-blue-500 transition duration-300 ease-in-out"
            onClick={() => setIsOpen(false)}
          >
            Pare-brise
          </Link>
          <Link
            href="https://lj.reservio.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="py-2 text-lg text-center bg-blue-500 text-white transition duration-300 ease-in-out text-cool rounded-full px-4 hover:scale-105"
            onClick={() => setIsOpen(false)}
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </nav>
  );
}