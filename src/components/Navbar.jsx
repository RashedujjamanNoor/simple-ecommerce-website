import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";

const Navbar = () => {
  const totalItem = useSelector((state) => state.cart.totalItem);
  return (
    <div className=" bg-slate-200 sticky top-0 w-full ">
      <div className="mx-[5%] flex justify-between">
        <div className="flex justify-center items-center font-bold md:text-3xl">
          <Link to="/">e-FOOD</Link>
        </div>
        <div className="hidden sm:visible sm:flex justify-center items-center border-red-200 border-2 my-2 p-1 bg-white rounded-md">
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
          <div className="relative">
            <Link to="/cart">
              <IoCartOutline className="text-4xl font-bold" />
            </Link>
            <h1 className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1 text-sm">
              {totalItem}
            </h1>
          </div>
          <button className="font-semibold">LogIn | Register</button>
        </div>
      </div>
      <div className="flex justify-center items-center gap-6 p-2 font-bold  text-slate-800">
        <Link to="/">Home</Link>
        <Link to="/shop">Foods</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
