import { useState, useEffect } from "react";
import NewsItems from "./NewsItems";
import PropTypes from "prop-types";

function NewsBoard({ category }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        if (data.articles) {
          setArticles(data.articles);
        } else {
          setArticles([]);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        setArticles([]);
      }
      setLoading(false);
    };

    fetchNews();
  }, [category]);

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1rem",
    justifyItems: "center",
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">
        Latest{" "}
        <span className="badge bg-danger">
          {category.charAt(0).toUpperCase() + category.slice(1)} News
        </span>
      </h2>

      {loading ? (
        <p className="text-center text-warning">Loading news...</p>
      ) : articles.length === 0 ? (
        <p className="text-center text-danger">
          No news available for this category.
        </p>
      ) : (
        <div style={gridStyle}>
          {articles.map((article, index) => (
            <NewsItems
              key={index}
              title={article.title}
              description={article.description}
              src={article.urlToImage}
              url={article.url}
            />
          ))}
        </div>
      )}
    </div>
  );
}


NewsBoard.propTypes = {
  category: PropTypes.string.isRequired,
};

export default NewsBoard;
