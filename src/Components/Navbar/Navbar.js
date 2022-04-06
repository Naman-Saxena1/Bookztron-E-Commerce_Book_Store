import React, { useEffect } from 'react'
import './Navbar.css'
import { Link } from "react-router-dom"
import jwt_decode from "jwt-decode";
import { useUserLogin, useToast, useWishlist, useCart } from "../../index"
import { BsShopWindow } from "react-icons/bs"

function Navbar() {

    const { userWishlist, dispatchUserWishlist } = useWishlist()
    const { userCart, dispatchUserCart } = useCart()
    const { setUserLoggedIn } = useUserLogin(false)
    const { showToast } = useToast()

    useEffect(()=>{
        const token=localStorage.getItem('token')
        if(token)
        {
            const user = jwt_decode(token)
            
            if(!user)
            {
                localStorage.removeItem('token')
                setUserLoggedIn(false)
            }
            else
            {
                setUserLoggedIn(true)
            }
        }
    },[])

    useEffect(()=>{
        function handleInvalidToken() {
            if(localStorage.getItem('token')!==null)
            {
                setUserLoggedIn(true)
            }
            else
            {
                setUserLoggedIn(false)
                dispatchUserWishlist({type:"UPDATE_USER_WISHLIST",payload:[]})
                dispatchUserCart({type:"UPDATE_USER_CART",payload:[]})
            }
        }
        window.addEventListener("storage",handleInvalidToken)

        return function cleanup() {
            window.removeEventListener('storage', handleInvalidToken)
        }
    },[userWishlist,userCart])

    function logoutUser()
    {
        localStorage.removeItem('token')
        dispatchUserWishlist({type:"UPDATE_USER_WISHLIST",payload:[]})
        dispatchUserCart({type:"UPDATE_USER_CART",payload:[]})
        setUserLoggedIn(false)
        localStorage.clear()
        showToast("success","","Logged out successfully")
    }
    
    return (
        <div className="top-bar">
            <div className="left-topbar-container">
                {/* <button id="top-bar-ham-menu-btn" className="icon-btn"><i className="fa fa-bars" aria-hidden="true"></i></button> */}
                <Link to="/">
                    <h2 className="top-bar-brand-name">Bookztron</h2>
                </Link>
                <div className="search-bar">
                    <input className="search-bar-input" placeholder="Search"/>
                    <button id="search-bar-btn">
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
            <div className="right-topbar-container">
                {
                    localStorage.getItem('token')!==null
                    ? (
                        <button onClick={logoutUser} className="navbar-login-btn solid-primary-btn">Logout</button>
                    )
                    : (
                        <Link to="/login">
                            <button className="navbar-login-btn solid-primary-btn">Login</button>
                        </Link>
                    )
                }
                <Link to="/shop">
                    <button className="icon-btn">
                        <div>
                            <BsShopWindow/>
                        </div>
                    </button>
                </Link>
                <Link to="/wishlist">
                    <button className="icon-btn">
                        <div className="icon-count-badge">
                            <i className="fa fa-heart-o fa-x" aria-hidden="true" ></i>
                            {
                                userWishlist.length!==0
                                && (<span className="count-badge-x">{userWishlist.length}</span>)
                            }
                        </div>
                    </button>
                </Link>
                <Link to="/cart">
                    <button className="icon-btn">
                        <div className="icon-count-badge">
                            <i className="fa fa-shopping-cart fa-x" aria-hidden="true" ></i>
                            {
                                userCart.length!==0
                                && (<span className="count-badge-x">{userCart.length}</span>)
                            }
                        </div>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export {Navbar};