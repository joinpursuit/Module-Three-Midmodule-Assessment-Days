import AddToCart from "./AddToCart"

import "./CheckOutForm.css";

const CheckOutForm = (props) => {
    const {
        productsInCart,
        handleTextChange, validate, 
        firstName, lastName, email,
        creditCard, zipCode    
    } = props;
  return (
      <>
    <AddToCart productsInCart={productsInCart} />
    
    <form className="CheckOutForm" onSubmit={validate}>
        <h2>Checkout</h2>

        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" value={firstName} onChange={handleTextChange}/>
        
        <br/>

        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName" value={lastName} onChange={handleTextChange}/>
        
        <br/>

        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" value={email} onChange={handleTextChange}/>
        
        <br/>

        <label htmlFor="creditCard">Credit Card</label>
        <input type="text" name="creditCard" id="creditCard" value={creditCard} onChange={handleTextChange}/>
        
        <br/>

        <label htmlFor="zipCode">Zip Code</label>
        <input type="text" name="zipCode" id="zipCode" value={zipCode} onChange={handleTextChange}/>
        
        <br/>

        <button type="submit">Buy Now</button>
    </form>
    </>
  );
};

export default CheckOutForm;
