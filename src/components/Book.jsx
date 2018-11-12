import React from "react";

const Book = ({ addBookToCart, book }) => {
  return (
    <div>
      <p>Title: {book.title}</p>
      <button onClick={() => addBookToCart(book.id)}>Add to Cart</button>
    </div>
  );
};

export default Book;
