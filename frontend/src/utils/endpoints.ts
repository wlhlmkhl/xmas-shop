const baseUrl = import.meta.env.VITE_BASE_URL;
export const endpoints = {
  products: baseUrl + "api/products",
  // productById: baseUrl + "api/products/:id",
  cart: baseUrl + "api/cart",
};
