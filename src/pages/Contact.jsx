import React from 'react'
import contact from '../assets/images/about.jpg'

const Contact = () => {
    

  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center items-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full max-w-[360px]"
          src={contact}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">Our OFFICE</p>
          <p className="text-gray-500">
            House #28,Road #3, Block A, Noyabari Society, 100 Feet Road, Madani Avenue, Vatara, Dhaka
          </p>
          <p className="text-gray-500">
            Tel:017xxxxxxxx  <br /> Email: efood123@gmail.com
          </p>
          
        </div>
      </div>
    </div>
  )
}

export default Contact