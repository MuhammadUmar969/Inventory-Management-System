import React, { useContext } from "react";
import { CartContext } from "./Cart";

const Items = ({id , title , unit , quantity}) => {
  const { removeItem , increment , decrement } = useContext(CartContext);
  return (
    <>
      <div className="items-info">
        <div className="title">
          <h2>{title}</h2>
        </div>

        <div className="add-minus-quantity">
          <i className="fas fa-minus minus" onClick={() => decrement(id)}></i>
          <input type="text" placeholder={quantity} />
          <i className="fas fa-plus" onClick={() => increment(id)}></i>
        </div>

        <div className="units">
          <h3>{unit}</h3>
        </div>

        <div className="remove-item">
          <i className="fas fa-trash-alt add" onClick={() => removeItem(id)}></i>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Items;
