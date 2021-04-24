import React from 'react'

function Checkout() {
    return (
        <div className='Checkout'>
            <h1>Checkout</h1>
            <form action="">
                <label htmlFor="fname">First Name</label><br/>
                <input type="text" name="fname" id="fname"/><br/>
                <label htmlFor="fname">Last Name</label><br/>
                <input type="text" name="lname" id="lname"/><br/>
                <label htmlFor="fname">Email</label><br/>
                <input type="email" name="email" id="email"/><br/>
                <label htmlFor="fname">Credit Card</label><br/>
                <input type="number" name="credit" id="credit"/><br/>
                <label htmlFor="fname">Zip Code</label><br/>
                <input type="number" name="zip-code" id="zip-code"/><br/>
                <button type='submit'>Buy Now</button>
            </form>
        </div>
    )
}

export default Checkout