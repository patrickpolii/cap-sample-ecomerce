import React, { useState, useEffect } from 'react';
import {
  auth,
  logInWithEmailAndPassword,
} from '../config/firebase';
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import "../css/userForm.css"

const Login = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
     // State for the form
  const [dataLogin, setDataLogin] = useState({ email: '', password: '' });

  // handle the form data
  const handleSubmit = async (e, params) => {
    e.preventDefault();
    if (params === 'login') {
      await logInWithEmailAndPassword(dataLogin.email, dataLogin.password);
    };
  }

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate('/');
    if (error) alert(error);
  }, [loading, user, error, navigate]);

  
    return (
        <div className="container">
        <div className="forms">
            <div className="form login">
                <span className="title">Login</span>

                <form action="#">
                    <div className="input-field">
                        <input type="text" value={dataLogin.email} onChange={e => setDataLogin ({... dataLogin, email: e.target.value})} placeholder="Enter your email" required/>
                        <i className="uil uil-envelope icon"></i>
                    </div>
                    <div className="input-field">
                        <input type="password" className="password" value={dataLogin.password} onChange={e => setDataLogin ({... dataLogin, password: e.target.value})} placeholder="Enter your password" required/>
                        <i className="uil uil-lock icon"></i>
                        <i className="uil uil-eye-slash showHidePw"></i>
                    </div>

                    <div className="checkbox-text">
                        <div className="checkbox-content">
                            <input type="checkbox" id="logCheck"/>
                            <label for="logCheck" className="text">Remember me</label>
                        </div>
                        
                        <a href="#forget" className="text">Forgot password?</a>
                    </div>

                    <div className="input-field button">
                        <input onClick={e => handleSubmit (e, 'login')} type="button" value="Login"/>
                    </div>
                </form>

                <div className="login-signup">
                    <span className="text">Not a member?
                    <Link to="/signup" className="btn">Register</Link>
                    </span>
                </div>
            </div>
            
        </div>
    </div>
    );
  }
  
  export default Login;
  