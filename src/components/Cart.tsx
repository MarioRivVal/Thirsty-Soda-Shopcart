import { CartProduct, Product } from "../types";

type CartProps = {
  cart: CartProduct[];
  cleanCart: () => void;
  increaseItemsCart: (id: Product["id"]) => void;
  decreaseItemsCart: ({ id, quantity }: CartProduct) => void;
  isEmpty: boolean;
  total: number;
};

export default function Cart({
  cart,
  cleanCart,
  increaseItemsCart,
  decreaseItemsCart,
  isEmpty,
  total,
}: CartProps) {
  return (
    <div className="cart">
      {cart.map((item) => (
        <div className="cart__row" key={item.id}>
          <img src={`img/cans/${item.image}.png`} alt="" />
          <p>{item.name}</p>
          <p>{item.price}</p>
          <div className="cart__counter-box">
            <p className="cart__counter">{item.quantity}</p>
            <div className="cart__buttons">
              <button
                className="cart__btn--decrease"
                onClick={() => {
                  decreaseItemsCart(item);
                }}
              >
                -
              </button>
              <button
                className="cart__btn--increase"
                onClick={() => increaseItemsCart(item.id)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}

      {isEmpty ? (
        <p className="cart__empty-message">Empty Cart, Add some Drink</p>
      ) : (
        <>
          {" "}
          <p className="cart__total">{+total.toFixed(2)} €</p>
          <button className="btn cart__clean" onClick={cleanCart}>
            Clean Cart
          </button>
        </>
      )}
    </div>
  );
}
