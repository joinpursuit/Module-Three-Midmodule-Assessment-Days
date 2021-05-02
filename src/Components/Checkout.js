import {Component} from 'react';

class Checkout extends Component{
    render(){
        return (
            <form>
                <h2>Checkout</h2>
                <label htmlFor='FirstName'>First Name</label>
                <input type='text' name='FirstName' id='FirstName'></input>
                <label htmlFor='LastName'>Last Name</label>
                <input type="text" name='LastName' id='LastName'></input>
                <label htmlFor='Email'>Email</label>
                <input type="text" name='Email' id='Email'></input>
                <label htmlFor='CreditCard'>Credit Card</label>
                <input type="text" name='CreditCard' id='CreditCard'></input>
                <label htmlFor='ZipCode'>Zip Code</label>
                <input type="text" name='ZipCode' id='ZipCode'></input>
                <button>Buy Now</button>
            </form>
        )
    }
}

export default Checkout;