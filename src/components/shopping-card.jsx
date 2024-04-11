import React, { Component } from 'react';

class ShoppingCart extends Component {
    state = {
        items: [
            {
                amount: 1,
                name: 'Healthy Bowl',
                price: 7.9
            }, 
            {
                amount: 1,
                name: 'Avocado Toast',
                price: 8.9
            },
        ]
    }


    render() {
        return <div className='shopping-card'>
            <h2>Warenkorb</h2>
            {this.state.items.map(item => <div key={item.name}>{item.amount}x {item.name} {item.price}€</div>)}
        </div>;
    }
}

export default ShoppingCart;