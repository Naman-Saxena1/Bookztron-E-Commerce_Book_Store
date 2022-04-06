import "./HorizontalProductCard.css"
import { useState } from "react"
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom"
import { useToast, useCart, useWishlist } from "../../index"

function HorizontalProductCard({productDetails})
{
    const navigate = useNavigate()

    const { showToast } = useToast()
    const { dispatchUserWishlist } = useWishlist()
    const { dispatchUserCart } = useCart()
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
        quantity
    } = productDetails;
    const productdetails = productDetails;

    const [productQuantity, setProductQuantity] = useState(quantity)

    async function onQuantityChange(event)
    {
        setProductQuantity(event.target.value)
        let newQuantity = event.target.value
        let quantityUpdateResponse = await axios.patch(
            `https://bookztron.herokuapp.com/api/cart/${_id}`,
            {
                newQuantity
            },
            {
                headers:
                {
                    'x-access-token': localStorage.getItem('token'),
                }
            }
        )

        if(quantityUpdateResponse.data.status==="ok")
        {
            dispatchUserCart({type: "UPDATE_USER_CART",payload: quantityUpdateResponse.data.user.cart})
            showToast("success","","Item quantity successfully updated!")
        }
        else
        {
            showToast("error","","Something went wrong!")
        }
    }

    async function removeItemFromCart(event)
    {
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
                let cartUpdateResponse = await axios.delete(
                    `https://bookztron.herokuapp.com/api/cart/${productDetails._id}`,
                    {
                        headers:
                        {
                            'x-access-token': localStorage.getItem('token'),
                        }
                    },
                    {
                        productDetails
                    }
                )
                if(cartUpdateResponse.data.status==="ok")
                {
                    dispatchUserCart({type: "UPDATE_USER_CART",payload: cartUpdateResponse.data.user.cart})
                    showToast("success","","Item successfully deleted from cart")
                }
            }
        }
        else
        {
            showToast("warning","","Kindly Login")
        } 
    }

    async function addItemToWishlist()
    {
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
                const wishlistUpdateResponse = await axios.patch(
                    "https://bookztron.herokuapp.com/api/wishlist",
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

    return (
        <div className="card-basic-horizontal">
            <img className="cart-item-book-img" src={imgSrc} alt={imgAlt}/>
            <div id="cart-item-detail" className="card-item-details">

                <h4 id="item-title">{bookName}</h4>
                <p className="item-author">- By &nbsp;{author}</p>
                <p className="price-details">
                                &#8377; {discountedPrice} &nbsp;&nbsp;<del>&#8377; {originalPrice}</del> &nbsp;&nbsp;
                    <span className="discount-on-card">{discountPercent}% off</span>
                </p>
    
                <div className="item-cart-quantity">
                    <p className="cart-quantity-para">Quantity : &nbsp;&nbsp;</p>
                    <div>
                        <input 
                            className="cart-item-quantity-input" 
                            value={productQuantity}
                            onChange={(event)=>onQuantityChange(event)}
                            type="text" 
                            maxLength="3" 
                            autoComplete="off"/>
                    </div>
                </div>
    
                <div className="cart-horizontal-card-btns card-button">
                    <button 
                        className="solid-primary-btn"
                        onClick={event=>removeItemFromCart(event)}
                    >
                        Remove from Cart
                    </button>
                    <button 
                        className="outline-primary-btn"
                        onClick={()=>addItemToWishlist()}
                    >
                        Add to Wishlist
                    </button>
                </div>
                <div className="badge-on-card">
                    {badgeText}
                </div>
            </div>
        </div>
    )
}

export { HorizontalProductCard }