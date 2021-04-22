import React from 'react'

export default function Checkout() {
    return (
        <div>
            <h1>Checkout</h1>
            <form>
                <label htmlFor="first">First Name</label>
                <input
                    type="text"
                    name='first'/>
                <label htmlFor="last">Last Name</label>
                <input
                    type="text"
                    name='last'/>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name='email'/>
                <label htmlFor="credit">Credit Card</label>
                <input
                    type="text"
                    name='credit'/>
                <label htmlFor="zip">Zip Code</label>
                <input
                    type="text"
                    name='zip'/>
                
                <button
                    type="submit"
                    value= 'Buy Now' 
                />
            </form>
        </div>
    )
}
