import React from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className=" bg-slate-200">
      <div className="mx-[5%] flex justify-between">
        <div className="flex justify-center items-center font-bold md:text-3xl">
          <Link to="/">e-SHOP</Link>
        </div>
        <div className="flex justify-center items-center border-red-200 border-2 my-2 p-1 bg-white rounded-md">
          <form>
            <input
              type="text"
              placeholder="Search Product"
              className="outline-none p-1 font-bold text-sm text-slate-700"
            />
          </form>
          <IoSearch className="text-xl cursor-pointer" />
        </div>
        <div className="flex justify-center items-center gap-2">
          <Link>
            <IoCartOutline className="text-2xl font-bold" />
          </Link>
          <button className="font-semibold">LogIn | Register</button>
        </div>
      </div>
      <div className="flex justify-center items-center gap-6 p-2 font-bold  text-slate-800">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
