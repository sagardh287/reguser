import React from 'react'
import "./main.css"
import Product from './Product'

export default function main() {
    return (
        <div className="banner">
                    <img src="Homebanner1.jpg" className="img1"></img>
            <div className="home_product_row">
                <Product 
                    id="123456"
                    title="dadkhd"
                    image="favicon.ico"
                    price="1200"
                    /> 

                    <Product 
                    id="113"
                    title="dsad"
                    image="favicon.ico"
                    price="1200"
                    />
                </div> 
                <div className="home_product_row">
                <Product 
                    id="123456"
                    title="dadkhd"
                    image="favicon.ico"
                    price="1200"
                    /> 

                    <Product 
                    id="113"
                    title="dsad"
                    image="favicon.ico"
                    price="1200"
                    />
                     <Product 
                    id="113"
                    title="dsad"
                    image="favicon.ico"
                    price="1200"
                    />
                </div> 
        </div>
       
       
    )
}
