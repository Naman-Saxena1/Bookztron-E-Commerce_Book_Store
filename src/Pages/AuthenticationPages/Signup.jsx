import React, { useState } from "react"
import "./UserAuth.css"
import { Link } from "react-router-dom"

function Signup()
{
    const [termsAndConditionsCheckbox, setTermsAndConditionsCheckbox] = useState(false)

    return (
        <div className="user-auth-content-container">
            <form className="user-auth-form">
                <h2>Signup</h2>
                
                <div className="user-auth-input-container">
                    <label htmlFor="user-auth-input-name"><h4>Name </h4></label>
                    <input id="user-auth-input-name" className="user-auth-form-input" type="text" placeholder="Name" required/>
                </div>
                
                <div className="user-auth-input-container">
                    <label htmlFor="user-auth-input-email"><h4>Email address</h4></label>
                    <input id="user-auth-input-email" className="user-auth-form-input" type="email" placeholder="Email" required/>
                </div>

                <div className="user-auth-input-container">
                    <label htmlFor="user-auth-input-password"><h4>Password</h4></label>
                    <input id="user-auth-input-password" className="user-auth-form-input" type="password" placeholder="Password" required/>
                </div>

                <div className="accept-terms-container">
                    <input 
                        type="checkbox" 
                        id="accept-terms" 
                        checked={termsAndConditionsCheckbox}
                        onClick={()=>setTermsAndConditionsCheckbox(prevState=>!prevState)}
                    />
                    <label htmlFor="accept-terms">I accept all terms and conditions</label>
                </div>

                <button 
                    type="submit" 
                    className="solid-success-btn form-user-auth-submit-btn" 
                    disabled={termsAndConditionsCheckbox?"":"true"}
                >
                    Create New Account
                </button>

                <div className="existing-user-container">
                    <Link to="/login" className="links-with-blue-underline existing-user-link" id="existing-user-link">
                        Already have an account &nbsp;
                    </Link>
                </div>

            </form>
        </div>
    )
}

export { Signup }