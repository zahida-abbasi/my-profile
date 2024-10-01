"use client";
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <nav>
      <ul className='bg-yellow-800 py-3'>
        <li className="text-white hover:bg-white hover:text-black rounded-full text-center md:inline-block my-2 md:my-0 mx-0 md:mx-4 py-3 px-6">
          <Link href="/">Home</Link>
        </li>
        <li className="text-white hover:bg-white hover:text-black rounded-full text-center md:inline-block my-2 md:my-0 mx-0 md:mx-4 py-3 px-6">
          <Link href="/about">About</Link>
        </li>
        <li className="text-white hover:bg-white hover:text-black rounded-full text-center md:inline-block my-2 md:my-0 mx-0 md:mx-4 py-3 px-6">
          <Link href="/contact">Contact</Link>
        </li>
        <li className="text-white hover:bg-white hover:text-black rounded-full text-center md:inline-block my-2 md:my-0 mx-0 md:mx-4 py-3 px-6">
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li className="text-white hover:bg-white hover:text-black rounded-full text-center md:inline-block my-2 md:my-0 mx-0 md:mx-4 py-3 px-6">
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
