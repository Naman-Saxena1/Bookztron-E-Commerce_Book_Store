import "./ShoppingBill.css"
import { useCart, useToast } from "../../index"

function ShoppingBill()
{
    const { userCart } = useCart()
    const { showToast } = useToast()
    let totalDiscount = 0, totalBill = 0;

    userCart.forEach(product=>{
        let discountOnCurrentProduct = ( (product.originalPrice - product.discountedPrice) * product.quantity )
        totalDiscount = totalDiscount + discountOnCurrentProduct
        totalBill = totalBill + ( product.discountedPrice * product.quantity )
    })

    function placeOrder()
    {
        showToast("info","","Payment Integration is coming soon! 😉")
    }

    return (
        <div className="cart-bill">
            <h2 className="bill-heading">Bill Details</h2>

            <hr></hr>
            {
                userCart.map(product=>{

                    return (
                        <div className="cart-price-container">
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
                    <p id="total-charges"><b>&#8377; {totalBill}</b></p>
                </div>
            </div>

            <button 
                className="place-order-btn solid-secondary-btn"
                onClick={placeOrder}
            >
                Place Order
            </button>
        </div>
    )
}

export { ShoppingBill }