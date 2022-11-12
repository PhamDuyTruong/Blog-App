import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios'
import {Link, useLocation} from 'react-router-dom';
import {Context} from '../../context/Context';
import "./DetailPost.css"

function DetailPost() {
  const location = useLocation();
  const {user} = useContext(Context);
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const PF = "http://localhost:5000/images/";
  
  
  useEffect(() => {
    const getPost = async() => {
      const res = await axios.get("/post/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/post/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };
  return (
        <div className="singlePost">
          <div className="singlePostWrapper">
          {post.photo && (
            <img src={PF + post.photo} alt="" className="singlePostImg" />
            )}
            <h1 className="singlePostTitle">
              {title}
              {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
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