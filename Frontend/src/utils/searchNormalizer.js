export function normalizeSearchTerm(term) {
  if (!term) return "";
  let text = String(term).toLowerCase().trim().replace(/\s+/g, " ");

  const wordMap = {
    jackets: "jacket",
    shoes: "shoe",
    watches: "watch",
    chairs: "chair",
    bags: "bag",
    headphones: "headphone",
    earbuds: "earbud",
    smartwatches: "smartwatch",
    lamps: "lamp",
    decorations: "decor",
    kitchenwares: "kitchenware",
    laptops: "laptop",
    cameras: "camera",
    tshirts: "t-shirt",
    shirts: "t-shirt",
  };

  const words = text.split(" ").map((w) => {
    if (wordMap[w]) return wordMap[w];
    if (w.endsWith("ies") && w.length > 4) return w.slice(0, -3) + "y";
    if (
      w.endsWith("es") &&
      w.length > 4 &&
      (w.endsWith("ches") || w.endsWith("shes") || w.endsWith("xes") || w.endsWith("ses"))
    ) {
      return w.slice(0, -2);
    }
    if (w.endsWith("s") && !w.endsWith("ss") && w.length > 3) {
      return w.slice(0, -1);
    }
    return w;
  });

  return words.join(" ");
}

export function matchesSearch(product, searchInput) {
  if (!searchInput || !searchInput.trim()) return true;

  const rawQuery = searchInput.toLowerCase().trim().replace(/\s+/g, " ");
  const normalizedQuery = normalizeSearchTerm(rawQuery);

  const targets = [
    product.name,
    product.title,
    product.category,
    product.subcategory,
    product.brand,
    product.description,
    ...(Array.isArray(product.tags) ? product.tags : []),
  ]
    .filter(Boolean)
    .map((str) => String(str).toLowerCase().trim());

  return targets.some((target) => {
    const normalizedTarget = normalizeSearchTerm(target);

    return (
      target.includes(rawQuery) ||
      target.includes(normalizedQuery) ||
      normalizedTarget.includes(rawQuery) ||
      normalizedTarget.includes(normalizedQuery)
    );
  });
}
