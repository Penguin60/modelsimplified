import React, {useState, useEffect, useCallback} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CardProfiles from './CardProfiles';

const RegisterPage = () => {

  const [formValue, setFormValue] = useState({
    firstName: '',
    lastName: '',
    password: '',
    email: ''
  });

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }

  const handleRegisterBtn = async(event) => {
    event.preventDefault();
    // store the states in the form data
    const loginFormData = new FormData();
    loginFormData.append("firstName", formValue.firstName)
    loginFormData.append("lastName", formValue.lastName)
    loginFormData.append("email", formValue.email)
    loginFormData.append("password", formValue.password)
    
    // make axios post request
    axios.post("/api/v1/registration",
      loginFormData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    );
  }


  return(
    <>
    <div className='productsBackground'>
      <div className='productsContainer'>
        <h1 id='registerText'>Register</h1>
        <form onSubmit={handleRegisterBtn} id = "registrationForm">
          <p>register</p>
          <label>First Name: <input type="text"
           name="firstName"
          placeholder='Enter Your First Name' 
          onChange={handleChange}/></label>
          <br />
          <label>Last Name: <input type="text" 
          name="lastName" 
          placeholder='Enter Your Last Name'
          onChange={handleChange}/></label>
          <br />
          <label>Username: <input type="text" 
          name="email" 
          placeholder='Enter Your Email'
          onChange={handleChange}/></label>
          <br />
          <label>Password: <input type="password" 
          name="password" 
          placeholder='Enter Your Password'
          onChange={handleChange}/></label>
          <br />
          <input type="submit" value="Register" />
        </form>
        <Link to="/Home" id='homeLink'>Go Back Home!</Link>
      </div>
    </div>

    </>
  );
}
export default RegisterPage;