import React, { Component } from 'react';


class Navbar extends Component {
    state = {}
    render() {
        return <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <img className='logo' src="/assets/img/schmackofatzo.png" alt="" />
                <a className="navbar-brand" href="/">Lieferspando</a>
            </div>
        </nav>
    }
}

export default Navbar;