import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="grid grid-cols-3 justify-items-center my-4 bg-slate-800 text-white text-sm  py-9 px-[5%] gap-3 text-justify">
      <div>
        <h1 className="font-bold">e-SHOP</h1>
        <p className="text-slate-300">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, enim,
          ratione aspernatur voluptatum incidunt dolore mollitia
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold">Quick Links</h1>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div>
        <h1 className="font-bold">Follow Us</h1>
        <div className="flex justify-center items-center gap-2 text-2xl">
          <FaFacebook />
          <FaInstagramSquare />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
};

export default Footer;
