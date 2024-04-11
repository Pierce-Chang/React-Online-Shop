import React, { Component } from 'react';

class ShoppingCart extends Component {
    state = {}


    render() {
        return <div className='shopping-card'>
            <h2>Warenkorb</h2>
            {this.props.items.map(item => <div key={item.name}>{item.amount}x {item.name} {item.totalPrice}€</div>)}
        </div>;
    }
}

export default ShoppingCart;