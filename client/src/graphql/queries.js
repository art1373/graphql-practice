import { gql } from "apollo-boost";

export const BOOK_QUERY = gql`
  {
    books {
      id
      name
    }
  }
`;
export const BOOK_DETAIL_QUERY = gql`
  query GetBook($id: ID) {
    book(id: $id) {
      id
      name
      genre
      pages
      author {
        id
        name
        age
        books {
          id
          name
        }
      }
    }
  }
`;

export const AUTHOR_QUERY = gql`
  {
    authors {
      id
      name
    }
  }
`;

export const ADD_BOOK_MUTATION = gql`
  mutation AddBook(
    $name: String!
    $genre: String!
    $authorId: ID!
    $pages: Int!
  ) {
    addBook(name: $name, genre: $genre, authorId: $authorId, pages: $pages) {
      id
      name
      genre
      pages
    }
  }
`;
