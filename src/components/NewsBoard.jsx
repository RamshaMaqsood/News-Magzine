import { useState, useEffect } from "react";
import NewsItems from "./NewsItems";

function NewsBoard({ category }) {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        console.log(import.meta.env.VITE_API_KEY);
        // Corrected URL template string
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => setArticles(data.articles))
            .catch(error => console.error('Error fetching news:', error)); // Added error handling
    }, [category]);

    return (
        <div>
            <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
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
    );
}

export default NewsBoard;
