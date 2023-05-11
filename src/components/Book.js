import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

function Book({id, thumbnail, title, authors, subtitle, publishedDate, infoLink}) {
  return (
    <div>
      <img src={thumbnail} alt={title} />
      <h2>
        <Link to={`/book/${id}`}>{title}</Link>
      </h2>
      <p>{authors} / {publishedDate}</p>
      <p>{subtitle}</p>
      <p>
        <a href={infoLink}>More</a>
      </p>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.array.isRequired,
  subtitle: PropTypes.string,
  publishedDate: PropTypes.string.isRequired,
  infoLink: PropTypes.string.isRequired,
}

export default Book;