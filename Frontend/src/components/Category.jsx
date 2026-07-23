import { useContext, useState } from "react";
import "./Category.css";
import ThemeContext from "../context/Theme/ThemeContext.jsx";

function Category({ setCategory }) {
  const { dark } = useContext(ThemeContext);
  const [selectCategory, setSelectCategory] = useState(0);

  const categories = [
    { id: 0, label: "All Products", value: "All" },
    { id: 1, label: "Women", value: "Women" },
    { id: 2, label: "Men", value: "Men" },
    { id: 3, label: "Kids", value: "Kids" },
  ];

  const onClickEvent = (category) => {
    category.value === "All" ? setCategory("") : setCategory(category.value);
    setSelectCategory(category.id);
  };

  return (
    <div className={`category-container ${dark ? "category-dark-active" : ""}`}>
      <div className="category-tabs">
        {categories.map((category) => (
          <button
            type="button"
            key={category.value}
            onClick={() => onClickEvent(category)}
            className={`category-tab-btn ${category.id === selectCategory ? "active-tab" : ""}`}
          >
            {category.label}
          </button>
        ))}
      </div>
      <div className="category-divider"></div>
    </div>
  );
}

export default Category;
