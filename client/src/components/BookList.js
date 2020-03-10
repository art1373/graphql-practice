import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
const BOOK_QUERY = gql`
  {
    books {
      id
      name
      genre
      pages
    }
  }
`;
//change this into one file

const BookList = () => {
  const { loading, error, data } = useQuery(BOOK_QUERY);
  return (
    <div>
      <ul id="book-list">
        <li>Book name</li>
        {error && <p>بگا رفت</p>}
        {loading && <p>loading</p>}
        {data &&
          data.books.map(({ id, name, genre, pages }) => {
            return (
              <ul key={id}>
                <li>{name}</li>
                <li>{genre}</li>
                <li>{pages}</li>
              </ul>
            );
          })}
      </ul>
    </div>
  );
};

export default BookList;
