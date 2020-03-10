import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { BOOK_DETAIL_QUERY } from "graphql/queries";

const BookDetails = props => {
  const { loading, data, error } = useQuery(BOOK_DETAIL_QUERY, {
    variables: { id: props.bookId }
  });
  const displayDetails = () => {
    if (data) {
      return (
        <div>
          <h2>{data.book.name}</h2>
          <p>{data.book.genre}</p>
          <p>{data.book.author.name}</p>
          <p>All books by this author:</p>
          <ul className="other-books">
            {data.book.author.books.map(item => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return <div>No book selected...</div>;
    }
  };

  return (
    <div id="book-details">
      <p>Output book details here</p>
      {displayDetails()}
    </div>
  );
};

export default BookDetails;
