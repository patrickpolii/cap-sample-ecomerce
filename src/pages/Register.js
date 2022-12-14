import "../css/register.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, Input, Label } from "reactstrap";

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
      <div className="container-form">
        <h2>Sign Up</h2>
        <Form className="form">
          <FormGroup>
            <Label for="exampleName" sm={2}>Name</Label>
            <Input
              type="text"
              name="name"
              id="exampleEmail"
              value={dataRegister.name}
              onChange={(e) =>
                setDataRegister({ ...dataRegister, name: e.target.value })
              }
              placeholder="Enter your name"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Username</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              value={dataRegister.email}
              onChange={(e) =>
                setDataRegister({ ...dataRegister, email: e.target.value })
              }
              placeholder="Enter your email"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              value={dataRegister.password}
              onChange={(e) =>
                setDataRegister({ ...dataRegister, password: e.target.value })
              }
              placeholder="Create a password"
              required
            />
          </FormGroup>
          <div className="input-field button">
                      <input onClick={e => handleSubmit (e, 'register')} type="button" value="Register"/>
                  </div>
          <div>
            <span className="text">
              Already a member?
              <Link to="/signin" className="btn">
                Login
              </Link>
            </span>
          </div>
            
        </Form>
      </div>

  );
}

export default Register;
