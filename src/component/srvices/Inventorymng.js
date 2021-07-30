import React from 'react'
import "./service.css";

export default function Inventorymng() {
    return (
        <div className="banner">
            <div className="home_product_row"  style={{backgroundColor:"#b3dee5"}}>
                <div className="home_product_row_conent">
                    <h1>
                        Inventory Management</h1>
                    <p>
                        Managing your “raw materials” is one of the key component
                        for both “taste” as well as for “economy” and with the dashboard,
                        you can now manage your inventories and all the details regarding it.
                        So you can now focus on your core business of creating great taste.
                    </p>
                </div>
                <div className="home_product_row_img">
                    <img className="product_image" src="images/inventory.jpg"></img>
                </div>
            </div>
        </div>
    )
}
