import React, { Component } from 'react'


export default class CardInfo extends Component {
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
    handleBTN = (e) =>{
        e.preventDefault()
        const{total} = this.props
        const {firstName, lastName, email, creditCard, zipCode} = this.state
        if(!firstName || !lastName || !email || !creditCard || !zipCode){
            window.alert('Input is not valid.')
        }else if(creditCard.length < 16){
            window.alert(`Input is not valid. \nCredit card number is not valid.`)
        }else if(zipCode.length < 5){
            window.alert(`Input is not valid. \nZip code is not valid.`)
        }else{
            window.alert(`"Purchase complete \n You will be charge $${total.toFixed(2)}`)
        }

    }
    handlePayment =(e)=>{
        e.preventDefault()
       
        this.setState({
          [e.target.name]: e.target.value
        })

    }
    render() {
        console.log(this.state.firstName)
        return (
            <div>
                <form className="form" onSubmit={this.handleBTN}>
                    <h2>Checkout</h2>
                    <label htmlFor={'firstName'}>First Name</label>
                    <input  
                     id={'firstName'}
                     name = 'firstName' 
                     value={this.firstName} 
                     onChange={this.handlePayment}/>

                    <label htmlFor={'lastName'}>Last Name</label>
                    <input 
                    id={'lastName'}  
                    name = 'lastName' 
                    value={this.lastName}  
                    onChange={this.handlePayment}/>

                    <label htmlFor={'email'}>Email</label>
                    <input 
                    id={'email'}  
                    name = 'email' 
                    value={this.email}  
                    onChange={this.handlePayment}/>

                    <label htmlFor={'creditCard'}>Credit Card</label>
                    <input 
                    id={'creditCard'} 
                    name = 'creditCard' 
                    value={this.creditCard} 
                     onChange={this.handlePayment}/>

                    <label htmlFor={'zipCode'}>Zip Code</label>
                    <input 
                    id={'zipCode'}  
                    name = 'zipCode'
                    value={this.zipCode} 
                    onChange={this.handlePayment}/>

                    <button type='submit'>Buy Now</button>
                </form>   
            </div>
        )
    }
}
