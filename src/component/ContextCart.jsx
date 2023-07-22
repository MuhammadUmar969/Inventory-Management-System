import React, { useContext, useState } from "react";
import Items from "./Items";
import { Scrollbars } from "react-custom-scrollbars-2";
import { CartContext } from "./Cart";

const ContextCart = () => {
  const { item, totalItem } = useContext(CartContext);
  
  return (
    <>
      <header>
        <div className="continue-shopping">
          <h3>Inventory Management System</h3>
        </div>

        <div className="cart-details">
          <h3>Cart-Details</h3>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>Inventory Cart</h1>
        <p className="total-items">
          You have <span className="total-items-count"> {totalItem} </span>
          items in the inventory cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((currItem) => {
                return <Items key={currItem.id} {...currItem} />;
              })}
            </Scrollbars>
          </div>
        </div>

      </section>
    </>
  );
};

export default ContextCart;
