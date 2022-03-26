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
  Wishlist,
  Cart,
  useUserLogin,
  useWishlist,
  useCart
} from "./index"

function App() {

  const { userLoggedIn } = useUserLogin()
  const { dispatchUserWishlist } = useWishlist()
  const { dispatchUserCart } = useCart()

  // async function getUpdatedWishlistAndCart()
  // {
  //   console.log("getUpdatedList called!")
  //   if(userLoggedIn)
  //     {
  //     let updatedUserInfo = await axios.get(
  //     "https://bookztron.herokuapp.com/api/user",
  //     {
  //       headers:
  //       {
  //         'x-access-token': localStorage.getItem('token'),
  //       }
  //     })

  //     if(updatedUserInfo.data.status==="ok")
  //     {
  //         dispatchUserWishlist({type: "UPDATE_USER_WISHLIST",payload: updatedUserInfo.data.user.wishlist})
  //         dispatchUserCart({type: "UPDATE_USER_CART",payload: updatedUserInfo.data.user.cart})
  //     }
  //   }
  // }

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
          <Route path="/cart"           element={<Cart/>} />
        </Routes>
        <Toast position="bottom-right"/>
      </div>
    </Router>
  );
}

export default App;