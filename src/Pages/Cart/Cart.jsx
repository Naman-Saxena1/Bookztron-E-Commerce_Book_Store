import "./Cart.css"
import { useEffect } from "react";
import jwt_decode from "jwt-decode"
import axios from "axios";
import { Link } from "react-router-dom"
import { 
    useWishlist, 
    useCart, 
    HorizontalProductCard,
    ShoppingBill 
} from "../../index"
import Lottie from 'react-lottie';
import CartLottie from "../../Assets/Icons/cart.json"

function Cart()
{
    const { userWishlist, dispatchUserWishlist } = useWishlist()
    const { userCart, dispatchUserCart } = useCart()
    let cartObj = {
        loop: true,
        autoplay: true,
        animationData : CartLottie,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }

    useEffect(()=>{
        const token=localStorage.getItem('token')

        if(token)
        {
            const user = jwt_decode(token)
            if(!user)
            {
                localStorage.removeItem('token')
            }
            else
            {
                if(userCart.length===0 || userWishlist.length===0)
                {
                    (async function getUpdatedWishlistAndCart()
                    {
                        let updatedUserInfo = await axios.get(
                        "https://bookztron-server.vercel.app/api/user",
                        {
                            headers:
                            {
                            'x-access-token': localStorage.getItem('token'),
                            }
                        })

                        if(updatedUserInfo.data.status==="ok")
                        {
                            dispatchUserWishlist({type: "UPDATE_USER_WISHLIST",payload: updatedUserInfo.data.user.wishlist})
                            dispatchUserCart({type: "UPDATE_USER_CART",payload: updatedUserInfo.data.user.cart})
                        }
                    })()
                }
            }
        }
        else
        {
            dispatchUserWishlist({type: "UPDATE_USER_WISHLIST",payload: []})
            dispatchUserCart({type: "UPDATE_USER_CART",payload: []})
        }   
    },[])

    return (
        <div className="cart-content-container">
            <h2>{userCart.length} items in Cart</h2>
            {
                userCart.length === 0
                ? (
                    <div className="empty-cart-message-container">
                            <Lottie options={cartObj}
                                height={150}
                                width={150}
                                isStopped={false}
                                isPaused={false}
                            />
                            <h2>Your cart is empty 🙃</h2>
                            <Link to="/shop">
                                <button className=" solid-primary-btn">Go to shop</button>
                            </Link>
                    </div>
                )
                : (
                    <div className="cart-grid">
                        <div className="cart-items-grid">
                            {
                                userCart.map( (productDetails, index)=>    
                                    <HorizontalProductCard key={index} productDetails={productDetails}/>
                                )
                            }
                        </div>
                        <ShoppingBill/>
                    </div>
                )
            }
        </div>
    )
}

export { Cart }