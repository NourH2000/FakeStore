import React, { useContext, useEffect } from "react";
import storeLogo from "../assets/storeLogo.png";
import { MdLocalGroceryStore } from "react-icons/md";
import { AiTwotoneHome } from "react-icons/ai";
import { FaTshirt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FcAbout } from "react-icons/fc";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { Link, Navigate } from "react-router-dom";
import { CardContext } from "../Contexts/CardContext";
import useAuth from "../hooks/useAuth";
const Navbar = () => {
  const globaState = useContext(CardContext);
  const basket = globaState.state;
  const dispatch = globaState.dispatch;
  const { auth, logout } = useAuth();

  //check if user exist
  useEffect(() => {
    if (!auth.user) {
      console.log("am not here");
      dispatch({ type: "EMPTY" });
    }
  }, [auth]);

  return (
    <>
      <div className="h-20 w-full flex justify-between items-center px-5 sm:px-20  lg:pl-28 xl:pl-52  pt-3 mb-20 ">
        <img className="flex h-10 sm:h-16" src={storeLogo} />
        <ul className=" hidden lg:flex justify-between items-center ">
          <li className="mx-4  uppercase pb-1 border-b-2 border-white hover:border-[#f4d504]  ">
            <Link to="/">home</Link>
          </li>
          <li className="mx-4 uppercase pb-1 border-b-2 border-white hover:border-[#f4d504]">
            <Link to="/products">products</Link>
          </li>
          <li className="mx-4 uppercase pb-1 border-b-2 border-white hover:border-[#f4d504]">
            <Link to="/contact">contact</Link>
          </li>
          <li className="mx-4 uppercase pb-1 border-b-2 border-white hover:border-[#f4d504]">
            <Link to="/about">about</Link>
          </li>

          <li className="  relative mx-4 uppercase cursor-pointer">
            <Link to="/basket">
              <MdLocalGroceryStore size={30} />
            </Link>

            {basket?.length > 0 ? (
              <span className="absolute  -top-3 w-7 h-7 left-5 flex justify-center items-center rounded-full bg-[#f4d504]">
                {basket.length}
              </span>
            ) : (
              ""
            )}
          </li>
          {auth?.user ? (
            <li
              className="mx-14  uppercase py-2 px-3 bg-[#f4d504] rounded cursor-pointer  flex items-center"
              onClick={() => logout()}
            >
              logout
            </li>
          ) : (
            <Link to="/login">
              <li className="mx-14  uppercase py-2 px-3 bg-[#f4d504] rounded cursor-pointer  flex items-center">
                login
              </li>
            </Link>
          )}
        </ul>
      </div>
      <ul className="fixed w-full h-20 bg-black bottom-0 flex items-center justify-around z-50  lg:hidden">
        <li className="text-white  border-r border-gray-500 py-2 w-[20%] flex justify-center">
          <Link to="/">
            <AiTwotoneHome size={25} />
          </Link>
        </li>
        <li className="text-white   border-r border-gray-500 py-2 w-[20%] flex justify-center">
          <Link to="/products">
            <FaTshirt size={25} />
          </Link>
        </li>{" "}
        <li className="text-white   border-r border-gray-500 py-2 w-[20%] flex justify-center">
          <Link to="/contact">
            <GrMail size={25} />
          </Link>
        </li>{" "}
        <li className="text-white   border-r border-gray-500 py-2 w-[20%] flex justify-center">
          <Link to="/about">
            <FcAbout size={25} />
          </Link>
        </li>{" "}
        <li className="text-white   border-r border-gray-500 py-2 w-[20%] flex justify-center">
          <Link to="/basket">
            <MdLocalGroceryStore size={25} />
          </Link>
        </li>
        <li className="text-white   border-r border-gray-500 py-2 w-[20%] flex justify-center">
          {auth?.user ? (
            <BiLogIn size={25} onClick={() => logout()} />
          ) : (
            <Link to="/login">
              <BiLogOut size={25} />
            </Link>
          )}
        </li>
      </ul>
    </>
  );
};

export default Navbar;
