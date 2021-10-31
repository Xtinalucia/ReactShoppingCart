import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Login } from './Login';
import { Logout } from './Logout';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        
                        <li className="nav-item">
                        <Link className="nav-link" to="/cart">
                              <i className="fas fa-shopping-cart"></i><span className = "badge badge-secondary">{this.props.number}</span>Cart</Link>
                            </li>

                        {this.props.login ? <Login /> : <Logout />}
                    </ul>
                    { this.props.login ?  
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to='/' onClick={this.props.logout}>Logout</Link>
                        </li>
                    </ul>: 
                    null}
                    </div>
                </div>
            </nav>
        )
    }
}
