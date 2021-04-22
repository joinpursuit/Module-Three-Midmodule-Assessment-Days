import React from 'react'
import './Products.css'

export class Checkout extends React.Component {
    state = {
        fname:"",
        lname:"",
        email:'',
        ccard:'',
        zip:''
}

handleChange =(e)=>{
    const{name, value} =e.target;
    this.setState({[name]:value})
    }

    handleCheck =(e)=>{
        e.preventDefault()
        // const {fname, lname, email, ccard, zip } =this.props
        if (
            this.state.fname.length ===0||
            this.state.lname.length ===0||
            this.state.email.length ===0
   
        ){
            window.alert('Input is not valid')
        }else if(this.state.ccard.length<16){
           window.alert ("Credit card number is not valid")

        }else if(this.state.zip.length<5){
            alert('Zip code is not valid' );
        }else{
            alert(`Yah! Purchase complete. You will be charged $${this.props.total.toFixed(2)}`)
        }

    }
    render() {
        const {fname, lname, email, ccard, zip } =this.state
        return (
            <div>
               <h3>Checkout</h3> 
               <br />
               <form onSubmit ={this.handleCheck}>
               <label htmlFor ="fname">First Name</label>
               <br />
               <input
                        type= "text"
                        name ="fname"
                        id ="fname"
                        value= {fname}
                        onChange ={this.handleChange}
                        />
                        <br />
                        <label htmlFor ="lname">Last Name</label>
               <br />
               <input
                        type= "text"
                        name ="lname"
                        id ="lname"
                        value= {lname}
                        onChange ={this.handleChange}
                        />
                        <br />
                        <label htmlFor ="email">Email</label>
                        <input
                        type= "email"
                        name ="email"
                        id ="email"
                        value= {email}
                        onChange ={this.handleChange}
                        />
                        <br />
                        <label htmlFor ="ccard">Credit Card</label>
                        <input
                        type= "ccard"
                        name ="ccard"
                        id ="ccard"
                        value= {ccard}
                        onChange ={this.handleChange}
                        />
                        <br />
                        <label htmlFor ="zip">Zip Code</label>
                        <input
                        type= "zip"
                        name ="zip"
                        id ="zip"
                        value= {zip}
                        onChange ={this.handleChange}
                        />
                        <br />
                        <button> Buy Now</button>
                   </form>
            </div>
        )
    }
}

export default Checkout