import React from 'react';
import './css/index.css'
import Nav from './components/Layout/Nav';
import Header from './components/Main_Page/Header/Header';
import CardsContainer from './components/Main_Page/Cards/CardsContainer';
import SliderContainer from './components/Main_Page/Slider/SliderContainer';
import BrandsList from './components/Main_Page/Brands/BrandsList';
import ReasonsCont from './components/Main_Page/Reasons/ReasonsCont';
import AboutSection from './components/Main_Page/About/AboutSection';
import Contact from './components/Main_Page/Contact/Contact';
import Footer from './components/Layout/Footer';
import { IoMdArrowDropup } from 'react-icons/io'
import { Navigation } from './functions/UsefulClasses';

function App() {
  const arrowRef = React.useRef<HTMLElement>(null)

  const n = new Navigation()

  React.useEffect(() => {
    n.showScrollTop(arrowRef.current!, 650, {
      bottom: 0,
      'pointer-events': 'all'
    })
    
    arrowRef.current?.addEventListener('click', () => window.scrollTo(0, 0))
  }, [])

  return (
    <div className="App">
      <span ref={ arrowRef } className='arrowup'> <IoMdArrowDropup /> </span>

      <Nav />

      <Header />

      <CardsContainer />

      <SliderContainer />

      <BrandsList />

      <ReasonsCont />

      <AboutSection />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
