import React from "react";
import img1 from "/public/img1.jpeg";
import img2 from "/public/img2.jpeg";

const images = [img1, img2];

const Header = ({ title, image, type }) => {
  return (
    <div className="w-full h-[100vh]">
      <div className="realtive w-full h-full">
        <img
          src={image ?? images[Math.floor(Math.random() * images.length)]}
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center">{title}</h1>
        {type && (
          <p className="text-sm mt-4 text-center bg-[#00000090] px-6 py-4">
            Welcome to WorldFlavor, your passport to culinary adventures!{" "}
            <br className="hidden md:block" /> Discover a treasure trove of
            delectable recipes from around the globe.
          </p>
        )}
      </div>
    </div>
  );
};

export default Header;
