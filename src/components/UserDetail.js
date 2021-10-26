import React, { Component } from 'react'

export default class UserDetail extends Component {
    render() {
        return (
            <div>
                <h7>{this.props.User.first_name} {this.props.User.last_name} - {this.props.User.id}</h7>
            </div>
        )//how you will display the data on your page
    }
}
