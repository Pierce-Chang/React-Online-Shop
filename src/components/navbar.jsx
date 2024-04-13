import React, { Component } from 'react';


class Navbar extends Component {
    state = {}
    render() {
        return <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <div className='logo-container'>
                    <img className='logo' src="/assets/img/schmackofatzo.png" alt="" />
                    <a className="navbar-brand" href="/">Healthstation</a>
                </div>
                <div className='links-container'>
                    <a href="" className="links">Online bestellen</a>|
                    <a href="" className="links">Anfahrt</a>|
                    <a href="" className="links">Kontakt</a>|
                    <a href="" className="links">Impressum</a>
                </div>
            </div>
        </nav>
    }
}

export default Navbar;