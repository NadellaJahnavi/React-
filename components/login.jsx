import React, { useState } from "react";
import { Typography, Button, Grid, Box, TextField } from "@mui/material";
import axios from "axios";
const ariaLabel = { "aria-label": "description" };

const Login = (props) => {
  const [user, setUser] = useState({
    loginId: "",
    userName: "",
    password: "",
  });

  const handleChange = (event) => {
    console.log("HandleChange");
    const usr = { ...user };
    usr[event.target.name] = event.target.value;
    setUser(usr);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Handle submit");
    //const errors = validate();
    //console.log(errors);
    axios
      .post("http://localhost:8080/addLoginDetails", user)
      .then((res) => props.history.push("/home"));
  };
  return (
    <div>
      <Typography variant="h3">Login Page</Typography>
      <Grid container>
        <Grid item xs={4} style={{ marginLeft: "auto", marginRight: "auto" }}>
          <form
            onSubmit={handleSubmit}
            style={{
              border: "1px solid black",
              padding: "30px",
              marginTop: "10px",
            }}
          >
            <Box mb={3}>
              <TextField
                inputProps={ariaLabel}
                type="username"
                variant="outlined"
                fullWidth
                label="username"
                value={user.userName}
                name="userName"
                onChange={handleChange}
              />
            </Box>
            <Box mb={3}>
              <TextField
                inputProps={ariaLabel}
                type="password"
                variant="outlined"
                fullWidth
                label="password"
                value={user.password}
                name="password"
                onChange={handleChange}
              />
            </Box>
            <Box>
              <Button variant="contained" type="submit" fullWidth>
                Login
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
