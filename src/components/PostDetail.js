// import React, { useState, useEffect } from 'react';


// export const PostDetail = (props) =>{
//     const [post, setPost] = useState({
//         id: null,
//         content: null,
//         title: null,
//         date_created: null
//     });
//     const postId = props.match.params.id;
//     useEffect(() => {
//         fetch(`http://localhost:5000/api/posts/${postId}`)
//         .then(res => res.json())
//         .then(data => setPost(data))
//     }, [])
//     return <div className="card my-3">
//                 <div className="card-header">
//                     {post.title}
//                 </div>
//                 <div className="card-body">
//                     <blockquote className="blockquote mb-0">
//                     <p>{post.content}</p>
//                     <footer className="blockquote-footer"> <cite title="Source Title">{post.date_created}</cite></footer>
//                     </blockquote>
//                 </div>
//             </div>
// }















// import React, { Component } from 'react';

// export default class PostDetail extends Component {
//     render() {
//         return (
//             <div>
//                 <h7>{this.props.post.body} </h7>
//             </div>
//         )//how you will display the data on your page
//     }
// }
// //{this.props.Posts.date_created} - {this.props.Posts.title}
// //display the posts by using this API

// export const Posts  =(props) => {
//     const [posts,setPosts] = useState([]);
    
//     useEffect(()=>{
//         console.log('Effect was called')
//         fetch('https://kekambas-bs.herokuapp.com/posts')//fetch from api promise base then response
//             .then(res => res.json())//run func res.json() turns into data on nxt ln
//             .then(data => this.setPosts(data))//obj is Posts
//     },[])
        
    
//     render() {
//         return (
//             <div>
//                 <h7>{this.props.post.body} </h7>
//             </div>
//         )//how you will display the data on your page
//     }
// }