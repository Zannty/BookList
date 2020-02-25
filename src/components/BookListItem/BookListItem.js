import React from "react";
import "./BookListItem.css";
const BookListItem = props => {
  const { photo, genre, author, name } = props.book;
  return (
    <div className="book-list-item">
      <div className="cover">
        <img src={photo} />
      </div>
      <div className="property-item">
        <div>Название книги: {name}</div>
        <div>Автор: {author}</div>
        <div>Жанр: {genre}</div>
      </div>
    </div>
  );
};

export default BookListItem;
