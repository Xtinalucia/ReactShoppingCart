import React, { Component } from 'react';
import PostDetail from '../components/PostDetail';

export default class Posts extends Component {
    constructor(props){
        super(props);
        console.log('Posts component constructed, start w/empty array')
        this.state = {
            Posts: []
        }
    }

    componentDidMount(){
        console.log('Posts component did mount on  the DOM, reset the state')
        fetch('https://kekambas-bs.herokuapp.com/posts')//fetch from api promise base then response
            .then(res => res.json())//run func res.json() turns into data on nxt ln
            .then(data => this.setState({//obj is Posts
                Posts: data
            }))
    }

    render() {
        console.log('Posts component rendered, render students names')
        console.log(this.state)
        return (
            <div>
                These are Kekambas-72 posts:
                {this.state.Posts.map((p, i) => <PostDetail key={i} Post={p} />)}
            </div>//map over Posts and return user detail  components
        )
    }
}


































//display the posts by using this API endpoint*: https://kekambas-bs.herokuapp.com/posts. Use the useState and useEffect hooks on your function component(s)