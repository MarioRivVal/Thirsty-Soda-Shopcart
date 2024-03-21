import { Product } from "../types";

type ProductProps = {
  product: Product;
  handleAddToCart: (product: Product) => void;
};

export default function Card({ product, handleAddToCart }: ProductProps) {
  const {
    name,
    price,
    image,
    carbohydrate,
    water,
    juice,
    description,
    rating,
  } = product;

  const ratingNumber = Array.from({ length: rating }, (_, i) => i + 1);

  return (
    <div className="card">
      <div className="card__details">
        <div className="card_ingredients">
          <div className="card__ingredient">
            <p className="card__paragraph">Carbohydrate</p>
            <p className="card__amount">{carbohydrate}%</p>
          </div>
          <div className="card__ingredient">
            <p className="card__paragraph">Water</p>
            <p className="card__amount">{water}%</p>
          </div>
          <div className="card__ingredient">
            <p className="card__paragraph">Juice</p>
            <p className="card__amount">{juice}%</p>
          </div>
        </div>
        <div className="card__img-box">
          <img
            className="card__img"
            src={`img/cans/${image}.png`}
            alt={`${name} photo`}
          />
        </div>
      </div>

      <div className="card__product">
        <h3 className="card__product-name">{name}</h3>
        <div>{ratingNumber.map(() => "⭐")}</div>
        <p className="card__description">{description}</p>
      </div>

      <div className="card__action">
        <p className="card__price">{`${price}€`}</p>
        <button
          className="btn card__button"
          onClick={() => handleAddToCart(product)}
        >
          Add
        </button>
      </div>
    </div>
  );
}
