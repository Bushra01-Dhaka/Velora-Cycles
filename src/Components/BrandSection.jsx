import React from "react";

const BrandSection = () => {
  return (
    <div className="flex justify-center font-outfits bg-success text-info min-h-screen py-20 px-10 lg:px-20">
      <div>
        <div className="text-center ">
          <h2 className="text-4xl text-primary lg:text-5xl font-bold font-outfit">
            Trusted by Riders Worldwide
          </h2>
          <p className="py-4 lg:text-lg lg:max-w-[70%] mx-auto">
            We partner with the world's most respected cycling brands to ensure exceptional quality, performance, and reliability for every rider.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
