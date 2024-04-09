import React, { Component } from 'react';

class Product extends Component {
    state = {}
    render() {
        return <div clasName="card" styles={{width: '18rem'}}>
            <img src="/assets/img/bowl.jpg" className="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>;
    }
}

export default Product;