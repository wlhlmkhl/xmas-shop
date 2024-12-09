import axios from "axios";
import { CartProps } from "../types/types";

export const fetcher = async (url: string) => {
  try {
    const result = await axios.get(url);
    return result.data;
  } catch (error) {
    console.error("Error fetching product data:", error);
  }
};

export const postToCart = async (url: string, id: number, quantity: number) => {
  try {
    const body: CartProps = {
      product_id: id,
      quantity: quantity,
    };
    const response = await axios.post(url, body);
    console.log(response.data);
  } catch (error) {
    console.log("Error vid post till Cart:", error);
  }
};

export const deleteItemsInCart = async (url: string) => {
  try {
    const deleteCartItems = await axios.delete(url);
    console.log(deleteCartItems);
  } catch (error) {
    console.log("error vid borttagning av cartitems :", error);
  }
};
