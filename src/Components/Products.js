import React from 'react';
import ProductCard from './ProductCard';

const Products = (props) => {
    const { addProduct } = props
    const listOfProducts = props.products.map((product) => {
        return (
            <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
                image={product.img}
                addProduct={addProduct}
                id={product.id}
            />
        )
    });

    return (
        <div>
            <h2>My Garage Sale</h2>
            {listOfProducts}
        </div>
    );
};

export default Products
