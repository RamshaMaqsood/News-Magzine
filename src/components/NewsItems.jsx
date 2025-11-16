import defaultImage from "../assets/newsImg.webp";
import PropTypes from "prop-types";

function NewsItems( {title, description, src, url} ) {
  return (
    <div
      className="card bg-dark text-light mb-3 mx-3 my-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src ? src : defaultImage}
        style={{ height: "200px", width: "100%", objectFit: "cover" }}
        className="card-img-top"
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{title ? title.slice(0, 50) : "Title not available"}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "Description not available"}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
}


NewsItems.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  src: PropTypes.string,
  url: PropTypes.string,
};

export default NewsItems;
