import React from 'react';
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';
import "./Home.css"

function Home() {
  return (
    <>
        <Header />
        <div className='home'>
            <Sidebar />
            <Posts />
        </div>
    </>
  )
}

export default Home