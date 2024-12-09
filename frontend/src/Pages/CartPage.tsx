import { useEffect, useState } from "react";
import Header from "../Components/Header";
import DetailedCard from "../Components/DetailedCard";
import DeleteItems from "../Components/DeleteItems";
import { ProductProps, CartProps } from "../types/types";
import { endpoints } from "../utils/endpoints";
import { fetcher } from "../utils/apiHandlers";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<ProductProps[]>([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const items: CartProps[] = await fetcher(endpoints.cart);
        console.log(items);

        const details = await Promise.all(
          items.map((item) =>
            fetcher(`${endpoints.products}/${item.product_id}`)
          )
        );

        setCartItems(details);
      } catch (error) {
        console.error(
          "Fel vid hämtning av cart items eller produktinformation:",
          error
        );
      }
    };

    fetchCartItems();
  }, []);

  return (
    <>
      <Header />
      <section className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold mb-2">Cart Page</h1>
          <DeleteItems />
        </div>
        <div className="CartPage--Container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cartItems.length > 0 ? (
            cartItems.map((product) => (
              <DetailedCard
                key={crypto.randomUUID()}
                id={product.id}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
                description={product.description}
                img_path={product.img_path}
              />
            ))
          ) : (
            <p>Det finns inga varor i kundvagnen.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default CartPage;
