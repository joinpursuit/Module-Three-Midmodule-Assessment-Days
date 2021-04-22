
import "./ItemCards.css";

const ItemCards = (props) => {
  return (
    <div className="ItemCards">
      <h3>{props.name}</h3>
      <p>Price: {props.price}</p>
      <button >Add To Cart</button>
      <img src={props.img} alt={props.name} />
      <p>{props.description}</p>
    </div>
  );
};

export default ItemCards;