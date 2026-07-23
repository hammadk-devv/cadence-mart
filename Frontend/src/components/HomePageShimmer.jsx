import { useContext } from "react";
import "./HomePageShimmer.css";
import ThemeContext from "../context/Theme/ThemeContext.jsx";

const HomePageShimmer = () => {
  const { dark } = useContext(ThemeContext);
  return (
    <div className={`shimmer-card ${dark ? "shimmer-dark-active" : ""}`}>
      <div className="shimmer-img"></div>
      <div className="shimmer-details">
        <div className="shimmer-line shimmer-category"></div>
        <div className="shimmer-line shimmer-title"></div>
        <div className="shimmer-line shimmer-title-short"></div>
        <div className="shimmer-line shimmer-rating"></div>
        <div className="shimmer-footer">
          <div className="shimmer-line shimmer-price"></div>
          <div className="shimmer-btn"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePageShimmer;
