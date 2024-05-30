import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  console.log(data);
  const handleClick = async () => {
    console.log(data);
    try {
      const res = await axios.post("http://localhost:3001/auth/login", data);
      alert("Login Succesfully");
    } catch (error) {
      console.log(error);
      alert("Login Unsuccesful");
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="User Name"
            name="username"
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
          />
          <br />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            name="password"
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
          />
          <div className="btn">
            <Button variant="contained" color="success" onClick={handleClick}>
              Login
            </Button>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Login;
