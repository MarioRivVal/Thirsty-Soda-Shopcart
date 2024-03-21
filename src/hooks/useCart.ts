import { useState, useEffect, useMemo } from "react";
import { db } from "../data/db";
import { Product, CartProduct } from "../types";

export const useCart = () => {
  const initialCart = () => {
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [data] = useState(db);
  const [cart, setCart] = useState<CartProduct[]>(initialCart);

  const MAX_ITEMS = 10;
  const MIN_ITEMS = 1;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function handleAddToCart(product: Product) {
    const productExist = cart.findIndex((item) => item.id === product.id);

    if (productExist >= 0) {
      if (cart[productExist].quantity === MAX_ITEMS) return;
      const updatedCart = [...cart];
      updatedCart[productExist].quantity++;
      setCart(updatedCart);
    } else {
      const newItem: CartProduct = { ...product, quantity: 1 };
      setCart([...cart, newItem]);
    }
  }

  function increaseItemsCart(id: Product["id"]) {
    const updatedCart: CartProduct[] = cart.map((item) =>
      item.id === id && item.quantity < MAX_ITEMS
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCart(updatedCart);
  }

  function decreaseItemsCart({ id, quantity }: CartProduct) {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > MIN_ITEMS
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    setCart(updatedCart);

    if (quantity === MIN_ITEMS) deleteFromCart(id);
  }

  function deleteFromCart(id: Product["id"]) {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  }

  function cleanCart() {
    const resp = confirm("Do you really want delete all the product?");

    if (resp) setCart([]);
  }

  const isEmpty = useMemo(() => cart.length === 0, [cart]);
  const total = useMemo(
    () => cart.reduce((acc, item) => acc + item.quantity * item.price, 0),
    [cart]
  );

  return {
    data,
    cart,
    cleanCart,
    increaseItemsCart,
    decreaseItemsCart,
    handleAddToCart,
    isEmpty,
    total,
  };
};
