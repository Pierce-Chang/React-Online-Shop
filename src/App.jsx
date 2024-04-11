import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Product from './components/product';


function App() {
  return (
    <React.Fragment className="App">
      <Navbar />
      <div className='product-container'>
        <Product image="bowl.jpg" title="Healthy Bowl" description="Füge Healthy Bowl zu deinem Warenkorb hinzu"/>
        <Product image="avocado_toast.jpg" title="Avocado Toast" description="Füge Avocado Toast zu deinem Warenkorb hinzu"/>
        <Product image="frensh_toast.jpg" title="Frensh Toast" description="Füge Avocado Toast zu deinem Warenkorb hinzu"/>
        <Product image="pancakes.jpg" title="Pancakes" description="Füge Pancakes zu deinem Warenkorb hinzu"/>
      </div>
    </React.Fragment>
  );
}

export default App;
