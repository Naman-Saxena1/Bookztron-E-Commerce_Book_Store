import React,{ useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import { useLocation } from "react-router-dom"
import LibraryIllustration from "../..//Assets/Images/Library_Illustration_1.jpg"
import './Home.css'
import jwt_decode from "jwt-decode"
import {  
  GenreCard, 
  NewArrivals,
  Footer,
  useWishlist,
  useCart 
} from "../../index.js"
import { useProductAvailable } from "../../Context/product-context"
import { useGenre } from "../../Context/genre-context"

function Home() {
  const { dispatchProductFilterOptions } = useProductAvailable()
  const { dispatchUserWishlist } = useWishlist()
  const { dispatchUserCart } = useCart()
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

  return (
    <div className='home-component-container'>
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
        <Link to={"/shop"} state={{navigate: true}}> 
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
      <NewArrivals/>
      <Footer/>

    </div>
  )
}

export { Home };