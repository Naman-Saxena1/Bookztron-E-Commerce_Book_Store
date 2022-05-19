import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProductsProvider } from "./Context/product-context"
import { GenreProvider } from "./Context/genre-context"
import { NewArrivalsProvider } from "./Context/new-arrival-context"
import { ToastContextProvider } from './Context/toast-context';
import { UserLoginContextProvider } from './Context/user-login-context'
import { WishlistContextProvider } from './Context/wishlist-context';
import { CartContextProvider } from './Context/cart-context';
import { OrdersContextProvider } from './Context/orders-context'
import { SearchBarContextProvider } from './Context/search-bar-context'

export { useProductAvailable } from "./Context/product-context"
export { useGenre } from "./Context/genre-context"
export { useNewArrivals } from "./Context/new-arrival-context"
export { useToast } from './Context/toast-context';
export { useUserLogin } from './Context/user-login-context'
export { useWishlist } from './Context/wishlist-context';
export { useCart } from "./Context/cart-context"
export { useOrders } from "./Context/orders-context"
export { useSearchBar } from "./Context/search-bar-context"

export { Navbar } from "./Components/Navbar/Navbar"
export { GenreCard } from './Components/GenreCards/GenreCard'
export { NewArrivals } from "./Components/NewArrivals/NewArrival"
export { ProductCard } from "./Components/Card/ProductCard"
export { HorizontalProductCard } from "./Components/HorizontalCard/HorizontalProductCard"
export { Footer } from "./Components/Footer/Footer"
export { Sidebar } from './Components/Sidebar/Sidebar'
export { Toast } from './Components/Toast/Toast'
export { ShoppingBill } from './Components/ShoppingBill/ShoppingBill'
export { WishlistProductCard } from './Components/WishlistProductCard/WishlistProductCard'
export { ProductOrderCard } from './Components/ProductOrderCard/ProductOrderCard'
export { Pagination } from './Components/Pagination/Pagination'

export { Home } from "./Pages/Home/Home"
export { Login } from "./Pages/AuthenticationPages/Login"
export { Signup } from "./Pages/AuthenticationPages/Signup"
export { ProductPage } from "./Pages/ProductPage/ProductPage"
export { Shop } from "./Pages/Shop/Shop"
export { Wishlist } from "./Pages/Wishlist/Wishlist"
export { Cart } from "./Pages/Cart/Cart"
export { Orders } from "./Pages/Orders/Orders"

ReactDOM.render(
  <React.StrictMode>
    <UserLoginContextProvider>
      <WishlistContextProvider>
        <CartContextProvider>
          <ToastContextProvider>
            <NewArrivalsProvider>
              <GenreProvider>
                <ProductsProvider>
                  <OrdersContextProvider>
                    <SearchBarContextProvider>
                      <App/>
                    </SearchBarContextProvider>
                  </OrdersContextProvider>
                </ProductsProvider>
              </GenreProvider>
            </NewArrivalsProvider>
          </ToastContextProvider>
        </CartContextProvider>
      </WishlistContextProvider>
    </UserLoginContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
