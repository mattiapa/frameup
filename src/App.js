import React from 'react';
import {
  Header, 
  Hero,
  About,
  Videos,
  Footer,
  Matrimoni,
  Eventi,
  Contacts,
} from "./containers";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const App = () => {
    return (
        <div className="main">
            <Header />
            <Hero/>
            <About/>
            <Videos/>
            <Matrimoni/>
            <Eventi/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App