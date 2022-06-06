import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CardProfiles from "./CardProfiles";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const RegisterPage = () => {
  const [open, setOpen] = React.useState(false);
  const [missingFields, setMissingFields] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleErrorClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setMissingFields(false);
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  });

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleRegisterBtn = async (event) => {
    event.preventDefault();

    if (!formValue.firstName) {
      console.log(formValue.firstName);
      setMissingFields(true);
      return;
    }
    if (!formValue.lastName) {
      setMissingFields(true);
      return;
    }
    if (!formValue.email) {
      setMissingFields(true);
      return;
    }
    if (!formValue.password) {
      setMissingFields(true);
      return;
    }

    // store the states in the form data
    const loginFormData = new FormData();
    loginFormData.append("firstName", formValue.firstName);
    loginFormData.append("lastName", formValue.lastName);
    loginFormData.append("email", formValue.email);
    loginFormData.append("password", formValue.password);

    // make axios post request
    axios.post("/api/v1/registration", loginFormData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setOpen(true);
  };

  return (
    <>
      <div className="productsBackground">
        <div className="form-box">
          <h1 id="registerText">Create Your Modelsimplified Account!</h1>
          <br />
          <br />
          <form onSubmit={handleRegisterBtn} id="registrationForm">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                required
                id="firstName"
                label="First Name"
                variant="outlined"
                onChange={handleChange}
                name="firstName"
              />
              <br />
              <TextField
                required
                label="Last Name"
                variant="outlined"
                id="lastName"
                onChange={handleChange}
                name="lastName"
              />
              <br />
              <TextField
                required
                label="Email"
                variant="outlined"
                id="email"
                onChange={handleChange}
                name="email"
              />
              <br />
              <TextField
                required
                type="password"
                label="Password"
                variant="outlined"
                id="password"
                onChange={handleChange}
                name="password"
              />
              <br />
              <Button
                variant="outlined"
                onClick={handleRegisterBtn}
                type="submit"
                value="Register"
              >
                Register
              </Button>
            </Box>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Thanks for registering! Please check your email to confirm.
              </Alert>
            </Snackbar>
            <Snackbar
              open={missingFields}
              autoHideDuration={6000}
              onClose={handleErrorClose}
            >
              <Alert
                onClose={handleErrorClose}
                severity="error"
                sx={{ width: "100%" }}
              >
                An error has occurred - please check again.
              </Alert>
            </Snackbar>
          </form>
          <a href="/login">Login</a>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
