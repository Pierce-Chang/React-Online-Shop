import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Product from './components/product';
import ShoppingCart from './components/shopping-card';


class App extends Component {
  state = {
    items: []
  }

  addItem = (amount, name, price) => {
    let currentItems = this.state.items;

    let existingItem = this.state.items.find(item => item.name === name)
    if(existingItem) {
      existingItem.amount += amount;
      existingItem.totalPrice += price;
    } else {
    currentItems.push({
      amount,
      name,
      price,
      totalPrice: price
    });
  }
    this.setState({ items: currentItems})
    console.log(this.state)
  }

  render() {
    return <React.Fragment>
      <Navbar />
      <div className='main-container'>
        <div className='product-container'>
          <Product onAdd={() => this.addItem(1, 'Healthy Bowl', 7.99)} image="bowl.jpg" title="Healthy Bowl" description="Füge Healthy Bowl zu deinem Warenkorb hinzu" />
          <Product onAdd={() => this.addItem(1, 'Avocado Toast', 6.99)} image="avocado_toast.jpg" title="Avocado Toast" description="Füge Avocado Toast zu deinem Warenkorb hinzu" />
          <Product onAdd={() => this.addItem(1, 'Frensh Toast', 4.99)} image="frensh_toast.jpg" title="Frensh Toast" description="Füge Avocado Toast zu deinem Warenkorb hinzu" />
          <Product onAdd={() => this.addItem(1, 'Pancakes', 5.99)} image="pancakes.jpg" title="Pancakes" description="Füge Pancakes zu deinem Warenkorb hinzu" />
        </div>
        <ShoppingCart items={this.state.items}/>
      </div>
    </React.Fragment>
  };
}

export default App;
