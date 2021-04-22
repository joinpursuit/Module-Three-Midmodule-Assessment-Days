import React, { Component } from 'react'

export default class Cart extends Component {
    constructor() {
        super()
        
    } 
    
    itemsAdded = () => {
        // let cart = document.querySelector("#cart")
        // let item = document.createElement('li')
        // item.appendChild(createTextNode({Item}))
        this.setState ({})
    }
    render() {
        return (
            <div>
                <ul id='cart'>
                    
                </ul>
                <div>Subtotal</div>
                <div>Tax</div>
                <div>Total</div>
        </div>
        )
    }
}
