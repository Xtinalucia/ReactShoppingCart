import React, { Component } from 'react'

export default class ProductDetail extends Component {
    render() {
        return (
            <div>
                <h7>{this.props.products.image} , {this.props.products.name}, {this.props.products.description} - ${this.props.products.price}</h7>
            </div>
        )//how you will display the data on your page
    }
}