import React, { createContext, useEffect, useReducer, useState } from "react";
import "./Cart.css";
import { Product } from "./Product";
import ContextCart from "./ContextCart";
import { reducer } from "./Reducer";
import { Scrollbars } from "react-custom-scrollbars-2";

export const CartContext = createContext();

const initialState = {
  item: Product,
  totalItem: 0,
};

const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const removeItem = (id) => {
    return dispatch({
      type: "Remove_item",
      payload: id,
    });
  };

  const increment = (id) => {
    return dispatch({
      type: "Increment",
      payload: id,
    });
  };

  const decrement = (id) => {
    return dispatch({
      type: "Decrement",
      payload: id,
    });
  };

  const addToCart = (itemData) => {
    // You can generate a unique id here or use a library like `uuid` for it.
    const newItem = {
      id: state.item.length + 1,
      ...itemData,
    };

    return dispatch({
      type: "Add_to_cart",
      payload: newItem,
    });
  };

  useEffect(() => {
    dispatch({ type: "Total_item" });
  }, [state.item]);

  return (
    <>
      <CartContext.Provider
        value={{ ...state, removeItem, increment, decrement, addToCart }}
      >
        <ContextCart />
      </CartContext.Provider>
    </>
  );
};

export default Cart;
