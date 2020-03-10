import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { AUTHOR_QUERY, ADD_BOOK_MUTATION, BOOK_QUERY } from "graphql/queries";

const AddBook = () => {
  const { loading, data } = useQuery(AUTHOR_QUERY);
  const [AddBook] = useMutation(ADD_BOOK_MUTATION);
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [pages, setPages] = useState("");
  const [authorId, setAuthorId] = useState("");

  const displayAuthors = () => {
    if (loading) {
      return <option disabled>Loading authors</option>;
    } else {
      return data.authors.map(author => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  };

  const submitForm = e => {
    e.preventDefault();
    AddBook({
      variables: {
        name: name,
        genre: genre,
        authorId: authorId,
        pages: Number(pages)
      },
      refetchQueries: [{ query: BOOK_QUERY }]
    });
  };

  return (
    <form id="add-book" onSubmit={submitForm}>
      <div className="field">
        <label>Book name:</label>
        <input type="text" onChange={e => setName(e.target.value)} />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" onChange={e => setGenre(e.target.value)} />
      </div>
      <div className="field">
        <label>Pages:</label>
        <input type="text" onChange={e => setPages(e.target.value)} />
      </div>
      <div className="field">
        <label>Author:</label>
        <select onChange={e => setAuthorId(e.target.value)}>
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  );
};

export default AddBook;
