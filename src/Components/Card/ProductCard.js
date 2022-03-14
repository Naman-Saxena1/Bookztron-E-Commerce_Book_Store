import React from 'react'
import { Link } from "react-router-dom"

export default function ProductCard(props) 
{
    let {productdetails} = props;

    let {id, bookname,author,originalprice,discountedprice,discountpercent,imgsrc, imgalt,badgetext, outOfStock} = productdetails
    return (
        <Link 
            to={`/shop/${id}`}  
            onClick={() => localStorage.setItem(`${id}`, JSON.stringify(productdetails))}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="card-basic">
                <img src={imgsrc} alt={imgalt}/>
                <div className="card-item-details">
                    <div className="item-title">
                        <h4>{bookname}</h4>
                    </div>
                    <h5 className="item-author">- By  &nbsp;{author}</h5>
                    <p><b>Rs. {discountedprice}   &nbsp;&nbsp;</b><del>Rs. {originalprice}</del> &nbsp;&nbsp;
                        <span className="discount-on-card">({discountpercent}% off)</span>
                    </p>
                    <div className="card-button">
                        <button 
                            onClick={(event)=>{
                                event.preventDefault();
                                console.log("Add this item to wishlist!")
                            }} 
                            className="card-icon-btn add-to-wishlist-btn outline-card-secondary-btn">
                                <i className="fa fa-heart-o fa-x" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className="badge-on-card">
                        {badgetext}
                    </div>
                    {
                        outOfStock && (
                            <div className="card-text-overlay-container">
                                    <p>Out of Stock</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </Link>
    )
}

export { ProductCard };