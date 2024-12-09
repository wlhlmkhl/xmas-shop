import { ProductProps } from "../types/types";
export default function ProductCard({ name, price, img_path }: ProductProps) {
  return (
    <div className="card p-6 border rounded-lg shadow-xl bg-white">
      <img
        src={img_path}
        alt={`Image of ${name}`}
        className="w-full h-64 object-cover mb-4"
      />
      <div>
        <h2 className="text-xl font-bold mb-3">{name}</h2>
        <p className="text-gray-800 text-xl font-semibold">{price} kr</p>
      </div>
    </div>
  );
}
