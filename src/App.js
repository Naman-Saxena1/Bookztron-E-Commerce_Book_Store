import './App.css';
import { Home } from './Pages/Home/Home';
import { Shop } from './Pages/Shop/Shop';
import { ProductPage } from "./Pages/ProductPage/ProductPage"
import { Login } from "./Pages/AuthenticationPages/Login"
import { Signup } from "./Pages/AuthenticationPages/Signup"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Navbar, Toast } from "./index"

function App() {

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
        </Routes>
        <Toast position="bottom-right"/>
      </div>
    </Router>
  );
}

export default App;