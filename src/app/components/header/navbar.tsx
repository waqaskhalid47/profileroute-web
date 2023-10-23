"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const menu = [
    <a
      key={1}
      href="#"
      className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
      aria-current="page"
    >
      Login/Register
    </a>,
  ];

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            width={170}
            height={140}
            className="h-8 mr-3"
            alt="Profile Route Logo"
          />
        </a>
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main mobileMenu</span>
          {!mobileMenu ? (
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#e2e2e2"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          )}
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          {menu.map((item, index) => (
            <ul
              key={index}
              className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            >
              <li>{item}</li>
            </ul>
          ))}
        </div>
        <div
          className={
            !mobileMenu
              ? "md:hidden absolute top-[71px] right-0 left-[-100%] flex justify-center pt-2 p-1 items-start w-full h-screen bg-slate-800 text-white text-center ease-in duration-300"
              : "md:hidden absolute top-[71px] right-0 bottom-0 left-0 flex justify-center pt-2 p-1 items-start w-full h-screen bg-slate-800 text-white ease-in duration-300"
          }
        >
          {menu.map((item, index) => (
            <ul
              key={index}
              className="font-medium w-[100%] flex flex-col p-1 md:p-0 mt-1 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            >
              <li>{item}</li>
            </ul>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
