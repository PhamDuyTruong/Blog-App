import React, {useRef, useContext} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import "./Login.css";
import {Context} from '../../context/Context'

function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const {user, dispatch, isFetching} = useContext(Context);

  const handleSubmit = async(e) => {
    e.preventDefault();
    dispatch({type: "LOGIN_START"});
    try {
      const res= await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value
      });
      dispatch({type: "LOGIN_SUCCESS", payload: res.data});
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }

  };

  console.log(user);
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input className="loginInput" type="text" placeholder="Enter your username..." ref={userRef}/>
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." ref={passwordRef}/>
        <button className="loginButton" type='submit'  disabled={isFetching}>Login</button>
      </form>
        <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
        </button>
    </div>
  )
}

export default Login