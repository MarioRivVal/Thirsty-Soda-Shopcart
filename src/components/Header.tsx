import { useState } from "react";
import Cart from "./Cart";
import { CartProduct, Product } from "../types";

type HeaderProps = {
  cart: CartProduct[];
  cleanCart: () => void;
  increaseItemsCart: (id: Product["id"]) => void;
  decreaseItemsCart: ({ id, quantity }: CartProduct) => void;
  isEmpty: boolean;
  total: number;
};

export default function Header({
  cart,
  cleanCart,
  increaseItemsCart,
  decreaseItemsCart,
  isEmpty,
  total,
}: HeaderProps) {
  const [cartOpen, setCartOpen] = useState(false);

  function handleCartOpen() {
    setCartOpen(!cartOpen);
  }

  return (
    <div className="header">
      <h2 className="header__title">Thirsty Soda</h2>
      <div className="header__cart-box">
        <div className="card__icon" onClick={handleCartOpen}>
          <svg
            className="icon bag-icon"
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.64468 15.4083C3.14266 11.8941 5.86952 8.75 9.41939 8.75H25.5806C29.1304 8.75 31.8573 11.8941 31.3553 15.4083L29.8675 25.8229C29.3543 29.4151 26.2778 32.0833 22.6491 32.0833H12.3509C8.72216 32.0833 5.64566 29.4151 5.13248 25.8229L3.64468 15.4083ZM9.41939 11.6667C7.64445 11.6667 6.28102 13.2387 6.53204 14.9958L8.01983 25.4104C8.32774 27.5657 10.1736 29.1667 12.3509 29.1667H22.6491C24.8263 29.1667 26.6722 27.5657 26.9801 25.4104L28.4679 14.9958C28.7189 13.2387 27.3555 11.6667 25.5806 11.6667H9.41939Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.2089 6.94728C11.4441 4.47686 13.9688 2.91699 16.7305 2.91699H18.2701C21.032 2.91699 23.5569 4.47745 24.792 6.94777L26.0964 9.55648C26.4566 10.2769 26.1646 11.1528 25.4442 11.513C24.7238 11.8732 23.8478 11.5812 23.4876 10.8608L22.1833 8.25213C21.4422 6.76993 19.9273 5.83366 18.2701 5.83366H16.7305C15.0732 5.83366 13.5586 6.7696 12.8176 8.25165L11.513 10.8608C11.1528 11.5812 10.2769 11.8732 9.55647 11.513C8.83608 11.1528 8.54409 10.2769 8.90428 9.55647L10.2089 6.94728Z"
              fill="black"
            />
          </svg>
        </div>

        {cartOpen && (
          <Cart
            cart={cart}
            cleanCart={cleanCart}
            increaseItemsCart={increaseItemsCart}
            decreaseItemsCart={decreaseItemsCart}
            isEmpty={isEmpty}
            total={total}
          />
        )}
      </div>
    </div>
  );
}
