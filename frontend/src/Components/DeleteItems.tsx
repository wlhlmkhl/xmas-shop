import { deleteItemsInCart } from "../utils/apiHandlers";
import { endpoints } from "../utils/endpoints";

const DeleteCartButton = () => {
  const buttonHandler = () => {
    try {
      deleteItemsInCart(endpoints.cart);
      alert("Varukorgen är rensad!");
    } catch (error) {
      console.log("Error vid resning av varukorg:", error);
    }
  };
  return (
    <button
      className="px-4 py-2 bg-red-500 text-white font-bold rounded-lg cursor-pointer transition-colors duration-300 hover:bg-red-700"
      onClick={buttonHandler}
    >
      Remove items in cart!
    </button>
  );
};
export default DeleteCartButton;
