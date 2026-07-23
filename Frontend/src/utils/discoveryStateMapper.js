export function areStatesEqual(stateA, stateB) {
  if (stateA.search !== stateB.search) return false;
  if (stateA.sorting !== stateB.sorting) return false;
  if (stateA.view !== stateB.view) return false;

  const pagA = stateA.pagination || { page: 1, pageSize: 12 };
  const pagB = stateB.pagination || { page: 1, pageSize: 12 };
  if (pagA.page !== pagB.page) return false;
  if (pagA.pageSize !== pagB.pageSize) return false;

  const fA = stateA.filters || {};
  const fB = stateB.filters || {};

  if (fA.rating !== fB.rating) return false;
  if (fA.availability !== fB.availability) return false;
  if ((fA.price?.min || 0) !== (fB.price?.min || 0)) return false;
  if ((fA.price?.max || 1000) !== (fB.price?.max || 1000)) return false;

  const catA = fA.category || [];
  const catB = fB.category || [];
  if (catA.length !== catB.length) return false;
  if (catA.some((c) => !catB.includes(c))) return false;

  const brA = fA.brand || [];
  const brB = fB.brand || [];
  if (brA.length !== brB.length) return false;
  if (brA.some((b) => !brB.includes(b))) return false;

  const genA = fA.gender || [];
  const genB = fB.gender || [];
  if (genA.length !== genB.length) return false;
  if (genA.some((g) => !genB.includes(g))) return false;

  const subA = fA.subcategory || [];
  const subB = fB.subcategory || [];
  if (subA.length !== subB.length) return false;
  if (subA.some((s) => !subB.includes(s))) return false;

  return true;
}
