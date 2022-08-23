import axios from "axios";
import { useState, useEffect } from "react";
export const useProduct = (id) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(
        `https://63043a940de3cd918b43b6d0.mockapi.io/products/${id}`
      );
      setProduct(response.data);
    };
    fetchProduct()
  }, []);
  return{product}
};
