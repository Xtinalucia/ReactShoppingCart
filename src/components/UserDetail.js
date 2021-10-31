import React, { Component } from 'react'

export default class UserDetail extends Component {
    render() {
        return (
            <div>
                <h7>{this.props.user.first_name} , {this.props.user.last_name}, {this.props.user.email} - ${this.props.user.uername}</h7>
            </div>
        )//how you will display the data on your page
    }
}

