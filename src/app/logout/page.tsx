"use client";

import { deleteCookie } from "cookies-next";
import { useDispatch } from "react-redux";
import { setAuthToken } from "../redux/slices/authSlice";
import { useRouter } from "next/navigation";
import { Button, Grid, Paper } from "@mui/material";

const Logout = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    const authToken = "some-auth-token";
    deleteCookie("authToken");
    dispatch(setAuthToken(authToken));
    router.push("/login");
  };

  return (
    <Grid container display={"flex"} flexDirection="column">
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Button onClick={handleLogout} disableRipple={true}>
          {" "}
          Logout{" "}
        </Button>
      </Paper>
    </Grid>
  );
};
export default Logout;
