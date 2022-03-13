import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProductsProvider } from "./Context/product-context"
import { GenreProvider } from "./Context/genre-context"

export { Navbar } from "./Components/Navbar/Navbar"
export { GenreCard } from './Components/GenreCards/GenreCard'
export { newArrivalsProductList } from "./Components/NewArrivals/new-arrivals"
export { ProductCard } from "./Components/Card/ProductCard"
export { Footer } from "./Components/Footer/Footer"
export { Sidebar } from './Components/Sidebar/Sidebar'

ReactDOM.render(
  <React.StrictMode>
    <GenreProvider>
      <ProductsProvider>
        <App/>
      </ProductsProvider>
    </GenreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

