import formatPrice from "../helpers/formatPrice";
import "./ItemCards.css";

const ItemCards = (props) => {
    const {addToCart, product } = props;
  return (
    <div className="ItemCards">
      <h3>{product.name}</h3>
      <p>Price: {formatPrice(product.price)}</p>
      <button onClick={() => addToCart(product)}>Add To Cart</button>
      <img src={product.img} alt={product.name} />
      <p>{product.description}</p>
    </div>
  );
};

export default ItemCards;