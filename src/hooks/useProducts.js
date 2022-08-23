import axios from "axios";
import { useState, useEffect } from "react";
export const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(
        "https://63043a940de3cd918b43b6d0.mockapi.io/products"
      );
      setProducts(response.data);
    };
    fetchProducts()
  }, []);
  return{products}
};
