import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Product from './components/product';


function App() {
  return (
    <React.Fragment className="App">
      <Navbar />
      <div className='product-container'>
        <Product title="Bowl"/>
        <Product title="Tomaten"/>
        <Product title="Gurken"/>
        <Product title="Paprika"/>
      </div>
    </React.Fragment>
  );
}

export default App;
