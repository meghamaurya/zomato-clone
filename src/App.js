import './App.css';
import Explore from './Components/Explore/Explore';
import Footer from './Components/Footer/Footer';
import Popular from './Components/Popular/Popular';
import Zomato from './Components/Zomato/Zomato';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import FoodDetails from './Components/FoodDetails/FoodDetails';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<>
          <Popular />
          <Zomato />
          <Explore />
          <Footer />
        </>} />
        <Route path='/agra' element={<FoodDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
