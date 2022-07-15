import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks";

// Material UI
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Input,
  Checkbox,
  Link,
  Grid,
  FormControl,
  InputLabel,
  Box,
  Typography,
  InputAdornment,
  IconButton,
  Container,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import FinnkinoLogo from "@/assets/images/header-logo.png";

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const user = {
      username: data.get("username"),
      password: data.get("password"),
    };

    auth.login(user);
    navigate("/");
  };

  return (
    <Container component="main" maxWidth="sm">
      {/* Logo */}
      <Link href="#" sx={{ position: "absolute", top: "15px", left: "60px" }}>
        <Avatar alt="Finnkino logo" src={FinnkinoLogo} sx={{ width: 100, height: 100 }} />
      </Link>

      {/* Form Card*/}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#fff",
          p: 6,
        }}
      >
        <Avatar alt="Finnkino logo" src={FinnkinoLogo} sx={{ width: 80, height: 80 }} />
        <Typography component="h1" variant="h5" sx={{ fontWeight: 700, color: "#FFC800" }}>
          Log in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <FormControl fullWidth variant="standard" sx={{ mb: 3 }}>
            <TextField id="standard-username" label="Username" name="username" variant="standard" />
          </FormControl>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? "password" : "text"}
              name="password"
              // value={values.password}
              // onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              p: 2,
              mt: 3,
              mb: 2,
              backgroundColor: "#fdca00",
              color: "#070707",
              fontWeight: 700,
              fontSize: 16,
              "&:hover": {
                backgroundColor: "#caa100;",
              },
            }}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4, position: "relative" }} />
    </Container>
  );
};

const Copyright = (props) => {
  return (
    <Typography variant="body2" color="#fff" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Finnkino
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Login;
