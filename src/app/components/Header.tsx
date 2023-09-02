'use client'

import { useState } from "react";
import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

export const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  function handleMenu(){
    setIsMenuVisible(!isMenuVisible);
  }

  return (
    <div>
    <nav className="flex items-center justify-between">
      <div>
        <div className="flex font-bold md:text-4xl text-xl">
          <p className="text-black-main">Food</p>
          <p className="text-red-main">JP</p>
        </div>
      </div>

      <div className="hidden md:block">
        <ul className="flex space-x-16 text-black-main font-medium md:text-2xl">
          <li>
            <Link href="/">
              <h3 className="hover:text-gray-light">Início</h3>
            </Link>
          </li>
          <li>
            <Link href="/">
              <h3 className="hover:text-gray-light">Cardápio</h3>
            </Link>
          </li>
          <li>
            <Link href="/">
              <h3 className="hover:text-gray-light">Sobre</h3>
            </Link>
          </li>
        </ul>
      </div>

      <div className="md:hidden">
        <button onClick={() => handleMenu()}>
          <AiOutlineMenu size={24}/>
        </button>
      </div>

      
    </nav>
    <div className={`mt-4 ${isMenuVisible ? 'block':'hidden'}`}>
      <ul className="text-black-main font-medium md:text-2xl">
          <li>
            <Link href="/">
              <h3 className="hover:text-gray-light mt-2">Início</h3>
            </Link>
          </li>
          <li>
            <Link href="/">
              <h3 className="hover:text-gray-light mt-2">Cardápio</h3>
            </Link>
          </li>
          <li>
            <Link href="/">
              <h3 className="hover:text-gray-light mt-2">Sobre</h3>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
