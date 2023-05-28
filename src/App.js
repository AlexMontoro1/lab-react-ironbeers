
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import AllBeers from './pages/AllBeers';
import BeerDetails from './pages/BeerDetails';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';



function App() {
  const location = useLocation()
  const isHome = location.pathname === "/"
  return (
    <div className="App">
      {!isHome && <Header />}
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path='/beers' element={ <AllBeers /> } />
        <Route path='/beers/:beerId' element={ <BeerDetails /> } />
        <Route path='/random-beer' element={ <RandomBeer /> } />
        <Route path='/new-beer' element={ <NewBeer /> } />
      </Routes>
    </div>
  );
}

export default App;
