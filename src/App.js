import './App.css';
import { Home } from './Pages/Home/Home';
import { Shop } from './Pages/Shop/Shop';
import { ProductPage } from "./Pages/ProductPage/ProductPage"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Navbar } from "./index"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/"         exact element={<Home/>} />
          <Route path="/shop"     exact element={<Shop/>} />
          <Route path="/shop/:id"       element={<ProductPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;