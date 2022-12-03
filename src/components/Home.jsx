import React from "react";
import { Link } from "react-router-dom";
import home from "../assets/home.jpg";

const Home2 = () => {
  return (
    <div className="w-full h-screen pt-12 ">
      <div className="w-full h-[500px] md:h-[600px] bg-[#f4d504] mx-auto flex justify-around items-center">
        <div className=" min-w-[100px] px-5 md:w-[500px]  ">
          <h1 className="uppercase font-bold text-6xl  tracking-widest leading-normal mb-14">
            shopy now
          </h1>

          <div className="flex flex-col gap-4 w-full">
            <p>Thanks for choosing to shop with us online!</p>

            <p className="leading-8">
              If you're looking for the best deals on your favorite products,
              <b> SHOPYNOW </b>is the way to go!
            </p>
            <Link
              to="/products"
              className="uppercase w-44  py-2 px-1 bg-black text-[#f4d504] font-bold rounded-full cursor-pointer text-center"
            >
              start shooping
            </Link>
          </div>
        </div>
        <img
          alt="Home page image"
          src={home}
          className=" hidden sm:flex w-[200px] sm:w-[300px]  sm:h-full md:w-[400px] lg:w-[500px] "
        />
      </div>
    </div>
  );
};

export default Home2;
