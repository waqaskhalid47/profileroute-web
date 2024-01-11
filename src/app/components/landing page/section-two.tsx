import React from "react";
interface SectionTwoProps {}

function SectionTwo(props: SectionTwoProps) {
  return (
    <div className="md:h-[250px] h-[350px] mt-5 md:mt-10 max-w-screen-xl flex justify-between items-center mx-auto flex-col px-4">
      <h2 className="text-4xl font-semibold text-[#389DDB]">
        A FREE WAY TO CREATE YOUR ONLINE PRESENCE
      </h2>
      <p className="text-sm max-w-xl font-thin">
        Welcome to the Profile Route! This is the gateway to a curated showcase
        of skills and experiences to the world. A free way to create a stunning
        landing page that represent your portfolio and will be hosted on our
        site that you can visit and share with recruiters and companies
      </p>
      <button className="bg-[#389DDB] bg-white p-2 text-[#389DDB] w-[200px] hover:bg-[#389DDB] hover:text-white border">
        Learn More
      </button>
    </div>
  );
}

export default SectionTwo;
