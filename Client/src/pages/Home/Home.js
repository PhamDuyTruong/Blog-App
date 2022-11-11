import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';
import "./Home.css"

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
       const res =  await axios.get("/post");
       setPosts(res.data);
    };
    fetchPost();
  }, [])
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