import { useState } from "react"
import { Link } from "react-router-dom"
import './Pagination.css'

const Pagination = ({ productsPerPage, totalProducts, paginate}) => {
    const pageNumbers = []
    let [currentActivePage, setCurrentActivePage]  = useState(1)
    
    for(let i=1; i<=Math.ceil(totalProducts / productsPerPage ); i++)
    {
        pageNumbers.push(i)
    }


    return (
        <div>
            <ul className="pagination">
                {
                    pageNumbers.map(number => (
                        <Link 
                            to="/shop"
                            onClick={()=>{
                                setCurrentActivePage(number)
                                paginate(number)
                            }} 
                            key={number}
                        >
                            <li 
                                className={currentActivePage===number?"active-page-li":""} 
                            >
                                    <p className="page-number">{number}</p>
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
}

export { Pagination }