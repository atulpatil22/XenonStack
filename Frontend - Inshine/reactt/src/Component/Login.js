import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import Api from '../Api';
import { Link, useNavigate } from 'react-router-dom';
import '../Css/Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [email_id, setEmail_id] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleSuccess = () => {
    toast.success("Login Successful");
  }
  const handleError = () => {
    toast.error("Invalid Credentials. Please try again.");
  }

  const onSubmit = (data) => {
    if (!data.email_id) {
      toast.warning("Please enter your email_id.");
    } else if (!data.password) {
      toast.warning("Please enter your password.");
    } else {
      const body = {
        email_id: data.email_id,
        password: data.password,
      };
      axios.post(Api + 'login', body)
        .then((response) => {
          const result = response.data;
          if (result) {
            sessionStorage.setItem("session", JSON.stringify(result));
            sessionStorage.setItem("fullname", data.email_id);
            sessionStorage.setItem("loginStatus", 1);
            handleSuccess();
            navigate('/');
          } else {
            handleError();
          }
        })
        .catch((err) => {
          console.log(err);
          handleError();
        })
    }
  }

  return (
    <div id='login'>
      <div id='body' className="container">
        <input type="checkbox" id="check" />
        <div className="login form">
          <header>Login</header>
          <form action="#" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" className="form-control" placeholder="Enter your email_id" onChange={(e) => {
              setEmail_id(e.target.value);
            }} {...register("email_id", { required: true })} />
            {errors.email_id?.type === 'required' && <p role="alert">email_id is required*</p>}
            <input type="password" className="form-control" placeholder="Enter your password" onChange={(e) => {
              setPassword(e.target.value);
            }} {...register("password", { required: true })} />
            {errors.password?.type === 'required' && <p role="alert" >Password is required*</p>}
            <button type="submit" className="btn btn-outline-primary w-100">Login</button>
            <ToastContainer />
          </form>
          <div className="signup">
            <span className="signup">Don't have an account?
              <label htmlFor="check"><Link to="/register">Signup</Link></label>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
