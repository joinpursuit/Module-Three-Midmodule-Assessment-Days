import { React, Component } from 'react'

class CheckOut extends Component {
    constructor() {
        super()
        this.state={
            value: "",
            firstName: '',
            lastName: '',
            email: '',
            creditCard: '',
            zipCode: ''
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        const { firstName, lastName, email, creditCard, zipCode} =this.state
        if (firstName.length> 1 && lastName.length> 1 && email.length>1 &&creditCard.length!=16 && zipCode.length===5) {
           alert('Credit card number is not valid')
          } else if(firstName.length> 1 && lastName.length> 1 && email.length>1 && creditCard.length===16 && zipCode.length!=5) {
           alert('Zip code is not valid')
          } else if (firstName.length> 1 && lastName.length> 1&& email.length>1 &&creditCard.length===16 && zipCode.length===5){
            alert(`Yey, Purchase complete You will be charged $${this.props.total}`)
          } else {
            alert(`Input is not valid`)
          }
    }
    handleChange = (e)=>{
        const { name, value} = e.target
        
        this.setState({ [name]: value})
    }
    render() {
        
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Checkout</h2>

                <label>
                    First Name
                <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                </label>
                <label>
                    Last Name
                <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                </label>
                <label>
                    Email
                <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                </label>
                <label>
                    Credit Card
                <input type="text" name="creditCard" value={this.state.creditCard} onChange={this.handleChange}/>
                </label>
                <label>
                    Zip Code
                <input type="text" name="zipCode" value={this.state.zipCode} onChange={this.handleChange}/>
                </label>
                <button type="submit">Buy Now</button>
            </form>
        )
    }
}

export default CheckOut;