import { Component } from 'react';
import formatPrice from '../helpers/formatPrice'

class Checkout extends Component {
    constructor() {
        super()
        this.state = {
            FirstName: '',
            LastName: '',
            Email: '',
            CreditCard: '',
            ZipCode: ''
        };
    }
    
    handleSubmit = (e) =>{
        e.preventDefault()
        const { FirstName, LastName, Email, CreditCard, ZipCode } = this.state
        if(!FirstName || !LastName || !Email || !CreditCard || !ZipCode){
            alert(' Input is not valid')
        }else if(CreditCard.length < 16){
            alert('Credit card number is not valid')
        }else if(ZipCode.length < 5){
            alert('Zip code is not valid')
        }else{
            alert(`Purchase complete. You will be charged ${formatPrice(this.props.total)}`)
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }



    render() {
        const { FirstName, LastName, Email, CreditCard, ZipCode } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Checkout</h2>
                <label htmlFor='FirstName'>First Name</label>
                <input
                    onChange={this.handleChange}
                    type='text'
                    value={FirstName}
                    name='FirstName'
                    id='FirstName'
                />
                <label htmlFor='LastName'>Last Name</label>
                <input
                    onChange={this.handleChange}
                    type='text'
                    value={LastName}
                    name='LastName'
                    id='LastName'
                />
                <label htmlFor='Email'>Email</label>
                <input
                    onChange={this.handleChange}
                    type='text'
                    value={Email}
                    name='Email'
                    id='Email'
                />
                <label htmlFor='CreditCard'>Credit Card</label>
                <input
                    onChange={this.handleChange}
                    type='text'
                    value={CreditCard}
                    name='CreditCard'
                    id='CreditCard'
                />
                <label htmlFor='ZipCode'>Zip Code</label>
                <input
                    onChange={this.handleChange}
                    type='text'
                    value={ZipCode}
                    name='ZipCode'
                    id='ZipCode'
                />
                <button>Buy Now</button>
            </form>
        )
    }
}

export default Checkout;