import './App.css';
import Explore from './Components/Explore/Explore';
import Footer from './Components/Footer/Footer';
import Popular from './Components/Popular/Popular';
import Zomato from './Components/Zomato/Zomato';
import {BrowserRouter, Routes, Route } from 'react-router-dom'


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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
