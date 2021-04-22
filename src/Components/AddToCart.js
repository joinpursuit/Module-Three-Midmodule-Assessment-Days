function AddToCart(props) {
    const { productsInCart } = props;
    let subtotal = 0, tax=0;
    return (
      <section>
        <h2>Cart</h2>
        <ul>
          {productsInCart.map((product, i) => {
              subtotal = subtotal + product.price
              tax = (subtotal * 5)/100
            return (
              <li key={i}>
                {product.name}: ${product.price}
              </li>
            );
          })}
        </ul>
        <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
        <h3>Tax: ${tax.toFixed(2)}</h3>
        <h3>Total: ${(subtotal + tax).toFixed(2)}</h3>
      </section>
    );
  }
  
  export default AddToCart;