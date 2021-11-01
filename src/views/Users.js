import React, { Component } from 'react';
import UserDetail from '../components/UserDetail';

export default class users extends Component {
    constructor(props){
        super(props);
        console.log('Users component constructed, start w/empty array')
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        fetch('https://kekambas-bs.herokuapp.com/api/users')//fetch from api promise base then response
            .then(res => res.json())//run func res.json() turns into data on nxt ln
            .then(data => this.setState({//obj is users
                Users: data
            }))
    }

    render() {
        console.log(this.state)
        return (
            <div>
                
                
                {this.state.users.map((u, i) => <UserDetail key={i} User={u} />)}
            </div>//map over users and return user detail  components
        )
    }
}
//Lifecycle Method
//set up route on app.js (<Route exact path='/Users'>), 
//calls the constructor, (constructor(props)) binds props,
//set the state, property is emtpy array here (this.state = {Users: []),
//redure and return (<div>) mounted / mapped to HTML elements,
//set State re-triggers the redured function
//map method return function as  a list


//Instructions
// display it using the componentDidMount() method or creating your own method 
// to retrieve the data and setting the component's state.