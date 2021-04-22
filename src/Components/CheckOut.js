import React from 'react'

const CheckOut=()=> {
    return (
        <form className='CheckOut'>
            <h2>Checkout</h2>

            <label htmlFor='CustomerFirstName'>First Name</label>
            <input type='text' name='FirstName' id='FirstName'/>

            <label htmlFor='CustomerLastName'>Last Name</label>
            <input type='text' name='LastName' id='LastName'/>

            <label htmlFor='Email'>Email</label>
            <input type='text' name='Email' id='Email'/>

            <label htmlFor='CreditCard'>Credit Card</label>
            <input type='text' name='CreditCard' id='CreditCard'/>

            <label htmlFor='ZipCode'>Zip Code</label>
            <input type='text' name='ZipCode' id='ZipCode'/>

        </form>
    )
}

export default CheckOut
