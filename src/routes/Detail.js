import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [book, setBook] = useState([]);

  const id = useParams();

  const getBook = async () => {
    const json = await (
      await fetch(`https://www.googleapis.com/books/v1/volumes/${id.id}`)
    ).json();
    setBook(json.volumeInfo);
  }

  useEffect (() => {
    getBook()
  }, []);

  return (
    <>
      <h2>{book.title}</h2>
      <p>SubTitle: {book.subtitle}</p>
      <p>Authors: {book.authors}</p>
      <p>Publisher {book.publisher}</p>
      <p>PublishedDate: {book.publishedDate}</p>
      <p>{book.description}</p>
      <hr />
      <p>PageCount: {book.pageCount}</p>
      <a href={book.previewLink}>PreviewLink</a> / <a href={book.infoLink}>InfoLink</a>
    </>
  );
}

export default Detail;