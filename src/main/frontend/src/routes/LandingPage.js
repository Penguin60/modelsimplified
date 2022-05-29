import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import App from '../App'
import RegisterPage from './RegisterPage';

const LandingPage = () => {

  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const isUserLoggedIn = () => {
    axios.get("authentication/loggedIn").then(res => {
      console.log(res.data);
      setUserLoggedIn(res.data);
    });
  };

  useEffect(() => {
    console.log("useEffect");
    isUserLoggedIn();
  }, []);

  return (
    <>
      {userLoggedIn ? <App /> : <RegisterPage />}
    </>
  );
}

export default LandingPage;