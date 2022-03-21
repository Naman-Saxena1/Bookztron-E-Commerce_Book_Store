import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom"
import { useUserLogin } from "../../Context/user-login-context"
import { useToast } from "../../Context/toast-context"

function Navbar() {

    const { userLoggedIn, setUserLoggedIn } = useUserLogin()
    const { showToast } = useToast()

    function logoutUser()
    {
        localStorage.removeItem('token')
        showToast("success","","Logged out successfully")
        setUserLoggedIn(false)
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
                    userLoggedIn===true
                    ? (
                        <button onClick={logoutUser} className="navbar-login-btn solid-primary-btn">Logout</button>
                    )
                    : (
                        <Link to="/login">
                            <button className="navbar-login-btn solid-primary-btn">Login</button>
                        </Link>
                    )
                }
                <button id="my-wishlist-btn" className="icon-btn">
                    <div className="icon-count-badge">
                        <i className="fa fa-heart-o fa-x" aria-hidden="true" ></i>
                        <span className="count-badge-x">4</span>
                    </div>
                </button>
                <button id="my-cart-btn" className="icon-btn">
                    <div className="icon-count-badge">
                        <i className="fa fa-shopping-cart fa-x" aria-hidden="true" ></i>
                        <span className="count-badge-x">2</span>
                    </div>
                </button>
            </div>
        </div>
    )
}

export {Navbar};