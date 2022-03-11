import './App.css';
import { Home } from './Pages/Home/Home';
import { Shop } from './Pages/Shop/Shop'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/shop" exact element={<Shop/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;