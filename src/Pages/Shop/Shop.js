import React, { useEffect } from 'react'
import "./Shop.css"
import { Navbar } from '../../Components/Navbar/Navbar'
import { Sidebar } from '../../Components/Sidebar/Sidebar'
import { useProductAvailable } from "../../Context/product-context"
import { ProductCard } from "../../Components/Card/ProductCard"
import { useLocation } from "react-router-dom"

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