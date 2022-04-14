import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  // add handler
  if (action.type === "ADD") {
    const updateItems = state.items.concat(action.item);
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    // check existing items
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex]
    let updatedItems;
    
    if(existingCartItem){
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      };
      updatedItems= [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }else{
      updatedItems = state.items.concat(action.item)
    }
    
    return {
      items: updatedItems,
      totalAmount: updateTotalAmount,
      
    };
  }
  // remove handler
  if(action.type === 'REMOVE'){

  }

  return defaultCartState;
};

function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
