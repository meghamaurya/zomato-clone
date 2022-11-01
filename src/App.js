import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';

import HomePage from "./Components/HomePage/HomePage.js";
function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
