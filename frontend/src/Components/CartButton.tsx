import { postToCart } from "../utils/apiHandlers";
import { endpoints } from "../utils/endpoints";
import { CartProps } from "../types/types";
const CartButton = ({ product_id, quantity }: CartProps) => {
  const buttonHandler = () => {
    postToCart(endpoints.cart, product_id, quantity);
  };

  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg cursor-pointer transition-colors duration-300 hover:bg-blue-700"
      onClick={buttonHandler}
    >
      Add to Cart
    </button>
  );
};
export default CartButton;
