import ProductCard from "./ProductCard";
import { ProductProps } from "../types/types";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { endpoints } from "../utils/endpoints";
import { fetcher } from "../utils/apiHandlers";
import CartButton from "./CartButton";

export default function GridList() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  // Define the async function to fetch products
  const fetchProducts = async () => {
    try {
      const items = await fetcher(endpoints.products);
      setProducts(items);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Call fetchProducts once the component is mounted
  useEffect(() => {
    fetchProducts();
  }, []); // Empty dependency array to fetch data on mount only

  return (
    <section className="flex flex-wrap justify-center gap-4 p-4">
      {products.map((item) => (
        <div key={item.id} className="flex flex-col items-center">
          <NavLink to={`/${item.id}`}>
            <ProductCard {...item} />
          </NavLink>
          <div className="flex justify-center w-full mt-2">
            <CartButton product_id={item.id} quantity={1} />
          </div>
        </div>
      ))}
    </section>
  );
}
