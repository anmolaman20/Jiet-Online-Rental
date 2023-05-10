import React from "react";
import { Link } from "react-router-dom";
import "../../styles/categorylist.css";

const CategoryList = () => {
  return (
    <div className="category-list">
      <Link to="/category1">Category 1</Link>
      <Link to="/category2">Category 2</Link>
      <Link to="/category3">Category 3</Link>
      <Link to="/category4">Category 4</Link>
      <Link to="/category5">Category 5</Link>
      <Link to="/category6">Category 6</Link>
    </div>
  );
};

export default CategoryList;
