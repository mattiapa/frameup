import React from 'react';
import {Header, Hero, About, Videos, Footer, Matrimoni, Eventi, Contacts} from './containers';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Videos />
      <Matrimoni />
      <Eventi />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App