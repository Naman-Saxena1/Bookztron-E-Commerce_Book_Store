import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProductsProvider } from "./Context/product-context"
import { GenreProvider } from "./Context/genre-context"
import { NewArrivalsProvider } from "./Context/new-arrival-context"

export { Navbar } from "./Components/Navbar/Navbar"
export { GenreCard } from './Components/GenreCards/GenreCard'
export { NewArrivals } from "./Components/NewArrivals/NewArrival"
export { ProductCard } from "./Components/Card/ProductCard"
export { Footer } from "./Components/Footer/Footer"
export { Sidebar } from './Components/Sidebar/Sidebar'

ReactDOM.render(
  <React.StrictMode>
    <NewArrivalsProvider>
      <GenreProvider>
        <ProductsProvider>
          <App/>
        </ProductsProvider>
      </GenreProvider>
    </NewArrivalsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

