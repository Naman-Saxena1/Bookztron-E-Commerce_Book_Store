import React,{ useEffect } from 'react'
import { Navbar } from "../../Components/Navbar/Navbar"
import { GenreCard } from '../../Components/GenreCards/GenreCard'
import LibraryIllustration from "../..//Assets/Images/Library_Illustration_1.jpg"
import './Home.css'
import { newArrivalsProductList } from "../../Components/NewArrivals/new-arrivals"
import { ProductCard } from "../../Components/Card/ProductCard"
import { Footer } from "../../Components/Footer/Footer"
import { Link } from "react-router-dom"
import { useProductAvailable } from "../../Context/product-context"
import { useGenre } from "../../Context/genre-context"
import { useLocation } from "react-router-dom"

function Home() {
  const { dispatchProductFilterOptions } = useProductAvailable()
  const {
    setFictionCategoryCheckbox,
    setThrillerCategoryCheckbox,
    setTechCategoryCheckbox,
    setPhilosophyCategoryCheckbox,
    setRomanceCategoryCheckbox,
    setMangaCategoryCheckbox, 
  } = useGenre()

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='home-component-container'>
      <Navbar/>
      <div className='home-page-img-container'>
        <img className="home-page-background-img" src={LibraryIllustration} alt="Library Illustration"/>
      </div>

      <h1 className='homepage-headings'>Genres</h1>
      <div className='genre-cards-container'>
          
        <Link to={"/shop"}> 
            <GenreCard genretype="Fiction"/>
        </Link>
        <Link to={"/shop"}> 
            <GenreCard genretype="Thriller"/>
        </Link>
        <Link to={"/shop"}> 
            <GenreCard genretype="Tech"/>
        </Link>
        <Link to={"/shop"}> 
            <GenreCard genretype="Philosophy"/>
        </Link>
        <Link to={"/shop"}> 
            <GenreCard genretype="Romance"/>
        </Link>
        <Link to={"/shop"}> 
            <GenreCard genretype="Manga"/>
        </Link>

      </div>

      <Link to={"/shop"}>
        <button 
          onClick={()=>{
            setFictionCategoryCheckbox(true)
            setThrillerCategoryCheckbox(true)
            setTechCategoryCheckbox(true)
            setPhilosophyCategoryCheckbox(true)
            setRomanceCategoryCheckbox(true)
            setMangaCategoryCheckbox(true)
            dispatchProductFilterOptions({type:"RESET_DEFAULT_FILTERS"}) }  
          }
          className="solid-secondary-btn homepage-explore-all-btn">
          Explore All
        </button>
      </Link>

      <h1 className='homepage-headings'>New Arrivals</h1>
      <div className='new-arrivals-container'>
        {
          newArrivalsProductList.map( product=> 
            (
              <ProductCard key={product.id} productdetails={product}/>
            )
          )
        }
      </div>
      <Footer/>

    </div>
  )
}

export { Home };