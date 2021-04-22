import React, { Component } from 'react'

export default class CardInfo extends Component {
    constructor(){
        super()
        this.state ={
            FirstName: '',
            LastName: '',
            Email: '',
            CreditCard: '',
            Zipcode: ''
        }
    }
    handleBTN = (e) =>{
        e.preventDefault()
        const{total} = this.props
        const {FirstName, LastName, Email, CreditCard, Zipcode} = this.state
        if(!FirstName || !LastName || !Email || !CreditCard || !Zipcode){
            alert("Input is not Valid")
        }else if(CreditCard.length < 16){
            alert("Credit card number is not valid")
        }else if(Zipcode.length < 5){
            alert("Zip code is not valid")
        }else{
            alert(`"Purchase complete \n You will be charge $${total.toFixed(2)}`)
        }

    }
    handlePayment =(e)=>{
        e.preventDefault()
       
        this.setState({
          [e.target.name]: e.target.value
        })

    }
    render() {
        console.log(this.state.FirstName)
        return (
            <div>
                <form className="form" onSubmit={this.handleBTN}>
                    <h2>Checkout</h2>
                    <label htmlFor={'FirstName'}>First Name</label>
                    <input  
                     id={'FirstName'}
                     name = 'FirstName' 
                     value={this.FirstName} 
                     onChange={this.handlePayment}></input>
                    <label htmlFor={'LastName'}>Last Name</label>
                    <input 
                    id={'LastName'}  
                    name = 'LastName' 
                    value={this.LastName}  
                    onChange={this.handlePayment}></input>
                    <label htmlFor={'Email'}>Email</label>
                    <input 
                    id={'Email'}  
                    name = 'Email' 
                    value={this.Email}  
                    onChange={this.handlePayment}></input>
                    <label htmlFor={'CreditCard'}>Credit Card</label>
                    <input 
                    id={'CreditCard'} 
                    name = 'CreditCard' 
                    value={this.CreditCard} 
                     onChange={this.handlePayment}></input>
                    <label htmlFor={'Zipcode'}>Zip Code</label>
                    <input 
                    id={'Zipcode'}  
                    name = 'Zipcode'
                    value={this.Zipcode} 
                    onChange={this.handlePayment}></input>
                    <button type='submit'>Buy Now</button>
                </form>   
            </div>
        )
    }
}
