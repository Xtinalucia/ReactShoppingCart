import React, { Component } from 'react';

export default class PostDetail extends Component {
    render() {
        return (
            <div>
                <h7>{this.props.post.body} </h7>
            </div>
        )//how you will display the data on your page
    }
}
//{this.props.Posts.date_created} - {this.props.Posts.title}
//display the posts by using this API