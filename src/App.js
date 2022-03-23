import './App.css';
import { useEffect, useLayoutEffect } from 'react';
import axios from "axios"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { 
  Navbar, 
  Toast,
  Home,
  Shop, 
  ProductPage,
  Login,
  Signup,
  Wishlist
} from "./index"
import { useUserLogin } from "./Context/user-login-context"
import { useWishlist } from "./Context/wishlist-context"

function App() {

  const { dispatchUserWishlist } = useWishlist()
  const { userLoggedIn } = useUserLogin()

  useLayoutEffect(()=>{
    localStorage.setItem('userWishlist',JSON.stringify([]))
  },[])

  useEffect(()=>{
    window.addEventListener("storage", getUpdatedWishlist)
  })

  async function getUpdatedWishlist()
  {
    if(userLoggedIn)
      {
      let wishlistUpdateResponse = await axios.get(
      "https://bookztron.herokuapp.com/api/wishlist",
      {
        headers:
        {
          'x-access-token': localStorage.getItem('token'),
        }
      })

      if(wishlistUpdateResponse.data.status==="ok")
      {
          dispatchUserWishlist({type: "UPDATE_USER_WISHLIST",payload: wishlistUpdateResponse.data.user.wishlist})
      }
    }
  }

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/"         exact element={<Home/>} />
          <Route path="/shop"     exact element={<Shop/>} />
          <Route path="/shop/:id"       element={<ProductPage/>} />
          <Route path="/login"          element={<Login/>} />
          <Route path="/signup"         element={<Signup/>} />
          <Route path="/wishlist"       element={<Wishlist/>} />
        </Routes>
        <Toast position="bottom-right"/>
      </div>
    </Router>
  );
}

export default App;