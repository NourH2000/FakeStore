import React, { createContext, useEffect, useReducer } from "react";
import useAuth from "../hooks/useAuth";

export const CardContext = createContext();

const CardContextProvider = (props) => {
  // reducer :
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        // check if this product exist in the list ( just to be sure)
        const exist = state.filter((item) => action.payload.id === item.id);
        if (exist.length <= 0) {
          // add the property quantity
          action.payload.quantity = 1;
          // add the new product to the basket
          state = [...state, action.payload];
        }

        return state;
        break;
      case "REMOVE":
        // check if this product exist in the list ( just to be sure)
        state = state.filter((item) => action.payload.id !== item.id);

        return state;

        break;
      case "INCREMENT":
        state = state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return state;

        break;
      case "EMPTY":
        console.log("am here");
        state = [];
        return state;
        break;
      case "DECREMENT":
        const decremented = [];
        if (action.payload.quantity > 1) {
          state = state.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        }

        return state;
      default:
        return state;
    }
  };
  const initialState = JSON.parse(localStorage.getItem("bas")) || [{}];
  const [state, dispatch] = useReducer(reducer, initialState);
  const info = { state, dispatch };

  useEffect(() => {
    localStorage.setItem("bas", JSON.stringify(state));
  }, [state]);

  return (
    <CardContext.Provider value={info}> {props.children}</CardContext.Provider>
  );
};
export default CardContextProvider;
