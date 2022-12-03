import React from "react";
import {
  AiTwotoneStar,
  AiOutlineStar,
  AiFillCloseCircle,
} from "react-icons/ai";

const Details = ({ show, prod, close }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm ">
      <div
        className={
          !show
            ? "hidden "
            : " w-[400px] md:w-[700px] lg:w-[800px] mx-auto mt-20 md:mt-60 max-h-[1000px]  md:max-h-[600px] p-2 md:p-5 rounded-xl shadow-xl flex  flex-col md:flex-row gap-5 bg-[#f4d504] "
        }
      >
        <div className="w-full relative md:w-[300px] h-[300px] my-auto  ">
          <img
            src={prod.image}
            alt={prod.title}
            className="w-full h-full rounded-xl "
          />
          <div>
            <AiFillCloseCircle
              className="hover:cursor-pointer absolute top-0 right-0 md:hidden"
              size={30}
              onClick={() => {
                close();
              }}
            />
          </div>
        </div>
        <div className=" wh-full md:w-[500px]">
          <h1 className="text-2xl md:text-4xl font-bold mb-3">{prod.title}</h1>
          <p className="text-lg mb-5 max-h-[110px] overflow-y-scroll">
            {prod.description}
          </p>
          <div className="flex justify-between items-center">
            <p className="text-xl text-red-800 font-bold mb-4">
              {prod.price} $
            </p>
            <p className="text-lg mb-4 py-3 px-7 bg-slate-300 rounded-full w-auto">
              {prod.category}
            </p>
          </div>
          <ul className="flex items-center gap-2">
            {[...Array(5)].map((x, i) =>
              prod?.rating?.rate > i + 1 ? (
                <li key={i}>
                  <AiTwotoneStar size={30} />
                </li>
              ) : (
                <li key={i}>
                  <AiOutlineStar size={30} />
                </li>
              )
            )}
          </ul>
        </div>
        <div>
          <AiFillCloseCircle
            className="hover:cursor-pointer hidden md:flex  top-0 right-0 "
            size={30}
            onClick={() => {
              close();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
