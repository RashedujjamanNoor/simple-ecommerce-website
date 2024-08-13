import { useEffect, useState } from "react";
import { IoStarHalf } from "react-icons/io5";
import { IoIosBasket } from "react-icons/io";
import { useDispatch } from "react-redux";
import { add } from "../feature/cartSlice";

const Shop = () => {
  const [data, setData] = useState();
  const fetchData = async () => {
    await fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => setData(data.recipes))
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(add(item));
  };

  return (
    <div className="mx-[5%]">
      <div className="flex justify-center items-center text-xl md:text-4xl font-bold my-2 border-b-2 border-slate-500">
        <h1>Food Items</h1>
      </div>
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
    </div>
  );
};

export default Shop;
