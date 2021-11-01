import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './views/Home';
import Cart from './views/Cart';

import Register from './views/Register';
import { Login } from './views/Login';
import Products from './views/products';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      loggedIn: localStorage.getItem('token'),
      userId: localStorage.getItem('userId'),
      cart: []
    
    };
  };

 
  logOut = () =>{
    localStorage.removeItem('token');
    this.setState({
      loggedIn: null
    })
  }

  logIn = (e) => {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;
    let encodedString = btoa(`${username}:${password}`)
    let myHeaders = new Headers();
    myHeaders.append('Authorization', `Basic ${encodedString}`)
    
    fetch('https://kekambas-bs.herokuapp.com/api/users', {
        method: 'POST',
        
    }).then(res => res.json())
        .then(data => {
            localStorage.setItem('token', data['token'])
            localStorage.setItem('userId', data['user_id'])
            this.setState({
              loggedIn: data['token'],
              userId: data['user_id']
            })
        })
        .catch(err => console.error(err))
  }


  addToCart = (products) => {
    this.setState(state => {return {cart: this.state.cart.concat([products])}});
  }

  render() {
    return (
      <>
        <Navbar loggedIn={this.state.loggedIn} logOut={this.logOut}/>
        <div className='container'>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/Cart'>
                <Cart />
            </Route>
            <Route exact path='/Login'>
                <Login />
            </Route>
            <Route exact path='/products'>
                <Products />
            </Route>
            <Route exact path='/Register'>
                <Register />
            </Route>

        </div>
      </>
    )
  }
}


 
  // Switch is unique in that it renders a route exclusively. 
  // In contrast, every Route that matches the location renders inclusively. 

//   import { Link } from 'react-router-dom';
// import { Login } from './views/Login';
// import { Posts } from './views/Posts';
// import Racers from './views/Racers';
// import Register from './views/Register';
// import Users from './views/Users';
// import { PostDetail } from './components/PostDetail';
// import About from './views/About';