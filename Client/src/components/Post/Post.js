import React from 'react';
import {Link} from 'react-router-dom';
import "./Post.css"

function Post({post}) {
  return (
    <div className='post'>
         <img
        className="postImg"
        src="https://img.freepik.com/free-photo/worker-reading-news-with-tablet_1162-83.jpg?w=996&t=st=1668179366~exp=1668179966~hmac=243f1254d0108f32df4e390a907fea8ccf7bad009bf76cc392c605ac4c7a49f7"
        alt="hinh anh"
      />
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
        <span className="postTitle"> 
            {post.title}
        </span>
        </Link>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">
          {post.desc}
      </p>
    </div>
  )
}

export default Post