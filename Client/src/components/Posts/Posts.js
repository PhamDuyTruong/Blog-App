import React from 'react';
import Post from '../Post/Post';
import "./Posts.css"

function Posts({posts}) {
  return (
    <div className='posts'>
       {posts.map((item) => (
        <Post post={item}/>
       ))}
    </div>
  )
}

export default Posts