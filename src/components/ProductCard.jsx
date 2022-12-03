import React, { useContext } from "react";
import prod from "../assets/prod.jpg";
import { CardContext } from "../Contexts/CardContext";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, updateProd }) => {
  const globaState = useContext(CardContext);
  const dispatch = globaState.dispatch;
  const basket = globaState.state;
  const exist = basket?.filter((OneProduct) => OneProduct.id === product.id);
  const { auth } = useAuth();

  var navigate = useNavigate();

  return (
    <div className="h-[480px]  px-2 py-2 flex flex-col shadow-xl border-t-2 border-[#f4d504] mx-4 my-3 md:my-14 hover:shadow-2xl hover:scale-105 duration-500 hover:cursor-pointer ">
      <div onClick={() => updateProd(product)}>
        <div className=" w-full flex justify-center items-start pt-3 mb-4   ">
          <img src={product.image} className="h-48 w-48 mb-4" />
        </div>

        <h2 className="h-16 text-lg font-bold uppercase overflow-hidden mb-2">
          {product.title}
        </h2>
        <p className=" text-red-600 mb-6 font-bold">{product.price} $</p>
        <p className=" text-gray-700  mb-6">{product.category}</p>
      </div>
      {exist?.length > 0 ? (
        <button
          className="bg-red-700 h-10 uppercase text-white "
          onClick={() => dispatch({ type: "REMOVE", payload: product })}
        >
          remove
        </button>
      ) : (
        <button
          className="bg-[#f4d504] h-10 uppercase "
          onClick={() =>
            auth.user
              ? dispatch({ type: "ADD", payload: product })
              : navigate("/login")
          }
        >
          add to carte
        </button>
      )}
    </div>
  );
};

export default ProductCard;
