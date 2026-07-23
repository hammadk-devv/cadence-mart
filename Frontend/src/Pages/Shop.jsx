import { useContext } from "react";
import ProductContext from "../context/Product/ProductContext.jsx";
import DiscoveryLayout from "../components/commerce/ProductDiscovery";

export default function Shop() {
  const { product = [] } = useContext(ProductContext);

  const loading = !product || product.length === 0;

  return (
    <DiscoveryLayout
      title="Shop All Products"
      description="Discover our catalog of premium lifestyle gears and modern accessories."
      items={product || []}
      isLoading={loading}
    />
  );
}
