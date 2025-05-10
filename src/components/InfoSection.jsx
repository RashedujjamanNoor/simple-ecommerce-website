import React from "react";
import { FaShippingFast, FaLock, FaHashtag } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa6";
import { FaRegMoneyBillAlt } from "react-icons/fa";

const InfoSection = () => {
  const infoItems = [
    {
      icon: <FaShippingFast />,
      title: "Free Shipping",
      description: "Get your orders delivered with no extra cost",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      description: "Got a question or need help with your order? Our customer support team is available 24/7 to assist you anytime, day or night.",
    },
    {
      icon: <FaRegMoneyBillAlt />,
      title: "Cash on Delivery",
      description: "Pay in cash when your order arrives — simple and secure.",
    },

    
  ];
  return (
    <div className="grid grid-cols-3 mt-4 gap-2">
      {infoItems.map((item, index) => (
        <div
          key={index}
          className="border-2 shadow-md rounded-md p-2 flex flex-col justify-center items-center hover:scale-105 duration-100 cursor-pointer m-1"
        >
          <div className="text-2xl">{item.icon}</div>
          <div className="font-semibold">{item.title}</div>
          <div className=" text-sm">{item.description}</div>
        </div>
      ))}
    </div>
  );
};

export default InfoSection;
