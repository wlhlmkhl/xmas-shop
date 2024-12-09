import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Header from "../Components/Header";
import DetailedCard from "../Components/DetailedCard";
import CartButton from "../Components/CartButton";

import { ProductProps } from "../types/types";

function ProductInfo() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductProps | null>(null);

  useEffect(() => {
    const fetcher = async () => {
      try {
        const url = `http://localhost:3001/api/products/${id}`;
        const result = await axios.get(url);
        setProduct(result.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    fetcher();
  }, [id]);

  return (
    <>
      <Header />
      <section className="container mx-auto p-4">
        {product && (
          <>
            <div className="flex justify-center">
              <div className="card--container">
                <DetailedCard
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  quantity={product.quantity}
                  description={product.description}
                  img_path={product.img_path}
                />
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <CartButton product_id={product.id} quantity={1} />
            </div>
          </>
        )}
      </section>
    </>
  );
}
export default ProductInfo;
