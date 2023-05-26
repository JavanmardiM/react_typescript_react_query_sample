import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Card, CircularProgress, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { LoginDTO } from "../Models/auth";
import userAxios from "../Services/index";
import { storage } from "../Utilities/storage";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        User Management
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  // const isLoggedIn = !!storage.getToken();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const loginValues: LoginDTO = {
      username: data.get("email") as string,
      password: data.get("password") as string,
    };
    mutate(loginValues);
  };

  const { mutate, isLoading, isError } = useMutation(
    (loginValues: LoginDTO) => userAxios.login(loginValues),
    {
      onSuccess: (queryData, loginValues) => {
        storage.setToken(queryData.data.token);
        navigate("/main");
      },
    }
  );

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     navigate("/main");
  //   }
  // }, [isLoggedIn, navigate]);

  return (
    <Container component="main" maxWidth="xs">
      <Box pt={3}>
        <Card>
          <Box
            sx={{
              margin: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, maxHeight: 36 }}
              >
                {isLoading ? (
                  <Grid container justifyContent="center" alignItems="center">
                    <Box
                      sx={{ mr: 2 }}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <CircularProgress size={20} sx={{ color: "white" }} />
                    </Box>
                    Signing In
                  </Grid>
                ) : (
                  "Sign In"
                )}
              </Button>

              {isError ? <Box p={2}></Box> : null}
            </Box>
          </Box>
        </Card>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};
export default Login;
