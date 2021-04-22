import "./App.css"
import productData from "./data/productData.js"
import React from 'react'
import Store from "./Components/Store"
import Shops from "./Components/Shops"
import CardInfo from "./Components/CardInfo"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      products: productData,
      items: []
    }
    
  }
  handleData = (shopping)=>{
    let item = this.state.items
    this.setState({ 
      items: item.concat(shopping)
    })
  }
  
  render() {
    console.log(this.state.items)
    console.log(this.state.products)
    const {items} =this.state
    let sub = items.reduce((a, b)=>a+b.price, 0)
    let taxes = items.reduce((a, b)=>a+b.price, 0)*0.05
    let total = sub + taxes

    return (
      <div className= 'App'>
        <div className='Store'>
          <h1>My Garage Sale</h1>
          <Store prodt={this.state.products}  handleData={this.handleData}/>
        </div>
        <div className="Shops-Card">
          <Shops items={this.state.items} taxes={taxes || 0} sub={sub || 0} total={total || 0}/>
          <CardInfo pay={this.state.items.length}  total={total || 0}/>
        </div>
      </div>
    )
  }
}

export default  App