import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProductsProvider } from "./Context/product-context"
import { GenreProvider } from "./Context/genre-context"
import { NewArrivalsProvider } from "./Context/new-arrival-context"
import { ToastContextProvider } from './Context/toast-context';

export { Navbar } from "./Components/Navbar/Navbar"
export { GenreCard } from './Components/GenreCards/GenreCard'
export { NewArrivals } from "./Components/NewArrivals/NewArrival"
export { ProductCard } from "./Components/Card/ProductCard"
export { Footer } from "./Components/Footer/Footer"
export { Sidebar } from './Components/Sidebar/Sidebar'
export { Toast } from './Components/Toast/Toast'

ReactDOM.render(
  <React.StrictMode>
    <ToastContextProvider>
      <NewArrivalsProvider>
        <GenreProvider>
          <ProductsProvider>
            <App/>
          </ProductsProvider>
        </GenreProvider>
      </NewArrivalsProvider>
    </ToastContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

