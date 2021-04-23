
import ItemCards from "./ItemCards"
import "./MainListing.css"
const MainListing = ({ products, addToCart}) => {
    return (
        <section className="Main" >
          {products.map((product) => (
            <ItemCards {...product} key={product.id} addToCart={addToCart} />
          ))}
          </section>
    )
}




export default MainListing