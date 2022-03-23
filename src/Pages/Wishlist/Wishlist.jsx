import "./Wishlist.css"
import { useWishlist } from "../../Context/wishlist-context"
import { ProductCard } from "../../index"
import Lottie from 'react-lottie';
import HeartLottie from "../../Assets/Icons/heart.json"

function Wishlist()
{
    const { userWishlist } = useWishlist()
    let heartObj = {
        loop: true,
        autoplay: true,
        animationData : HeartLottie,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }


    return (
        <div>
            <h2>{userWishlist.length} {userWishlist.length===1?"item":"items"} in Wishlist</h2>
            <div className="products-card-grid">
                {
                    JSON.stringify(userWishlist)!==JSON.stringify([]) 
                    ? (
                        userWishlist.map(productdetails => (
                            <ProductCard key={productdetails._id} productdetails={productdetails} />
                        ))
                    )
                    : (
                        <div className="empty-wishlist-message-container">
                            <Lottie options={heartObj}
                                height={150}
                                width={150}
                                isStopped={false}
                                isPaused={false}
                            />
                            <h2>Your wishlist is empty 🙃</h2>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export { Wishlist }