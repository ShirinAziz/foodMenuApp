import React, { useState } from "react";
import Logo from "/public/Logo.jpeg";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full bg-black relative z-10">
      <div className="mx-auto w-full flex justify-between items-center p-4">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 text-lg cursor-pointer"
        >
          <img
            src={Logo}
            alt="Logo"
            className="hidden md:block w-8 h-8 lg:w-14 lg:h-14"
          />
          <p>
            World<span className="text-green-500 text-xl">Flavors</span>
          </p>
        </Link>

        <ul className="hidden md:flex gap-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipes">Explore</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
        <Button
          title="Sign in"
          containerStyle="hidden md:block
        bg-transparent border border-beige
        hover:bg-beige hover:text-slate-700 
        rounded-full min-w-[130px]"
        />
        <button
          className="block md:hidden text-x1"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <AiOutlineClose /> : <HiMenuAlt3 />}
        </button>
      </div>

      <div
        className={`${
          open ? "flex" : "hidden"
        } bg-black flex-col w-full px-4 pt-16 pb-10 gap-6 text-[14px]`}
      >
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </div>
  );
};

export default Navbar;
