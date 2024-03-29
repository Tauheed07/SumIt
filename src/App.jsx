import React from 'react';
import Hero from './Hero';
import Demo from './Demo';
import Footer from './Footer'
import './App.css';

const app = () => {
  return (
    <main>
      <div className="main">
        <div className ="gradient" />
      </div>
      <div className = "app">
        <Hero />
        <Demo />
        <Footer />
      </div>
    </main>
  )
}

export default app
