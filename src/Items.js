import React, { Component } from 'react'

export default class Items extends Component {
    render() {
     const  jsxItems=[]
    
      const itemsList= this.props.items
      for(let i=0; i<itemsList.length; i++){
          const li = <li>{itemsList[i].name}</li>
          jsxItems.push(li)
      }

console.log(this.props.items)
        return (
            <div>
                {jsxItems}
             
                
        
                
            </div>
        )
    }
}
