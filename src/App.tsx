import React from 'react';
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our program" title="What we offer"/>
        <Programs />
        <About />
        <Title subTitle="Gallery" title="Campus Photos"/>
        <Campus />
      </div>
    </div>
  );
}

export default App;
