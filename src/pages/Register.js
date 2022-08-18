import "../css/register.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import {
  auth,
  registerWithEmailAndPassword,
} from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const [dataRegister, setDataRegister] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleSubmit = async (e, params) => {
        e.preventDefault();
        if (params === 'register') {
            await registerWithEmailAndPassword(
                dataRegister.name,
                dataRegister.email,
                dataRegister.password
              );
              alert('User created successfully');    
        } 
    };
    
    useEffect(() => {
        if (loading) {
          return;
        }
        if (user) navigate('/');
        if (error) alert(error);
    }, [loading, user, error, navigate]);
    


  return(
     <div>
      <div className="forms">
        <div className="form signup">
          <span className="title">Registration</span>
          <form action="#">
            <div className="input-field">
              <input type="text" value={dataRegister.name} onChange={e => setDataRegister ({... dataRegister, name: e.target.value})} placeholder="Enter your name" required />
              <i className="uil uil-user"></i>
            </div>
            <div className="input-field">
              <input type="text" value={dataRegister.email} onChange={e => setDataRegister ({... dataRegister, email: e.target.value})} placeholder="Enter your email" required />
              <i className="uil uil-envelope icon"></i>
            </div>
            <div className="input-field">
              <input
                type="password"
                className="password"
                value={dataRegister.password} onChange={e => setDataRegister ({... dataRegister, password: e.target.value})}
                placeholder="Create a password"
                required
              />
              <i className="uil uil-lock icon"></i>
            </div>

            <div className="checkbox-text">
              <div className="checkbox-content">
                <input type="checkbox" id="termCon" />
                <label for="termCon" className="text">
                  I accepted all terms and conditions
                </label>
              </div>
            </div>

            <div className="input-field button">
              <input type="button" onClick={e => handleSubmit (e, 'register')} value="Signup" />
            </div>
          </form>

          <div className="signup">
            <span className="text">
              Already a member?
              <Link to="/signin" className="btn">
                Logim
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
