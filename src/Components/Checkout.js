import { Component } from 'react';

export default class Checkout extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            creditCard: '',
            zipCode: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { firstName, lastName, email, creditCard, zipCode } = this.state;
        const { total } = this.props

        if(!firstName || !lastName || !email) {
            alert('Input is not valid')
            return;
        }
        if(creditCard.length !== 16) {
            alert('Credit card number is not valid')
            return;
        }
        if(zipCode.length !== 5) {
            alert('Zip code is not valid')
            return;
        }
        alert(`Purchase complete
        $${total.toFixed(2)}`)
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    render() {
        const { firstName, lastName, email, creditCard, zipCode } = this.state;
        
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Checkout</h2>

                <label htmlFor='firstName'>First Name</label>
                <input 
                    onChange={this.handleChange}
                    value={firstName}
                    name='firstName'
                    type='text'
                    id='firstName'
                />

                <label htmlFor='lastName'>Last Name</label>
                <input 
                    onChange={this.handleChange}
                    value={lastName}
                    name='lastName'
                    type='text'
                    id='lastName'
                />

                <label htmlFor='email'>Email</label>
                <input 
                    onChange={this.handleChange}
                    value={email}
                    name='email'
                    type='text'
                    id='email'
                />

                <label htmlFor='creditCard'>Credit Card</label>
                <input 
                    onChange={this.handleChange}
                    value={creditCard}
                    name='creditCard'
                    type='text'
                    id='creditCard'
                />

                <label htmlFor='zipCode'>Zip Code</label>
                <input 
                    onChange={this.handleChange}
                    value={zipCode}
                    name='zipCode'
                    type='text'
                    id='zipCode'
                />

                <button>Buy Now</button>
            </form>
        );
    };
};
