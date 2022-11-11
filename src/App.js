import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from "./Components/HomePage/HomePage.js";
import Navbar from './Components/Navbar/Navbar';
import Explore from './Components/Explore/Explore';
import Footer from './Components/Footer/Footer';
import Popular from './Components/Popular/Popular';
import Zomato from './Components/Zomato/Zomato';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import FoodDetails from './Components/FoodDetails/FoodDetails';


function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/agra' element={<FoodDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
