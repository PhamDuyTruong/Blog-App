import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useLocation} from 'react-router-dom';
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';
import "./Home.css"

function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(() => {
    const fetchPost = async () => {
       const res =  await axios.get("/post" + search);
       setPosts(res.data);
    };
    fetchPost();
  }, [search])
  return (
    <>
        <Header />
        <div className='home'>
            <Sidebar />
            <Posts posts={posts}/>
        </div>
    </>
  )
}

export default Home