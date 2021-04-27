const CartStatus = ({ cart, subTotal, tax, total }) => {
    const itemsAdded = cart.map(item => {
        return (
            <li key={item.id}>
                {item.name}: ${item.price.toFixed(2)}
            </li>
        );
    });

    return (
        <section>
            <h2>Cart</h2>
            <ul>{itemsAdded}</ul>
            <h3>Subtotal: ${subTotal.toFixed(2)}</h3>
            <h3>Tax: ${tax.toFixed(2)}</h3>
            <h3>Total: ${total.toFixed(2)}</h3>
        </section>
    );
};

export default CartStatus;