import React from 'react'
import about from '../assets/images/about.jpg'

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          About <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row md:justify-center gap-12">
        <img
          className="w-full h-full md:max-w-[360px]"
          src={about}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-1/2 text-sm text-gray-600">
          <p>
          Welcome to e-food — your trusted partner for quick, easy, and satisfying food ordering.

At e-food, we make it simple to enjoy your favorite meals from the comfort of your home. Our platform connects hungry customers with a wide variety of restaurants, offering everything from local favorites to global cuisines. With an easy-to-use interface, secure payments, and real-time tracking, we ensure that your food arrives fresh and on time — every time.
          </p>
          <p>
          We’re passionate about food and technology, and we’re on a mission to bring them together to create the ultimate dining experience. Whether you're ordering lunch at work, dinner with friends, or a midnight snack, e-food is here to serve.

Fast. Reliable. Delicious. That’s the e-food promise.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
          At e-food, our vision is to be the leading platform that redefines food ordering by making it seamless, reliable, and enjoyable for everyone. We strive to connect people with their favorite meals and local restaurants through smart technology, exceptional service, and a commitment to culinary convenience — anytime, anywhere.
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default About