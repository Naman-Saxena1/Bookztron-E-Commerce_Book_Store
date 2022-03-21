import React from "react"
import { useNewArrivals } from "../../Context/new-arrival-context"
import { ProductCard } from "../../index"

function NewArrivals()
{
    const { newArrivalsProductList } = useNewArrivals()

    return (
        <div className='new-arrivals-container'>
        {
          newArrivalsProductList.map( product=> 
            (
              <ProductCard key={product._id} productdetails={product}/>
            )
          )
        }
      </div>
    )
}

export { NewArrivals };