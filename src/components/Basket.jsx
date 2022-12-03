import React, { useContext } from "react";
import {
  MdAdd,
  MdDelete,
  MdHdrPlus,
  MdHourglassEmpty,
  MdLocalGroceryStore,
  MdOutlinePlusOne,
  MdRemove,
  MdRestoreFromTrash,
} from "react-icons/md";
import { CardContext } from "../Contexts/CardContext";

const Basket = () => {
  const globalstate = useContext(CardContext);
  const productsList = globalstate.state;
  const dispatch = globalstate.dispatch;

  return (
    <div className="h-screen w-full flex pt-10 px-3 md:p-10 justify-center  ">
      <div className="h-full w-full md:[1400px] lg:w-[1000px]  md:p-10  p-2 flex flex-col ">
        <div className="flex justify-between items-center mb-20 ">
          <h1 className="text-4xl font-semibold ">Your Basket </h1>
          <MdLocalGroceryStore size={40} />
        </div>
        {productsList.length > 0 ? (
          <ul>
            <li className="flex justify-between border-b-2  bg-slate-400  p-1  lg:p-3 mb-2 md:mb-16">
              <h2 className="w-[160px]  sm:w-[220px] lg:w-[500px]  text-base md:text-lg lg:text-2xl font-semibold">
                Product
              </h2>
              <h2 className="w-[70px]  sm:w-[150px]  lg:w-[300px] text-base md:text-lg lg:text-2xl font-semibold text-center">
                Quantity
              </h2>
              <h2 className="w-[60px] sm:w-[100px] lg:w-[150px] text-base md:text-lg lg:text-2xl font-semibold text-center">
                price
              </h2>
              <h2 className=" hidden md:flex justify-center w-[60px] sm:w-[100px] lg:w-[150px] text-base md:text-lg lg:text-2xl font-semibold ">
                total
              </h2>

              <h2 className=" lg:w-[90px] w-[40px]  "></h2>
            </li>

            {/* the data  */}
            {productsList?.map((prod, index) => (
              <li
                className="flex justify-between border-b-2 border-[#f4d504] p-1 lg:p-3 pb-10"
                key={index}
              >
                {/* title */}
                <h3 className="w-[160px]  sm:w-[220px] lg:w-[500px] text-base md:text-lg lg:text-2xl font-semibold">
                  {prod.title}
                </h3>
                {/* Quantity */}
                <div className="flex items-center gap-1 w-[70px]  sm:w-[150px]  lg:w-[300px] justify-center">
                  <MdAdd
                    className=" w-[20px] h-[20px] md:w-[30px] md:h-[30px] text-center bg-[#f4d504] rounded-md  hover:cursor-pointer"
                    onClick={() => {
                      dispatch({ type: "INCREMENT", payload: prod });
                    }}
                  />

                  <h3 className="w-[40px]  md:w-[60px] text-center font-bold text-lg  ">
                    {prod.quantity}
                  </h3>
                  <MdRemove
                    className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]   text-center bg-[#f4d504] rounded-md hover:cursor-pointer "
                    onClick={() => {
                      dispatch({ type: "DECREMENT", payload: prod });
                    }}
                  />
                </div>
                {/* price */}
                <span className="w-[60px] sm:w-[100px] lg:w-[150px] text-center font-bold text-sm md:text-lg flex items-center justify-center  ">
                  {prod.price} $
                </span>
                {/* total */}
                <span className="hidden md:flex w-[60px] sm:w-[100px] lg:w-[150px] text-center font-bold text-lg  items-center justify-center ">
                  {prod.price * prod.quantity} $
                </span>
                <span className="lg:w-[90px] w-[40px]  flex items-center justify-center hover:cursor-pointer">
                  <MdDelete
                    size={30}
                    onClick={() => {
                      dispatch({ type: "REMOVE", payload: prod });
                    }}
                  />
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center text-4xl mt-16">
            {" "}
            Your basket is empty
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
