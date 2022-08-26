import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeItem, selectCart } from "../redux/cartSlice";

export const useCart = () => {
  const dispatch = useDispatch();

  const cart = useSelector(selectCart);

  const handlerAddToCart = (product) => {

    	if (cart.length < 1) {
    		dispatch(addToCart([product]));
    	} else {
    		const findCart = cart.find((c) => c.id === product.id);
    		!findCart ? dispatch(addToCart([...cart, product])) : dispatch(addToCart(cart.map((c) => (c.id === product.id ? { ...c, quantity: c.quantity + product.quantity } : c))));
    	}
  };

  const handlerRemoveToCart = (id) => {
    dispatch(removeItem(cart.filter((c) => c.id !== id)));
  };
  return { handlerRemoveToCart, handlerAddToCart };
};
