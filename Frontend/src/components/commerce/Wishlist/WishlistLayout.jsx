import Container from "../../ui/Container";
import WishlistHeader from "./WishlistHeader";
import WishlistGrid from "./WishlistGrid";
import WishlistActions from "./WishlistActions";
import WishlistSummary from "./WishlistSummary";
import WishlistShare from "./WishlistShare";
import WishlistRecommendations from "./WishlistRecommendations";
import WishlistEmptyState from "./WishlistEmptyState";

export default function WishlistLayout({
  items = [],
  products = [],
  onMoveToCart,
  onRemoveItem,
  onCardClick,
  onMoveAll,
  onClearAll,
  totalValue,
}) {
  if (items.length === 0) {
    return (
      <Container className="py-8">
        <WishlistEmptyState />
        <WishlistRecommendations products={products} />
      </Container>
    );
  }

  return (
    <Container className="py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <WishlistHeader itemCount={items.length} />
        <WishlistShare />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 my-4">
        <WishlistActions
          onMoveAll={onMoveAll}
          onClearAll={onClearAll}
          className="border-b-0 mb-0 py-0 flex-grow"
        />
        <WishlistSummary
          totalValue={totalValue}
          itemCount={items.length}
          className="w-full md:max-w-md"
        />
      </div>

      <div className="mt-6">
        <WishlistGrid
          items={items}
          onMoveToCart={onMoveToCart}
          onRemoveItem={onRemoveItem}
          onCardClick={onCardClick}
        />
      </div>

      <WishlistRecommendations products={products} />
    </Container>
  );
}
