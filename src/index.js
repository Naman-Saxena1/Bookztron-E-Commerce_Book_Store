import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProductsProvider } from "./Context/product-context"
import { GenreProvider } from "./Context/genre-context"
import { NewArrivalsProvider } from "./Context/new-arrival-context"
import { ToastContextProvider } from './Context/toast-context';
import { UserLoginContextProvider } from './Context/user-login-context'
import { WishlistContextProvider } from './Context/wishlist-context';

export { useProductAvailable } from "./Context/product-context"
export { useGenre } from "./Context/genre-context"
export { useNewArrivals } from "./Context/new-arrival-context"
export { useToast } from './Context/toast-context';
export { useUserLogin } from './Context/user-login-context'
export { useWishlist } from './Context/wishlist-context';

export { Navbar } from "./Components/Navbar/Navbar"
export { GenreCard } from './Components/GenreCards/GenreCard'
export { NewArrivals } from "./Components/NewArrivals/NewArrival"
export { ProductCard } from "./Components/Card/ProductCard"
export { Footer } from "./Components/Footer/Footer"
export { Sidebar } from './Components/Sidebar/Sidebar'
export { Toast } from './Components/Toast/Toast'

export { Home } from "./Pages/Home/Home"
export { Login } from "./Pages/AuthenticationPages/Login"
export { Signup } from "./Pages/AuthenticationPages/Signup"
export { ProductPage } from "./Pages/ProductPage/ProductPage"
export { Shop } from "./Pages/Shop/Shop"
export { Wishlist } from "./Pages/Wishlist/Wishlist"

ReactDOM.render(
  <React.StrictMode>
    <UserLoginContextProvider>
      <WishlistContextProvider>
        <ToastContextProvider>
          <NewArrivalsProvider>
            <GenreProvider>
              <ProductsProvider>
                <App/>
              </ProductsProvider>
            </GenreProvider>
          </NewArrivalsProvider>
        </ToastContextProvider>
      </WishlistContextProvider>
    </UserLoginContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
