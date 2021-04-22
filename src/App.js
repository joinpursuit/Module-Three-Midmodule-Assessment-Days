import React, {Component} from "react";
import ProductList from "./Components/ProductList"
import CheckoutForm from "./Components/CheckoutForm"

import "./App.css";

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      productsInCart:[],
      firstName:"",
      lastName:"",
      email:"",
      creditCard:"",
      zipCode:"",
      
    }
  }

  AddToCart = (product) => {
    this.setState({
      productsInCart : [...this.state.productsInCart, product]
      
    })
  }

  handleTextChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    
  }

  validate = (e) => {
    e.preventDefault();

    const {
      firstName, lastName, email, 
      creditCard, zipCode, 
    } = this.state;

    switch(true){
      case firstName === "":
        alert(`Enter first name: Input is not valid`);
        break;
      case lastName === "":
        alert(`Enter last name: Input is not valid`);
        break;
      case !email.includes("@"):
        alert(`Enter valid email: Input is not valid`);
        break;
      case creditCard.length !== 16:
        alert(`Credit card number is not valid`);
        break;
      case zipCode.length !== 5:
        alert(`Zip code is not valid`);
        break;
      default:
        alert(`Purchase complete.`);
    }

  }


  render(){
    const {products} = this.props;
    const {productsInCart, firstName, 
          lastName, email, 
          creditCard, zipCode}
          = this.state;


    return (    
      <div className="App">
         <div className="leftSide">
            <h1>My Garage Sale</h1>
            <ProductList 
              products={products}
              addToCart={this.AddToCart}
            />
          </div>

        <div className="rightSide">
        
          <CheckoutForm 
            productsInCart={productsInCart}
            handleTextChange={this.handleTextChange} 
            validate={this.validate}  
            firstName={firstName}
            lastName={lastName}
            email={email}
            creditCard={creditCard}
            zipCode={zipCode}
          />

        </div>

      </div>
    )
  }
};

