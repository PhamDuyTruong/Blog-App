import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Link, useLocation} from 'react-router-dom';
import "./DetailPost.css"

function DetailPost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  
  useEffect(() => {
    const getPost = async() => {
      const res = await axios.get("/post/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path])
  return (
        <div className="singlePost">
          <div className="singlePostWrapper">
            <img
              className="singlePostImg"
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <h1 className="singlePostTitle">
              {title}
              <div className="singlePostEdit">
                <i className="singlePostIcon far fa-edit"></i>
                <i className="singlePostIcon far fa-trash-alt"></i>
              </div>
            </h1>
            <div className="singlePostInfo">
              <span>
                Author:
                <b className="singlePostAuthor">
                <Link to={`/?user=${post.username}`} className="link">
                    <b> {post.username}</b>
                </Link>
                </b>
              </span>
              <span>{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="singlePostDesc">
              {desc}
            </p>
          </div>
        </div>
  )
}

export default DetailPost