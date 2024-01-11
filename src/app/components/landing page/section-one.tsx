import Image from "next/image";
import React, { FC } from "react";

interface SectionOneProps {
  title?: string;
}

function SectionOne({ title, ...rest }: SectionOneProps) {
  return (
    <div className="py-14 md:py-20 p-4 max-w-screen-xl flex justify-between items-center mx-auto  flex-col md:flex-row">
      <div className="md:w-[50%] flex flex-col justify-between">
        <h2 className="text-4xl font-semibold">
          Create Your Portfolio Website With Our Ready Layouts
        </h2>
        <p className="text-sm my-4 pr-4 font-thin">
          Profile Route Provide an easy way to show your profile to world with
          dedicated landing page describing your true skills and work.
        </p>
        <button className="bg-[#389DDB] p-2 px-4 my-4 text-white w-[250px] hover:bg-white hover:text-[#389DDB]">
          CREATE PORTFOLIO PAGE
        </button>
        <div className="my-3">
          <ul className="flex flex-wrap">
            <li className="mx-2 my-2 flex items-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 9C0 6.61305 0.948212 4.32387 2.63604 2.63604C4.32387 0.948212 6.61305 0 9 0C11.3869 0 13.6761 0.948212 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948212 13.6761 0 11.3869 0 9ZM8.4864 12.852L13.668 6.3744L12.732 5.6256L8.3136 11.1468L5.184 8.5392L4.416 9.4608L8.4864 12.8532V12.852Z"
                  fill="#389DDB"
                />
              </svg>
              <span className="text-sm ms-2 pr-4 font-bold">
                Ready layouts
              </span>
            </li>
            <li className="mx-2 my-2 flex items-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 9C0 6.61305 0.948212 4.32387 2.63604 2.63604C4.32387 0.948212 6.61305 0 9 0C11.3869 0 13.6761 0.948212 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948212 13.6761 0 11.3869 0 9ZM8.4864 12.852L13.668 6.3744L12.732 5.6256L8.3136 11.1468L5.184 8.5392L4.416 9.4608L8.4864 12.8532V12.852Z"
                  fill="#389DDB"
                />
              </svg>
              <span className="text-sm ms-2 pr-4 font-bold">
                Easy to use
              </span>
            </li>
            <li className="mx-2 my-2 flex items-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 9C0 6.61305 0.948212 4.32387 2.63604 2.63604C4.32387 0.948212 6.61305 0 9 0C11.3869 0 13.6761 0.948212 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948212 13.6761 0 11.3869 0 9ZM8.4864 12.852L13.668 6.3744L12.732 5.6256L8.3136 11.1468L5.184 8.5392L4.416 9.4608L8.4864 12.8532V12.852Z"
                  fill="#389DDB"
                />
              </svg>
              <span className="text-sm ms-2 pr-4 font-bold">
                Higher Reach
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:w-[50%]">
        <Image
          className="w-full h-full"
          width={400}
          height={300}
          src={"/images/section-one-1.png"}
          alt=""
        />
      </div>
    </div>
  );
}

export default SectionOne;
