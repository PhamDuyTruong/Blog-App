import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'
import "./Sidebar.css";

function Sidebar() {
  const [cats, setCat] = useState([]);

  useEffect(() => {
    const getCats = async () => {
        const res = await axios.get("/cat");
        setCat(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/9420617/pexels-photo-9420617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p>
          I'm a student from University of Science. I'm learning technology infomation. 
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
        {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
                <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
