import { PropTypes } from 'prop-types';

function Book({thumbnail, title, authors, description, publishedDate, infoLink}) {
  return (
    <div>
      <img src={thumbnail} alt={title} />
      <h2>{title}</h2>
      <p>{authors} / {publishedDate}</p>
      <p>{description}</p>
      <p>
        <a href={infoLink}>More</a>
      </p>
    </div>
  );
}

Book.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  infoLink: PropTypes.string.isRequired,
}

export default Book;