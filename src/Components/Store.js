import React from 'react'
import Stored from "./Stored.js"

const Store =( {prodt, handleData})=> {
    
    return (
        
        <ul className="storeItems">
            {prodt.map((shopping)=>{
                return(
                    <Stored  
                    key = {shopping.id}
                    shopping = {shopping} 
                    handleData={handleData}
                    />
                )
            })}
        </ul>
            
        
    )
    
}
export default Store