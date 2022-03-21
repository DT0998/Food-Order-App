import CartContext from "./cart-context";

function CartProvider(props) {
  const addItemToCartHandler = (item) => {};

  const removeItemFromCartHandler = (item) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    // addItem: addItemToCartHandler,
    // removeItem: removeItemFromCartHandler,
  };
  return <CartContext value={cartContext}>{props.children}</CartContext>;
}

export default CartProvider;
