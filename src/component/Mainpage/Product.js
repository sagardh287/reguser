import React from 'react'
import "./product.css"
export default function Product({id,title,image,price}) {
    return (
        <div className="product">
            <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
                <small>$</small>
                <strong>
                    {price}
                </strong>
            </p>
            </div>

            <img src={image} alt=""></img>
            <button></button>
        </div>
    )
}
