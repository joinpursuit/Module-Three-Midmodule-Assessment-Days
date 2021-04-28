import { render } from "@testing-library/react"
import { Component } from "react"
class Checkout extends Component {
    constructor() {
        super()
    }
    render () {
        return <>
        <label htmlFor="">First Name</label>
        <input type="text"/>

        <label htmlFor="">Last Name</label>
        <input type="text"/>

        <label htmlFor="">Email</label>
        <input type="text"/>

        <label htmlFor="">Credit Card</label>
        <input type="text"/>

        <label htmlFor="">Zip Code</label>
        <input type="text"/>
        
        <button>Buy Now</button>
        </>
    }
}
