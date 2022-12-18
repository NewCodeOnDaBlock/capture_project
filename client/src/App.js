
import React from 'react'
import Footer from './components/Footer';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import AboutUs from "./pages/AboutUs";



function App() {
  return (
    <div className='app'>
      <GlobalStyle />
      <Nav />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
