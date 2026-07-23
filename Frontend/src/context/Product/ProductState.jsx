import { useEffect, useState } from "react";
import ProductContext from "./ProductContext.jsx";
import "react-toastify/dist/ReactToastify.css";
import { getProducts } from "../../services/productService";
import { mockProducts } from "../../data/mockProducts";

const ProductState = (props) => {
  const [filteredItems, setFilteredItems] = useState(mockProducts.length);
  const [productId, setProductId] = useState();
  const [sortCategory, setSortCategory] = useState([]);
  const [product, setProduct] = useState(mockProducts);

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = async () => {
    try {
      const data = await getProducts();
      if (data && data.success && data.products && data.products.length > 0) {
        setProduct(data.products);
      }
    } catch (error) {
      console.log("Backend offline, utilizing centralized mock product dataset");
    }
  };

  return (
    <ProductContext.Provider
      value={{
        productId,
        setProductId,
        filteredItems,
        setFilteredItems,
        product,
        setSortCategory,
        sortCategory,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
