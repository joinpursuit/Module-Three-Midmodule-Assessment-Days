
import ItemCards from "./ItemCards"
import "./MainListing.css"
const MainListing = ({ products, addToCart}) => {
    return (
        <section className="Products" >
          {products.map((product) => (
            <ItemCards product={product} key={product.id} addToCart={addToCart} />
          ))}
          </section>
    )
}




export default MainListing