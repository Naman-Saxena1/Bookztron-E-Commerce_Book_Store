import "./ShoppingBill.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCart, useToast, useOrders } from "../../index"
import axios from "axios"
import { loadRazorpayScript } from "../../UtilityFunctions/loadRazorpayScript"

function ShoppingBill()
{
    const navigate = useNavigate()
    const { userCart, dispatchUserCart } = useCart()
    const { showToast } = useToast()
    const { dispatchUserOrders }= useOrders()
    let totalDiscount = 0, totalBill = 0, finalBill = 0;
    const [ couponName, setCouponName ] = useState("")

    userCart.forEach(product=>{
        let discountOnCurrentProduct = ( (product.originalPrice - product.discountedPrice) * product.quantity )
        totalDiscount = totalDiscount + discountOnCurrentProduct
        totalBill = totalBill + ( product.discountedPrice * product.quantity )
    })

    if(couponName==="BOOKS200")
    {
        finalBill = totalBill - 200;
    }
    else
    {
        finalBill = totalBill;
    }

    async function displayRazorPay()
    {
        const res = await loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js")

        if(!res)
        {
            showToast("error","","Razorpay SDK failed to load, kindly check internet connection!")
            return;
        }

        let finalBillAmount = (finalBill*100).toString()

        const dataResponse = await axios.post(
            "https://bookztron-server.vercel.app/api/razorpay",
            {
                finalBillAmount
            }
        )

        let data = dataResponse.data

        var options = {
            "key": "rzp_test_hyc3ht0ngvqOD5", 
            "amount": data.amount, 
            "currency": data.currency,
            "name": "Bookztron",
            "description": "Thank you for shopping!",
            "image": "https://raw.githubusercontent.com/Naman-Saxena1/Bookztron-E-Commerce_Book_Store/development/public/favicon-icon.png",
            "order_id": data.id,
            "handler": async function (response){
                showToast("success","","Payment Successful! 😎")
                showToast("success","","Order added to your bag!")
                let newOrderItemsArray = userCart.map(orderItem=>{
                    return {...orderItem, orderId: data.id}
                })
                let ordersUpdatedResponse = await axios.post(
                    "https://bookztron-server.vercel.app/api/orders",
                    {
                        newOrderItemsArray
                    },
                    {
                        headers : {'x-access-token': localStorage.getItem('token')}
                    }
                )
                let emptyCartResponse = await axios.patch(
                    "https://bookztron-server.vercel.app/api/cart/empty/all",
                    {},
                    {
                        headers : {'x-access-token': localStorage.getItem('token')}
                    }
                )
                if(emptyCartResponse.data.status==='ok')
                {
                    dispatchUserCart({type: "UPDATE_USER_CART",payload: []})
                }
                if(ordersUpdatedResponse.data.status==='ok')
                {
                    dispatchUserOrders({type: "UPDATE_USER_ORDERS",payload: ordersUpdatedResponse.data.user.orders})
                    navigate('/orders')
                }
            }
        };
        var paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    return (
        <div className="cart-bill">
            <h2 className="bill-heading">Bill Details</h2>

            <hr></hr>
            {
                userCart.map(product=>{

                    return (
                        <div key={product._id} className="cart-price-container">
                            <div className="cart-item-bookname">
                                <p>{product.bookName}</p>
                            </div>
                            <div className="cart-item-quantity">
                                <p>X {product.quantity}</p>
                            </div>
                            <div className="cart-item-total-price" id="price-sum">
                                <p>&#8377;{product.discountedPrice * product.quantity}</p>
                            </div>
                        </div>
                    )
                })
            }
            
            <hr></hr>

            <div className="cart-discount-container">
                <div className="cart-item-total-discount">
                    <p>Discount</p>
                </div>
                <div className="cart-item-total-discount-amount" id="price-sum">
                    <p>&#8377; {totalDiscount}</p>
                </div>
            </div>

            <div className="cart-delivery-charges-container">
                <div className="cart-item-total-delivery-charges">
                    <p>Delivery Charges</p>
                </div>
                <div className="cart-item-total-delivery-charges-amount" id="price-sum">
                    <p id="delivery-charges">&#8377; 50</p>
                </div>
            </div>

            <hr></hr>

            <div className="cart-total-charges-container">
                <div className="cart-item-total-delivery-charges">
                    <p><b>Total Charges</b></p>
                </div>
                <div className="cart-item-total-delivery-charges-amount" id="price-sum">
                    <p id="total-charges"><b>&#8377; {finalBill}</b></p>
                </div>
            </div>

            <hr></hr>

            <div className="apply-coupon-container">
                <p>Apply Coupon</p>
                <input
                    value={couponName}
                    onChange={(event)=>setCouponName(event.target.value)}
                    placeholder="Try BOOKS200"
                ></input>
            </div>

            <button 
                className="place-order-btn solid-secondary-btn"
                onClick={displayRazorPay}
            >
                Place Order
            </button>
        </div>
    )
}

export { ShoppingBill }