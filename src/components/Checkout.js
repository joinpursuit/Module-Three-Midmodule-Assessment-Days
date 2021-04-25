import React from 'react'

function Checkout(props) {

    return (
        <div className='Checkout'>
            <h1>Checkout</h1>
            <form onSubmit={props.handleSubmit} action="">
                <label htmlFor="fname">First Name</label><br/>
                <input onInput={props.handleFname} type="text" name="fname" id="fname"/><br/>
                
                <label htmlFor="lname">Last Name</label><br/>
                <input onInput={props.handleLname} type="text" name="lname" id="lname"/><br/>
                
                <label htmlFor="email">Email</label><br/>
                <input onInput={props.handleEmail} type="email" name="email" id="email"/><br/>
                
                <label htmlFor="credit-card">Credit Card</label><br/>
                <input onInput={props.handleCreditCard} type="text" name="credit-card" id="credit-card"/><br/>
                
                <label htmlFor="zip-code">Zip Code</label><br/>
                <input onInput={props.handleZipCode} type="number" name="zip-code" id="zip-code"/><br/>
                
                <button type='submit'>Buy Now</button>
            </form>
        </div>
    )
}

export default Checkout