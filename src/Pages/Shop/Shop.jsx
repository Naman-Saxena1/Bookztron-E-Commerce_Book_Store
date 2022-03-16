import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom"
import "./Shop.css"
import { 
  Sidebar, 
  ProductCard
} from "../../index.js"
import { useProductAvailable } from "../../Context/product-context"
import axios from 'axios'

function Shop(props) {

    let { 
      productsAvailableList, 
      dispatchSortedProductsList, 
      productFilterOptions 
    } = useProductAvailable()

    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(()=>{
      
      if( (JSON.stringify(productsAvailableList)===JSON.stringify([]))
          && (
              JSON.stringify(productFilterOptions)===JSON.stringify({
              includeOutOfStock        : true,
              onlyFastDeliveryProducts : false,
              minPrice                 : 0,
              maxPrice                 : 1200,
              fiction                  : true,
              thriller                 : true,
              tech                     : true,
              philosophy               : true,
              romance                  : true,
              manga                    : true,
              minRating                : 1}) 
             )
        )
      {
        //Refresh happened - Filters are default yet productsAvailableList is empty
        //Redo api call to get data
        try {
          (async () => {
            const productsAvailableData = await axios.get('https://bookztron.herokuapp.com/api/products')
            dispatchSortedProductsList({type:"ADD_ITEMS_TO_PRODUCTS_AVAILABLE_LIST", payload: [...productsAvailableData.data.productsList] })
          }) ()
        }
        catch(error) {
          console.log("Error : ", error);
        }
      }
    },[])

    return (
        <div>
            <div className='shop-container'>
                <Sidebar/>
                <div className='products-container'>
                    <h2>Showing {productsAvailableList.length} products</h2>
                    <div className="products-card-grid">
                        {
                            productsAvailableList && 
                            (
                                productsAvailableList.map(productdetails => (
                                    <ProductCard key={productdetails.id} productdetails={productdetails} />
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Shop }