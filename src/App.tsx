import Header from "./components/Header";
import Card from "./components/Card";
import { useCart } from "./hooks/useCart";

function App() {
  const {
    data,
    cart,
    cleanCart,
    increaseItemsCart,
    decreaseItemsCart,
    handleAddToCart,
    isEmpty,
    total,
  } = useCart();

  return (
    <>
      <Header
        cart={cart}
        cleanCart={cleanCart}
        increaseItemsCart={increaseItemsCart}
        decreaseItemsCart={decreaseItemsCart}
        isEmpty={isEmpty}
        total={total}
      />
      <div className="container">
        <div className="cards">
          {data.map((product) => (
            <Card
              product={product}
              key={product.id}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
