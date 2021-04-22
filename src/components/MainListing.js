
import ItemCards from "./ItemCards"
import "./MainListing.css"
const MainListing = ({ products }) => {
    return (
        <section className="Main" >
          {products.map((product) => (
            <ItemCards {...product} key={product.id} />
          ))}
          </section>
    )
}




export default MainListing