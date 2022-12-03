import React from "react";
import { Link } from "react-router-dom";
import home from "../assets/home.jpg";

const Home = () => {
  return (
    <div className="w-full h-screen  flex justify-around  px-11 2xl:px-44  ">
      <div className="w-[500px]">
        {" "}
        <h1 className="uppercase font-bold text-6xl sm:text-5xl lg:text-7xl xl:text-8xl   tracking-widest leading-normal mb-14">
          shopy now
        </h1>{" "}
        <div className="flex flex-col gap-4 w-full">
          <p>Thanks for choosing to shop with us online!</p>

          <p className="leading-8">
            If you're looking for the best deals on your favorite products,
            SHOPY NOW is the way to go!
          </p>
          <Link
            to="/products"
            className="uppercase w-44  py-2 px-1 bg-[#f4d504] rounded-full cursor-pointer text-center"
          >
            start shooping
          </Link>
        </div>{" "}
      </div>
      <img
        alt="Home page image"
        src={home}
        className=" w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] hidden sm:flex"
        style={{ borderRadius: " 30% 70% 70% 30% / 30% 30% 70% 70%" }}
      />
    </div>
  );
};

export default Home;
