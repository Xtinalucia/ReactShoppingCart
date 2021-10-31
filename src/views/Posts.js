// import React, {useState, useEffect} from "react";
// import { PostCard } from "../components/PostCard";


// export const Posts = (props) => {
//     const [posts, setPosts] = useState([]);

//     useEffect(()=>{
//         console.log('Effect called')
//         fetch('file:///Users/christinalucia/Downloads/ShoppingCartAPI.postman_collection.json')
//             .then(res => res.json())
//             .then(data => setPosts(data))
//     }, [])

//     return (
//         <div>
//             <h1>This is the Posts Page</h1>
//             {posts.map(p => <PostCard key={p.id} post={p} />)}
//         </div>
        
//     )
    
// }



// import React, { Component } from 'react';
// import PostDetail from '../components/PostDetail';

// export const Posts =(props) => {
//     const [posts,setPosts] = useState([]);
    
//     useEffect(()=>{
//         console.log('Effect was called')
//         fetch('https://kekambas-bs.herokuapp.com/posts')//fetch from api promise base then response
//             .then(res => res.json())//run func res.json() turns into data on nxt ln
//             .then(data => this.setPosts(data))//obj is Posts
//         }, [])

//         return (
//             <div>
//                 These are Kekambas-72 posts:
//                 {posts.map(p => <PostCard key={p.id} post={p} />)}
//             </div>//map over Posts and return user detail  components
//         )}