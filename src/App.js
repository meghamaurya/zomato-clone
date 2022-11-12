import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from "./Components/HomePage/HomePage.js";
import Navbar from './Components/Navbar/Navbar';
import InvestorRelation from './Components/InvestorRelations/InvestorRelation';

function App() {
  return (
    <BrowserRouter >
      <Navbar />
      {/* <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes> */}
      <InvestorRelation />
    </BrowserRouter>
  );
}

export default App;
