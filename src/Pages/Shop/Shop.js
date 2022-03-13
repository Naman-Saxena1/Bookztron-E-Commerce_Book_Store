import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom"
import "./Shop.css"
import { 
  Navbar, 
  Sidebar, 
  ProductCard
} from "../../index.js"
import { useProductAvailable } from "../../Context/product-context"

function Shop(props) {

    let { productsAvailableList } = useProductAvailable()

    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div>
            <Navbar/>
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