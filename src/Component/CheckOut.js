import React from 'react'

class CheckOut extends React.Component{
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            creditCard: '',
            zipCode: ''
        }
    }
    allFieldsValid = () => {
        const { firstName, lastName, email, creditCard, zipCode } = this.state;
        return firstName && lastName && email && creditCard && zipCode;
      }
    handleSubmit = (e) =>{
        e.preventDefault()
        if (this.allFieldsValid()) {
            alert(`Yey, Purchase was complete! You will be charged $`);
          } else {
            alert(`Item is not valid`)
          }
    }
    handleChange = (e)=>{
        
        this.setState({ [e.target.name]: e.target.value})
    }
 
    render(){
        const { firstName, lastName, email, creditCard, zipCode } = this.state
    return (
        <div className="CheckOut">
            <h2>CheckOut</h2>
            <form onSubmit={this.handleSubmit}>
                <label>
                    First Name:
                <input 
                type="text" 
                name="firstName"
                value={this.state.firstName} 
                onChange={this.handleChange}/>
                </label>
                <label>
                    Last Name:
                    <input 
                    type="text" 
                    name="lastName" 
                    value={this.state.lastName} 
                    onChange={this.handleChange} />
                </label>
                <label>
                    Email:
                    <input 
                    type="text"  
                    name="email" 
                    value={this.state.email} 
                    onChange={this.handleChange} />
                </label>
                <label>
                    Credit Card:
                    <input 
                    type="text" 
                    name="creditCard" 
                    value={this.state.creditCard} 
                    onChange={this.handleChange} />
                </label>
                <label>
                    Zip Code:
                    <input 
                    type="text" 
                    name="zipCode" 
                    value={this.state.zipCode} 
                    onChange={this.handleChange} />
                </label>
                <button type="submit">Teach class</button>

            </form>
        </div>
        )
    }
}

export default CheckOut