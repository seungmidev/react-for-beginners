import { useState, useEffect } from "react";
import Book from "../components/Book";

function Home() {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);

  const getMovies = async() => {
    const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=quilting")
    const json = await response.json();
    setBooks(json.items);
    setLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>Books List</h1>
          {books.map(book => (
            <Book
              key={book.id}
              id={book.id}
              thumbnail={book.volumeInfo.imageLinks.smallThumbnail}
              title={book.volumeInfo.title}
              authors={book.volumeInfo.authors}
              subtitle={book.volumeInfo.subtitle}
              publishedDate={book.volumeInfo.publishedDate}
              infoLink={book.volumeInfo.infoLink}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default Home;