import React from "react";
import CartItem from "./CartItem";

const Cart = props => {
  let listOfCartItems = props.booksInCart.map(book => (
    <CartItem
      key={book.id}
      book={book}
      removeBookFromCart={props.removeBookFromCart}
    />
  ));
  let theTotal = props.booksInCart.reduce((acc, book) => acc + book.price, 0);
  return (
    <div>
      {listOfCartItems}
      Total (with tax): {theTotal}
    </div>
  );
};

export default Cart;
