import ProductCard from './ProductCard';
import './Products.css';

const Products = ({ products, addToCart }) => {
    const cards = products.map((product) => {
        return (
            <ProductCard 
                key={product.id}
                product={product}
                addToCart={addToCart}
            />
        );
    });

    return (
        <section className='Products'>
            <h2>My Garage Sale</h2>
            {cards}
        </section>
    );
};

export default Products;