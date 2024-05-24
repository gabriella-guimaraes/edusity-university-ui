import React from 'react';
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our program" title="What we offer"/>
        <Programs />
      </div>
    </div>
  );
}

export default App;
