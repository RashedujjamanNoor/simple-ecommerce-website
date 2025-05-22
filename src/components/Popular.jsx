// import women from "../assets/images/womens.svg";
// import men from "../assets/images/men.svg";
// import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { IoStarHalf } from "react-icons/io5";
import { IoIosBasket } from "react-icons/io";
import { add } from "../feature/cartSlice";
import { Link } from "react-router-dom";

const Popular = () => {
  const [data, setData] = useState();
  const fetchData = async () => {
    await fetch("https://dummyjson.com/recipes?limit=10&skip=0")
      .then((res) => res.json())
      .then((data) => setData(data.recipes))
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(add(item));
  };

  return (
    <div className="flex flex-col justify-center items-center my-3 gap-2">
      <h1 className="font-bold text-2xl md:text-4xl mt-8 text-gray-800 border-b-2">Popular Recipes</h1>
      {/* <div className="flex flex-col justify-evenly items-center gap-5">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative hover:scale-105 duration-100 cursor-pointer"
          >
            <Link to="#">
              <img src={item.img} alt="" className="w-62" />
              <div className="absolute top-1/2 left-3 font-bold text-white">
                {item.title}
              </div>
            </Link>
          </div>
        ))}
      </div> */}
      <div className="grid grid-cols-1 gap-3 justify-items-center md:grid-cols-5">
              {data &&
                data.map((item, index) => (
                  <div
                    key={index}
                    className="shadow-md rounded-lg p-4 bg-slate-200 m-2"
                  >
                    <div>
                      <img
                        src={item.image}
                        alt=""
                        className="w-72 h-72 object-cover"
                      />
                      <div className="flex justify-between items-center mt-2 font-bold">
                        <div>
                          <h1>Price: $ {item.reviewCount}</h1>
                          <h1>{item.name} </h1>
                          <div className="flex  justify-start items-center font-bold">
                            <IoStarHalf className="text-red-400" />
                            <IoStarHalf className="text-red-400" />
                            <IoStarHalf className="text-red-400" />
                            <IoStarHalf className="text-red-400" />
                            <IoStarHalf className="text-red-400" />
                            <h1 className="ml-1">{item.rating}</h1>
                          </div>
                        </div>
                        <div>
                          <button
                            className="text-white text-xl bg-blue-600 py-2 px-4 rounded-lg hover:scale-105 duration-150"
                            onClick={() => handleAddToCart(item)}
                          >
                            <IoIosBasket />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
       <div >
        <button className="text-white text-xl bg-blue-600 py-2 px-4 rounded-lg hover:scale-105 duration-150"><Link to="food">More...</Link></button>
        </div>      
    </div>
  );
};

export default Popular;
