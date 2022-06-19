import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import About from './About';
import Services from './Services';

import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';



ReactDOM.render(
  <React.StrictMode>
    <Home />
    <About />
    <Services />
    <Skills />
    <Contact />
    <Footer />
  </React.StrictMode>
  ,
  document.getElementById('root')
);
