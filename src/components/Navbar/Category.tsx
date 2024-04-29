import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Category.css";
type Ctype = {
  data: string[];
};
const Category = ({ data }: Ctype) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, data.length - 1));
  };

  return (
    <div className="category">
      <div>
        <button
          className="right-button"
          onClick={handlePrevClick}
          disabled={currentIndex === 0}
        >
          Prev
        </button>
      </div>
      <div className="category-container">
        <ul className="category-list">
          {data.slice(currentIndex, currentIndex + 10).map((element, index) => (
            <li className="category-items" key={index}>
              <Link to={`/products/category/${element}`}>{element}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button
          className="left-button"
          onClick={handleNextClick}
          disabled={currentIndex + 10 >= data.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Category;

 