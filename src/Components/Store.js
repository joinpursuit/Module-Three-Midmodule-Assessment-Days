import React from 'react'
import Stored from "./Stored.js"

const Store =( {prodt, handleData})=> {
    
    return (
        <div className="storeItems">
            <ul>
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
            
        </div>
    )
    
}
export default Store