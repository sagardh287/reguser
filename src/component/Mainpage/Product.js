import React from 'react'
import "./product.css"
export default function Product({image}) {
    return (
        <div className="product">
            <img src={image} alt=""></img>        
        </div>
    )
}
