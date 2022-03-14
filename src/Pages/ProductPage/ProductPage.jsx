import React from "react";
import "./ProductPage.css"
import { useParams } from "react-router-dom";

function ProductPage()
{
    const { id } = useParams()
    const productDetailsOnStorage = localStorage.getItem(`${id}`)
    const productDetails = JSON.parse(productDetailsOnStorage)
    const {
        bookname,
        author,
        originalprice,
        discountedprice,
        discountpercent,
        imgsrc, 
        imgalt,
        badgetext, 
        outOfStock,
        rating, 
        description
    } = productDetails
    

    return (
        <div className="product-page-container">
            <div className="product-page-item">
                <img className="bookcover-image" src={imgsrc} alt={imgalt}></img>
                <div className="item-details">
                    <h2>{bookname}</h2>
                    <hr></hr>
                    <p><b>Author : </b> &nbsp;&nbsp; <span>{author}</span> </p>
                    <p className="item-description"><b>Description : </b> &nbsp;&nbsp; <span>{description}</span> </p>
                    <p className="item-rating"><b>Rating : </b> &nbsp;&nbsp; <span>{rating}</span> </p>
                    <h3 className="item-price-details">Rs. {discountedprice} &nbsp;&nbsp;<del>Rs. {originalprice}</del> &nbsp;&nbsp;
                        <span className="discount-on-item">({discountpercent}% off)</span>
                    </h3>
                    {
                        outOfStock === true && (
                            <p className="out-of-stock-text">Item is currently out of stock</p>
                        )
                    }
                    {
                        outOfStock === true 
                        ? (
                            <div className="item-buttons">
                                <button className="item-notify-me-btn solid-primary-btn">Notify Me</button>
                            </div>
                        )
                        : (
                            <div className="item-buttons">
                                <button className="solid-primary-btn">Add to wishlist</button>
                                <button className="solid-warning-btn">Add to cart</button>
                            </div>
                        )
                    }
                    
                </div>
            </div>
        </div>
    )
}

export { ProductPage }