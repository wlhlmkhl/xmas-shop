import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { endpoints } from "../utils/endpoints";

const CartWidget = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const fetchCartCount = async () => {
      try {
        const cartItems = await axios.get(endpoints.cart);
        setCount(cartItems.data.length);
      } catch (error) {
        console.error("Error fetching cart count:", error);
      }
    };

    fetchCartCount();
  }, []);

  const navigate = useNavigate();
  const navigateToCart = () => {
    navigate("/cart");
  };

  return (
    <button
      onClick={navigateToCart}
      className="relative flex items-center p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      data-testid="cart-widget"
    >
      <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
        {count}
      </span>
      <FontAwesomeIcon icon={faCartShopping} className="w-6 h-6" />
    </button>
  );
};

export default CartWidget;
