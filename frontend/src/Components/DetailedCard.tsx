import { ProductProps } from "../types/types";
export default function DetailedCard({
  id,
  name,
  price,
  quantity,
  description,
  img_path,
}: ProductProps) {
  return (
    <div className="card p-6 border rounded-lg shadow-xl bg-white max-w-md mx-auto">
      <p className="text-gray-500 text-sm mb-2">ID: {id}</p>
      <img src={img_path} className="w-full h-auto mb-4" />
      <h2 className="text-xl font-bold mb-3">{name}</h2>
      <p className="text-gray-700 text-xl font-semibold mb-2">{price} kr</p>
      <p className="text-gray-700 mb-2">Kvantitet: {quantity}</p>
      <p className="text-gray-500 mt-4">{description}</p>
    </div>
  );
}
