import React,{ useEffect, useState} from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import jwt_decode from "jwt-decode";
import './ProductCard.css'
import { useToast } from '../../Context/toast-context';
import { useWishlist } from '../../Context/wishlist-context';

export default function ProductCard({ productdetails }) 
{
    const navigate = useNavigate()

    const { userWishlist, dispatchUserWishlist } = useWishlist()
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
        outOfStock
    } = productdetails
    const [wishlistHeartIcon, setWishlistHeartIcon] = useState("fa-heart-o")
    const [wishlistBtn, setWishlistBtn]             = useState("add-to-wishlist-btn")

    useEffect(()=>{
        const index = userWishlist.findIndex(product=> {
            return product._id === productdetails._id
        })

        if(index!==-1)
        {
            setWishlistHeartIcon("fa-heart")
            setWishlistBtn("added-to-wishlist-btn")
        }
        else
        {
            setWishlistHeartIcon("fa-heart-o")
            setWishlistBtn("add-to-wishlist-btn")
        }
    },[userWishlist, productdetails._id, setWishlistHeartIcon, setWishlistBtn])

    async function addOrRemoveItemToWishlist()
    {
        if(wishlistHeartIcon==="fa-heart-o" && wishlistBtn ==="add-to-wishlist-btn")
        {
            //Item not present in wishlist, add it
            const token=localStorage.getItem('token')

            if(token)
            {
                const user = jwt_decode(token)
                
                if(!user)
                {
                    localStorage.removeItem('token')
                    showToast("warning","","Kindly Login")
                    navigate('/login')
                }
                else
                {
                    let wishlistUpdateResponse = await axios.patch(
                        "https://bookztron-server.vercel.app/api/wishlist",
                        {
                            productdetails
                        },
                        {
                            headers:
                            {
                                'x-access-token': localStorage.getItem('token'),
                            }
                        }
                    )
            
                    if(wishlistUpdateResponse.data.status==="ok")
                    {
                        setWishlistHeartIcon("fa-heart")
                        setWishlistBtn("added-to-wishlist-btn")
                        dispatchUserWishlist({type: "UPDATE_USER_WISHLIST",payload: wishlistUpdateResponse.data.user.wishlist})
                        showToast("success","","Item successfully added to wishlist")
                    }
                }
            }
            else
            {
                showToast("warning","","Kindly Login")
            }   
        }
        else
        {
            //Item present in wishlist, remove it
            const token=localStorage.getItem('token')

            if(token)
            {
                const user = jwt_decode(token)
                
                if(!user)
                {
                    localStorage.removeItem('token')
                    showToast("warning","","Kindly Login")
                    navigate('/login')
                }
                else
                {
                    let wishlistUpdateResponse = await axios.delete(
                        `https://bookztron-server.vercel.app/api/wishlist/${productdetails._id}`,
                        {
                            headers:
                            {
                                'x-access-token': localStorage.getItem('token'),
                            }
                        },
                        {
                            productdetails
                        }
                    )
                    if(wishlistUpdateResponse.data.status==="ok")
                    {
                        setWishlistHeartIcon("fa-heart-o")
                        setWishlistBtn("add-to-wishlist-btn")
                        dispatchUserWishlist({type: "UPDATE_USER_WISHLIST",payload: wishlistUpdateResponse.data.user.wishlist})
                        showToast("success","","Item successfully deleted from wishlist")
                    }
                }
            }
            else
            {
                showToast("warning","","Kindly Login")
            }   
        }    
    }
    
    return (
        <Link 
            to={`/shop/${_id}`}  
            onClick={() => localStorage.setItem(`${_id}`, JSON.stringify(productdetails))}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="card-basic">
                <img src={imgSrc} alt={imgAlt}/>
                <div className="card-item-details">
                    <div className="item-title">
                        <h4>{bookName}</h4>
                    </div>
                    <h5 className="item-author">- By  &nbsp;{author}</h5>
                    <p><b>Rs. {discountedPrice}   &nbsp;&nbsp;</b><del>Rs. {originalPrice}</del> &nbsp;&nbsp;
                        <span className="discount-on-card">({discountPercent}% off)</span>
                    </p>
                    <div className="card-button">
                        <button 
                            onClick={(event)=>{
                                event.preventDefault();
                                event.stopPropagation();
                                addOrRemoveItemToWishlist()
                            }} 
                            className={`card-icon-btn ${wishlistBtn} outline-card-secondary-btn`}>
                                <i className={`fa fa-x ${wishlistHeartIcon}`} aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className="badge-on-card">
                        {badgeText}
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