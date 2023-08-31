import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <nav className="flex items-center justify-between">
      <div>
        <span className="flex font-bold md:text-4xl text-xl">
          <p className="text-black-main">Food</p>
          <p className="text-red-main">JP</p>
        </span>
      </div>

      <div>
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
    </nav>
  );
};
