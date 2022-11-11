import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from "./Components/HomePage/HomePage.js";
import FoodDetails from './Components/FoodDetails/FoodDetails';


function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/agra' element={<FoodDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
