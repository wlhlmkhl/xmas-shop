export type ProductProps = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  description: string;
  img_path: string;
};

export type WidgetProps = {
  count: number;
};

export type CartProps = {
  product_id: number;
  quantity: number;
};
