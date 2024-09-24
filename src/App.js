import React from 'react';
import {Hero, About, Videos, Footer, Matrimoni, Eventi, Contacts} from './containers';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const App = () => {
    return (
        <div className="main">
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