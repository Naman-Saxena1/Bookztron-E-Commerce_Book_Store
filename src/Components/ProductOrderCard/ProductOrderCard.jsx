import "./ProductOrderCard.css"
import { useState } from "react"
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom"
import { useToast } from "../../index"

function ProductOrderCard({productDetails})
{
    const navigate = useNavigate()

    const { showToast } = useToast()
    const {
        _id, 
        bookName,
        author,
        originalPrice,
        discountedPrice,
        discountPercent,
        imgSrc, 
        imgAlt,
        badgeText, 
        outOfStock, 
        quantity,
        orderId
    } = productDetails;

    return (
        <div className="card-basic-horizontal">
            <img className="cart-item-book-img" src={imgSrc} alt={imgAlt}/>
            <div id="cart-item-detail" className="card-item-details">

                <h4 id="item-title">{bookName}</h4>
                <p className="item-author">By &nbsp;{author}</p>
    
                <div className="item-cart-quantity">
                    <p className="cart-quantity-para">Quantity : &nbsp;&nbsp;</p>
                    <p>
                        {quantity}
                    </p>
                </div>

                <p className="order-id">Order id: {orderId}</p>
    
                <div className="cart-horizontal-card-btns card-button">
                    <button 
                        className="solid-primary-btn"
                        onClick={event=>{}}
                    >
                        Remove item from Order
                    </button>
                </div>
                <div className="badge-on-card">
                    {badgeText}
                </div>
            </div>
        </div>
    )
}

export { ProductOrderCard }