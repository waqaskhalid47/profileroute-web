import React from "react";
interface SectionThreeProps {}

function SectionThree(props: SectionThreeProps) {
  return (
    <div className="md:h-[400px] h-[600px] my-16 md:mt-24 max-w-screen-xl flex justify-between items-center mx-auto flex-col px-4">
      <h2 className="text-4xl font-semibold text-[#389DDB]">
        How to create your portfolio landing page
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 w-full md:h-[300px] h-[500px] gap-8 justify-items-center items-center">
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-2xl font-bold">Register / Sign In</h2>
          <p className="max-w-[200px] text-center mt-2 font-thin text-sm">
            Register/signin to create an account
          </p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-2xl font-bold">Add your details</h2>
          <p className="max-w-[200px] text-center mt-2 font-thin text-sm">
            Add your contact, experience and skills details that should be on
            you porfolio page
          </p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-2xl font-bold">Choose Layout</h2>
          <p className="max-w-[200px] text-center mt-2 font-thin text-sm">
            Choose layout of your choice from our available themes
          </p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-2xl font-bold">View Landing page</h2>
          <p className="max-w-[200px] text-center mt-2 font-thin text-sm">
            Choose layout of your choice from our available themes
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
