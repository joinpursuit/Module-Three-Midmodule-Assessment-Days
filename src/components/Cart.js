import React, { Component } from 'react'

export default class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ul: '',
            

        }
    } 
    
    itemsAdded = (e) => {
        this.setState(
            { ul: e.target.innerHTML}
        )
    }
    render() {
        return (
            <div>
                <ul>
                    
                </ul>
                <div>Subtotal</div>
                <div>Tax</div>
                <div>Total</div>
        </div>
        )
    }
}
