import {Component} from 'react';

class Checkout extends Component{
    render(){
        return (
            <form>
                <h2>Checkout</h2>
                <label>First Name</label>
                <input type='text'></input>
                <label>Last Name</label>
                <input type="text"></input>
                <label>Email</label>
                <input type="text"></input>
                <label>Credit Card</label>
                <input type="text"></input>
                <label>Zip Code</label>
                <input type="text"></input>
            </form>
        )
    }
}

export default Checkout;