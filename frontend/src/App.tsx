import React from 'react';
import './css/index.css'
import Nav from './components/Layout/Nav';
import Header from './components/Main_Page/Header/Header';
import CardsContainer from './components/Main_Page/Cards/CardsContainer';
import SliderContainer from './components/Main_Page/Slider/SliderContainer';
import BrandsList from './components/Main_Page/Brands/BrandsList';
import ReasonsCont from './components/Main_Page/Reasons/ReasonsCont';

function App() {
  return (
    <div className="App">
      <Nav />

      <Header />

      <CardsContainer />

      <SliderContainer />

      <BrandsList />

      <ReasonsCont />
    </div>
  );
}

export default App;
