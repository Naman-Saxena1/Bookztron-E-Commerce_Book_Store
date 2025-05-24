import React,{ useEffect } from 'react'
import { Link } from "react-router-dom"
import { Carousel } from 'react-responsive-3d-carousel';
import 'react-responsive-3d-carousel/dist/styles.css';
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
  useCart,
  ProductCard // Added ProductCard import
} from "../../index.js"
import { useProductAvailable } from "../../Context/product-context"
import { useGenre } from "../../Context/genre-context"

function Home() {
  const { productsAvailableList, dispatchProductFilterOptions } = useProductAvailable(); // Added productsAvailableList
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

  // Prepare actual carousel items
  let actualCarouselItems = [];
  if (productsAvailableList && productsAvailableList.length > 0) {
    const selectedBooks = productsAvailableList.slice(0, Math.min(productsAvailableList.length, 12));
    actualCarouselItems = selectedBooks.map(product => (
      <ProductCard key={product._id} productdetails={product} />
    ));
  }

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
                  "https://bookztron-server.vercel.app/api/user",
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

      <h1 className='homepage-headings'>Featured Books</h1>
      <div className="featured-books-carousel-container"> {/* Added class for styling */}
        {actualCarouselItems.length > 0 ? (
          <Carousel 
            items={actualCarouselItems} 
            // width="300px" // Removed fixed width, will handle with CSS
            height="auto" // Changed to auto or a more flexible value like 550px if needed
            showArrows={true} 
            showStatus={false} 
            showThumbs={false} 
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
          />
        ) : (
          <p>Loading featured books...</p>
        )}
      </div>
      
      <Footer/>

    </div>
  )
}

export { Home };