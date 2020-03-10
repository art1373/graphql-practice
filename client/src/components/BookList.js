import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { BOOK_QUERY } from "../graphql/queries";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { loading, error, data } = useQuery(BOOK_QUERY);
  const [selected, setSelected] = React.useState("");
  return (
    <div>
      <ul id="book-list">
        <li>Book name</li>
        {error && <p>بگا رفت</p>}
        {loading && <p>loading</p>}
        {data &&
          data.books.map(({ id, name }) => {
            return (
              <ul key={id}>
                <li onClick={e => setSelected(id)}>{name}</li>
              </ul>
            );
          })}
      </ul>
      <BookDetails bookId={selected} />
    </div>
  );
};

export default BookList;
