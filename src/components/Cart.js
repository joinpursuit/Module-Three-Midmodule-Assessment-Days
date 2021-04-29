const Cart = ({ checkeoutItem }) => {
    const checkoutList= checkeoutItem.map(product => {
        return (
            //item name price
        <li>{product.name}: {product.price.toFixed(2)}</li>
        )
    })
    return (
        <section>
            <h2>Cart</h2>
            <h3>SubTotal</h3>
            <h3>Tax</h3>
            <h3>Total</h3>
        </section>
    )
}
export default Cart;