import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductsProvider } from "./Context/product-context"
import { GenreProvider } from "./Context/genre-context"

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

