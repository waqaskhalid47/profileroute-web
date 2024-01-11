import Image from "next/image";
import React, { FC } from "react";

interface SectionOneProps {
  title?: string;
}

function SectionOne({ title, ...rest }: SectionOneProps) {
  return (
    <div className="py-20 p-4 max-w-screen-xl flex justify-between items-center mx-auto  flex-col md:flex-row">
      <div className="md:w-[50%] flex flex-col justify-between">
        <h2 className="text-4xl font-semibold">
          Create Your Portfolio Website With Our Ready Layouts
        </h2>
        <p className="text-sm my-4 pr-4 font-thin">
          Profile Route Provide an easy way to show your profile to world with
          dedicated landing page describing your true skills and work.
        </p>
        <button className="bg-[#389DDB] p-2 px-4 my-4 text-white w-[250px]">
          CREATE PORTFOLIO PAGE
        </button>
        <div>
          <ul class="flex">
            <li class="mx-2">1</li>
            <li class="mx-2">2</li>
            <li class="mx-2">3</li>
          </ul>
        </div>
      </div>
      <div className="md:w-[50%]">
        <Image
          className="w-full h-full"
          width={400}
          height={300}
          src={"/images/landing page/section-one-1.png"}
          alt=""
        />
      </div>
    </div>
  );
}

export default SectionOne;
