"use client";

import { useState } from "react";
import { setCookie } from "cookies-next";
import { useDispatch } from "react-redux";
import { setAuthToken } from "../redux/slices/authSlice";
import { useRouter } from "next/navigation";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = async () => {
    const authToken = "some-auth-token";
    setCookie("authToken", authToken);
    dispatch(setAuthToken(authToken));
    router.push("/home");
  };

  return (
    <Grid container display={"flex"} flexDirection="column">
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Grid
          item
          xs={12}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Typography variant="h6">Login</Typography>
          <TextField
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            sx={{ marginRight: 2 }}
          />
          <TextField
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <Button onClick={handleLogin} disableRipple={true}>
            Login
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Login;
