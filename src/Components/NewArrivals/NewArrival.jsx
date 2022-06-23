import React from "react"
import { useNewArrivals } from "../../Context/new-arrival-context"
import { ProductCard } from "../../index"
import Lottie from "react-lottie"
import LoadingLottie from "../../Assets/Lottie/loading-0.json"

function NewArrivals()
{
    const { newArrivalsProductList } = useNewArrivals()

    const loadingObj = {
      loop: true,
      autoplay: true,
      animationData : LoadingLottie,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }

    return (
        <div className='new-arrivals-container'>
        {
          newArrivalsProductList.length===0?(
            <Lottie options={loadingObj}
              height={380}
              style={{ margin: "auto"}}
              isStopped={false}
              isPaused={false}
            />
          ):(
            newArrivalsProductList.map( product=> 
              (
                <ProductCard key={product._id} productdetails={product}/>
              )
            )
          )
        }
      </div>
    )
}

export { NewArrivals };