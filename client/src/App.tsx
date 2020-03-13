import React from "react";
import "./App.css";
import BookList from "./components/BookList";
import AddBook from "components/AddBook";
import AddAuthor from "components/AddAuthor";

function App() {
  return (
    <div id="main">
      <h1>Ninja's Reading List</h1>
      <BookList />
      <AddBook />
      <AddAuthor />
    </div>
  );
}

export default App;
