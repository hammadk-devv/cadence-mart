import { useContext, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Filter.css";
import up from "../assets/up-arrow.svg";
import down from "../assets/down-arrow.svg";
import ProductContext from "../context/Product/ProductContext.jsx";
import ThemeContext from "../context/Theme/ThemeContext.jsx";

function Filter({ setSortItem }) {
  const context = useContext(ProductContext) || {};
  const { filteredItems = 0, sortCategory = [], setSortCategory = () => {} } = context;
  const { dark } = useContext(ThemeContext) || {};
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sortOption, setSortOption] = useState("Relevance");
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsSortOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsSortOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const valueIsCheked = (isCheked, category) => {
    if (isCheked) setSortCategory((prev) => [...prev, category]);
    else setSortCategory((prev) => prev.filter((item) => item !== category));
  };

  const toggleSort = () => {
    setIsSortOpen((prev) => !prev);
  };

  const toggleCategory = () => {
    setIsCategoryOpen((prev) => !prev);
  };

  const handleSortOptionClick = (option) => {
    setSortOption(option);
    setSortItem(option);
    setIsSortOpen(false);
  };

  const clearAll = () => {
    handleSortOptionClick("Relevance");
    setSortItem("Relevance");
    setSortCategory([]);
  };

  const categories = ["Topwear", "Bottomwear", "Winterwear"];

  return (
    <div className={`filter-sidebar-wrapper ${dark ? "dark-active" : ""}`}>
      {/* Sort Menu */}
      <div className="filter-menu" ref={dropdownRef}>
        <div className="filter-clear">
          <div className="filter-c">
            <p>Filter</p>
            <p onClick={clearAll} className="cursor-pointer">
              Clear All
            </p>
          </div>
          <span>{filteredItems} products</span>
        </div>
        <div className="sort-bar" onClick={toggleSort}>
          <p className="sort-by">
            <span className="text-muted">Sort by: </span>
            {sortOption}
          </p>
          <img src={isSortOpen ? up : down} alt="Toggle Sort" />
        </div>

        <AnimatePresence>
          {isSortOpen && (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -8, scale: 0.98 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="sort-option"
            >
              {["Relevance", "Price (High to Low)", "Price (Low to High)", "Ratings"].map(
                (option) => (
                  <p key={option} onClick={() => handleSortOptionClick(option)}>
                    {option}
                  </p>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Category Filter */}
      <div className="segment-c"></div>
      <div className="category-c">
        <div className="select-c" onClick={toggleCategory}>
          <h3>Category</h3>
          <img src={isCategoryOpen ? up : down} alt="Toggle Category" />
        </div>

        {isCategoryOpen && (
          <>
            <input
              type="text"
              placeholder="Search Category"
              onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
              className="text-black"
            />
            <ul>
              {categories
                .filter((category) => category.toLowerCase().includes(searchQuery))
                .map((category, index) => (
                  <li key={index}>
                    <input
                      type="checkbox"
                      checked={sortCategory.includes(category)} // Bind checkbox state to `sortCategory`
                      onChange={(e) => valueIsCheked(e.target.checked, category)}
                    />
                    <p>{category}</p>
                  </li>
                ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default Filter;
