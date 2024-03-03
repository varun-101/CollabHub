import React, { useState, useEffect } from "react";
import basestyle from "../Base.module.css";
import loginstyle from "./Login.module.css";
import axios from "axios";
import "./login.css"
import { useNavigate, NavLink } from "react-router-dom";
import Header from "../Header";

const Login = ({ setUserState }) => {

   

  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };
  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "Please enter a valid email address";
    }
    if (!values.password) {
      error.password = "Password is required";
    }
    return error;
  };

  const loginHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);
    // if (!formErrors) {

    // }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        try {
          console.log(user);
          const formData = new URLSearchParams();
          formData.append('username', user.email);
          formData.append('password', user.password);
          // console.log(formData);
          const response = await axios.post("http://localhost:8081/login",  formData,{
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }});
          // alert(response.data.message);
          console.log(response);
          // setUserState(response.data);
          navigate("/", { replace: true });
          if (response.data.redirectUrl) {
            window.location.href = response.data.redirectUrl; // Redirect to the specified URL
          }
        } catch (error) {
          console.error('Error:', error);
        }
      }
    };
  
    fetchData(); // Call the async function
  }, [formErrors]);

  return (
    <>
    <Header />
    <div className={loginstyle.App}>
    <div className={loginstyle.login}>
      <form>
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={changeHandler}
          value={user.email}
        />
        <p className={basestyle.error}>{formErrors.email}</p>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={changeHandler}
          value={user.password}
        />
        <p className={basestyle.error}>{formErrors.password}</p>
        <button className={basestyle.button_common} onClick={loginHandler}>
          Login
        </button>
      </form>
      <NavLink to="/register">Not yet registered? Register Now</NavLink>
    </div>
    </div>
    </>
  );
};
export default Login;
