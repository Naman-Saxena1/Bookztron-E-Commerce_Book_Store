import React, { useState, useEffect } from 'react'
import jwt_decode from "jwt-decode"
import { useLocation } from "react-router-dom"
import "./Shop.css"
import { 
  Sidebar, 
  ProductCard,
  useWishlist,
  useCart,
  useSearchBar,
  Pagination
} from "../../index.js"
import { useProductAvailable } from "../../Context/product-context"
import axios from 'axios'

function Shop(props) {

    let { 
      productsAvailableList, 
      dispatchSortedProductsList, 
      productFilterOptions 
    } = useProductAvailable()

    const { dispatchUserWishlist } = useWishlist()
    const { dispatchUserCart } = useCart()
    const { pathname } = useLocation();
    const { searchBarTerm } = useSearchBar()
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ productsPerPage, setProductsPerPage ] = useState(12)
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname, currentPage]);

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
            const productsAvailableData = await axios.get('https://bookztron.herokuapp.com/api/home/products')
            dispatchSortedProductsList({type:"ADD_ITEMS_TO_PRODUCTS_AVAILABLE_LIST", payload: [...productsAvailableData.data.productsList] })
          }) ()
        }
        catch(error) {
          console.log("Error : ", error);
        }
      }
    },[])

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
          (async function getUpdatedWishlistAndCart()
          {
            let updatedUserInfo = await axios.get(
            "https://bookztron.herokuapp.com/api/user",
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
    },[])

    let searchedProducts = productsAvailableList
    .filter(productdetails=>{
      return (
        productdetails.bookName.toLowerCase().includes(searchBarTerm.toLowerCase()) 
        || productdetails.author.toLowerCase().includes(searchBarTerm.toLowerCase())
      )
    })

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct= indexOfLastProduct - productsPerPage;
    let currentSearchedProducts = searchedProducts.slice(indexOfFirstProduct, indexOfLastProduct)
    let currentProductsAvailableList = productsAvailableList.slice(indexOfFirstProduct, indexOfLastProduct)

    return (
        <div>
            <div className='shop-container'>
                <Sidebar/>
                <div className='products-container'>
                    <h2>Showing {searchBarTerm === ""?productsAvailableList.length:searchedProducts.length} products</h2>
                    <div className="products-card-grid">
                        {
                            productsAvailableList && 
                            (
                              searchBarTerm === "" ?
                              (
                                currentProductsAvailableList.map(productdetails => (
                                  <ProductCard key={productdetails._id} productdetails={productdetails} />
                                ))
                              ) : (
                                currentSearchedProducts.map(productdetails => (
                                  <ProductCard key={productdetails._id} productdetails={productdetails} />
                                ))
                              )
                            )
                        }
                    </div>
                    <Pagination 
                      productsPerPage={productsPerPage} 
                      totalProducts={searchBarTerm === ""?productsAvailableList.length:searchedProducts.length}
                      paginate={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    )
}

export { Shop }