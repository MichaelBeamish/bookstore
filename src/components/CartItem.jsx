import React from "react";

const CartItem = props => {
  return (
    <div>
      <ul>
        <li>{props.book.title}</li>
        <li>{props.book.author}</li>
        <li>${props.book.price.toFixed(2)}</li>
        <button onClick={() => props.removeBookFromCart(props.book.id)}>
          Remove from Cart
        </button>
      </ul>
    </div>
  );
};

export default CartItem;
