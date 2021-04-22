import React from 'react'

function CheckOut(props) {

  const {payStore, dollarPrice} = props
  
  const submitForm =(e) =>{
    e.preventDefault()
    const values = document.querySelectorAll('input')
    let zipcode = 0
    let number = 0
    let idx = -1
    let filter = false

    for (let i = 0; i <= 4; i += 1) {
      if (values[i].value === '') {
        idx = i
        filter = false
      } else {
        filter = true
      }
    }

    number = parseInt(values[3].value)
    zipcode = parseInt(values[4].value)

    switch (idx) {
      case -1:
        if (zipcode >= 10000 && number >= 4111111111111111) {
          window.alert(
            `Yay! Purchase complete! You will be charged ${dollarPrice(payStore[2])}.`
          )
          break
        } else if (zipcode >= 10000) {
          window.alert('Credit card number is not valid')
          break
        } else {
          window.alert(`Input is not valid \n Zip code is not valid`)
          break
        }

      case 3:
        window.alert(`Input is not valid \n Zip code is not valid`)
        break

      case 4:
        if (filter === true) {
          window.alert('Credit card is invalid')
          break
        } else {
          window.alert('Input is not valid')
          break
        }

      default:
        window.alert('Input is not valid')
        break
    }
  }


 
    return (
        <form className="CheckOut" onSubmit={submitForm}>
            <h2>Checkout</h2>
            <br />
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" defaultValue=''/>
            <br />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" defaultValue=''/>
            <br />
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" defaultValue=''/>
            <br />
            <label htmlFor="creditCard">Credit Card</label>
            <input type="text" id="creditCard" name="creditCard" defaultValue=''/>
            <br />
            <label htmlFor="zipCode">Zip Code</label>
            <input type="text" id="zipCode" name="zipCode" defaultValue=''/>
            <br />
            <button type="submit">Buy Now</button>
        </form>
    )
}

export default CheckOut
