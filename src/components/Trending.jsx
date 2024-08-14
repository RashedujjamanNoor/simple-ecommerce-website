import women from "../assets/images/womens.svg";
import men from "../assets/images/men.svg";
import { Link } from "react-router-dom";

const Trending = () => {
  const items = [
    {
      img: women,
      title: "WOMEN",
    },
    {
      img: men,
      title: "MEN",
    },
    {
      img: women,
      title: "MEN",
    },
    {
      img: women,
      title: "WOMEN",
    },
    {
      img: men,
      title: "MEN",
    },
    {
      img: women,
      title: "MEN",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center my-3 gap-2">
      <h1 className="font-bold text-gray-800 border-b-2">Trending</h1>
      <div className="flex justify-evenly items-center gap-5">
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
      </div>
    </div>
  );
};

export default Trending;
