import React, { Component } from 'react'
import Navbar from './components/Navbar';
import About from './views/About';
import Home from './views/Home';
import { Route } from 'react-router-dom'
import Racers from './views/Racers';
import Users from './views/Users';

// you can only return a single parent element which is the div here

// function App() {   //ln 4 and 7 make this show on UI. //
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }

  handleClick = (step) => {
    let newCount = this.state.count + step
    this.setState({
        count: newCount
    })
  }

  render() {
    return (
      <>
      <Navbar />
      <div className='container'>
        <Route exact path='/'>
          <Home count={this.state.count} handleClick={this.handleClick} name={this.props.name}/>
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/racers'>
          <Racers />
        </Route>
        <Route exact path='/Users'>
          <Users />
        </Route>

      </div>
      </>
    )
  }
}


// class App extends React.Component{
//   render(){
//     return <h1> hi there from the class</h1>
//   }
// }
// above shows that the class can display on UI, use ln 1 as well

