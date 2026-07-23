import { useContext, useEffect, useState } from "react";
import CartContext from "./CartContext";
import { toast } from "react-toastify";
import AuthContext from "../Auth/AuthContext.jsx";
import ProductContext from "../Product/ProductContext.jsx";
import { getCart, addToCart as apiAddToCart, updateCartQuantity } from "../../services/cartService";

const CartProvider = (props) => {
  const { token } = useContext(AuthContext);
  const { product = [] } = useContext(ProductContext);
  const [cartData, setCartData] = useState([]);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    if (!token) {
      setCartItems({});
      setCartData([]);
      return;
    }
    getUserCart();
    getCartCount();
    addTotalPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const updateCart = async (action, cartId) => {
    if (!cartId) return;
    let updatedCart = structuredClone(cartItems);

    if (updatedCart[cartId]) {
      switch (action) {
        case "increase":
          if (typeof updatedCart[cartId] === "object") {
            updatedCart[cartId].quantity += 1;
          } else {
            updatedCart[cartId] += 1;
          }
          break;

        case "decrease": {
          const q =
            typeof updatedCart[cartId] === "object"
              ? updatedCart[cartId].quantity
              : updatedCart[cartId];
          if (q > 1) {
            if (typeof updatedCart[cartId] === "object") {
              updatedCart[cartId].quantity -= 1;
            } else {
              updatedCart[cartId] -= 1;
            }
          } else {
            delete updatedCart[cartId];
          }
          break;
        }

        case "remove":
          delete updatedCart[cartId];
          break;

        default:
          console.error("Invalid action provided!");
          return;
      }

      setCartItems(updatedCart);

      if (token) {
        try {
          if (action === "remove" || !updatedCart[cartId]) {
            await updateCartQuantity(cartId, 0);
          } else {
            const quantity =
              typeof updatedCart[cartId] === "object"
                ? updatedCart[cartId].quantity
                : updatedCart[cartId];
            await updateCartQuantity(cartId, quantity);
          }
        } catch (error) {
          console.error("Error updating cart on backend:", error);
        }
      }
    } else {
      console.error(`Item with cartId: ${cartId} not found in cart.`);
    }
  };

  const getUserCart = async () => {
    try {
      if (!token) return;
      const data = await getCart();
      if (data.success) {
        setCartItems(data.cartData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = async (itemId) => {
    if (!itemId) return;
    try {
      if (!token || token.length === 0) {
        toast.error("Please login to add items to the cart");
        return;
      }
      let cartdata = structuredClone(cartItems);
      if (cartdata[itemId]) {
        if (typeof cartdata[itemId] === "object") {
          cartdata[itemId].quantity = (cartdata[itemId].quantity || 0) + 1;
        } else {
          cartdata[itemId] = (cartdata[itemId] || 0) + 1;
        }
      } else {
        cartdata[itemId] = { quantity: 1 };
      }

      setCartItems(cartdata);

      const quantity =
        typeof cartdata[itemId] === "object" ? cartdata[itemId].quantity : cartdata[itemId];
      await apiAddToCart(itemId, quantity);
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const getCartCount = () => {
    if (!token || token.length === 0) {
      return 0;
    }

    let totalCount = 0;
    for (const productId in cartItems) {
      const item = cartItems[productId];
      const q = typeof item === "object" ? item.quantity : item;
      totalCount += Number(q) || 0;
    }
    return totalCount;
  };

  const addTotalPrice = () => {
    if (!cartItems || typeof cartItems !== "object") {
      console.error("Invalid cartItems:", cartItems);
      return 0;
    }

    const totalPrice = Object.keys(cartItems).reduce((total, productId) => {
      const cartItem = cartItems[productId];
      const matchedProduct = product.find((prod) => prod._id === productId);
      if (matchedProduct) {
        const q = typeof cartItem === "object" ? cartItem.quantity : cartItem;
        return total + q * matchedProduct.price;
      }
      return total;
    }, 0);

    return totalPrice;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        cartData,
        setCartData,
        updateCart,
        getUserCart,
        addToCart,
        getCartCount,
        addTotalPrice,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
