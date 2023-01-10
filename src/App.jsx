import './App.css'
import React from 'react';
import Info from './components/Info';
import About from './components/About';
import Interest from './components/Interest';
import Footer from './components/Footer';

function App() {

  return (
    <div className="app">
      <div className="card">
            <Info photo="/images/pfp.png" name="Laura Smith" />
            <About />
            <Interest />
            <Footer />
        </div>    
    </div>
  )
}

export default App
