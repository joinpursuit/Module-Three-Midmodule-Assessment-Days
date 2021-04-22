import React from 'react';

function AddToCart({cart, subtotal, tax, total}) {

    const addSingleProduct = (cart) => {
        cart.map((item, i) => {
            <li key={i}>
                {item.product.name}: ${item.product.price}
            </li>
  
        })
    };

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {addSingleProduct(cart)}
            </ul>
            <h3>Subtotal: ${subtotal}</h3>
            <h3>Tax: ${tax}</h3>
            <h3>Total: ${total}</h3>
        </div>
    );
};

export default AddToCart
