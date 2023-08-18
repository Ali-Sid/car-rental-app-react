import './App.css'
import Home from './Home'
import Login from './Components/Login'
import Fleets from './Components/Fleets';
import CarDescription from './Components/CarDescription';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Components/Checkout';
import ThankYou from './Components/Thankyou';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/' element={<Home />}/>
        <Route exact path="/:productId" element={<CarDescription />} />
        <Route path='/fleets' element={<Fleets />}/>
        <Route exact path="/fleets/:productId" element={<CarDescription />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  )
}

export default App
