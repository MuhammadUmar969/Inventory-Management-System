export const reducer = (state, action) => {
  if (action.type === "Remove_item") {
    return {
      ...state,
      item: state.item.filter((currItem) => currItem.id !== action.payload),
    };
  }

  if (action.type === "Increment") {
    let updatedCart = state.item.map((currItem) => {
      if (currItem.id === action.payload) {
        return { ...currItem, quantity: currItem.quantity + 1 };
      }
      return currItem;
    });
    return { ...state, item: updatedCart };
  }

  if (action.type === "Decrement") {
    let updatedCart = state.item.map((currItem) => {
      if (currItem.id === action.payload) {
        return { ...currItem, quantity: currItem.quantity - 1 };
      }
      return currItem;
    });

    // Check if any item's quantity is less than zero
    const isQuantityLessThanZero = updatedCart.some(
      (currItem) => currItem.quantity < 0
    );
    if (isQuantityLessThanZero) {
      alert("The item's quantity cannot be less than zero");
      return state; // Revert to the previous state since quantity is less than zero
    }

    return { ...state, item: updatedCart };
  }

  if (action.type === "Total_item") {
    let { totalItem } = state.item.reduce(
      (accum, currVal) => {
        let { quantity } = currVal;
        accum.totalItem += quantity;
        return accum;
      },
      {
        totalItem: 0,
      }
    );
    return { ...state, totalItem };
  }

  return state;
};
