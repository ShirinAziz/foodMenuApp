import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Button from "./Button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-20 bg_gradient">
      <div className="container mx-auto px-20 lg:px-20 py-20 flex flex-col gap-10 md:flex-row justify-between border-t border-slate-800">
        <div className="flex">
          <p className="font-bold text-center">
            World<span className="text-green-500 text-xl">Flavors</span>
          </p>
        </div>

        <div className="">
          <p>QUICK LINKS</p>
          <div className="flex flex-col text-start mb:4 md:mb-0">
            <Link
              to="/"
              className="block md:inline-block py-2 hover:inline-block"
            >
              Home
            </Link>
            <Link
              to="/"
              className="block md:inline-block py-2 hover:inline-block"
            >
              About
            </Link>
            <Link
              to="/"
              className="block md:inline-block py-2 hover:inline-block"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <p>SOCIAL MEDIA</p>
          <div className="flex mt-4 gap-3">
            <Link
              to="/"
              className="bg-blue-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110"
            >
              <FaFacebook size={18} />
            </Link>

            <Link
              to="/"
              className="bg-pink-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110"
            >
              <FaInstagram size={18} />
            </Link>
            <Link
              to="/"
              className="bg-blue-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110"
            >
              <FaTwitter size={18} />
            </Link>
            <Link
              to="/"
              className="bg-red-600 p-1.5 rounded-sm text-white hover:scale-110"
            >
              <FaYoutube size={18} />
            </Link>
          </div>

          <Button
            title="Sign up"
            btnType="button"
            containerStyle="mt-10 
          md:block bg-transparent 
          border border-beige 
          hover:bg-beige 
          hover:text-slate-700 
          rounded-md min-w-[130px]"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
