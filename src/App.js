import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './views/Home';
import Cart from './views/Cart';
import { Login } from './components/Login';
import products from './views/products';
import {
  BrowserRouter as 
  Switch,
} from "react-router-dom";

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      // name: 'Lucy',
      loggedIn: localStorage.getItem('token'),
      userId: localStorage.getItem('userId'),
      cart: []
    
    };
  };

  handleClick = (step) => {
    let newCount = this.state.count + step
    this.setState({
        count: newCount
    })
  }

  changeName = (name) => {
    //   const name = prompt('What is your name?');
      this.setState({
          name
      })
  }

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
        headers: myHeaders
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


  addToCart = (product) => {
    this.setState(state => {return {cart: this.state.cart.concat([product])}});
  }

  render() {
    return (
      <div> 
        <Navbar number={this.state.cart.length}></Navbar>
        <div className="row">
            <div className="col-12 my-3">
            </div>
            </div>
        <div className="container">
        
        <Switch>
          <Route path="https://kekambas-bs.herokuapp.com/api/products" component={products} />
          <Route exact path="/" component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/Cart" component={Cart} />
        </Switch>
        </div>
      </div>
    );
  }}

 
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