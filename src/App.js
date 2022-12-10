import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from "./Components/HomePage/HomePage.js";
import FoodDetails from './Components/FoodDetails/FoodDetails';
import InvestorRelations from './Components/InvestorRelations/InvestorRelation';
import ScrollToTop from './Components/ScrollToTop/Scroll'


function App() {
  return (
    <BrowserRouter >
    <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/agra' element={<FoodDetails />} />
        <Route path='/investorRelations' element={<InvestorRelations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
