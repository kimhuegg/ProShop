import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Button,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React from "react";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#FFD333",
      contrastText: "#000",
    },
    white: {
      main: "#FFF",
      contrastText: "#000",
    },
  },
});

function RegisterForm({ onClose, onOpenLogin }) {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          minWidth: 275,
          maxWidth: 832,
          borderRadius: "20px",
          boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Grid container>
          <Grid
            item
            xs={6}
            sx={{ bgcolor: "#FAF096" }}
            container
            justifyContent="center"
            alignItems={"center"}
          >
            <Grid container justifyContent="center" alignItems={"center"}>
              <div>
                <Typography variant="h5" component="div" sx={{ fontSize: 68, fontWeight: "bold" }}>
                  SHOP APP
                </Typography>
                <img
                  style={{ marginLeft: "auto", marginRight: "auto", display: "block" }}
                  src={require("../../media/Vector.png")}
                />
              </div>
            </Grid>
          </Grid>

          <Grid item xs={6} sx={{ p: "47px" }} container>
            <Grid sx={{ height: "30px" }} container justifyContent="end">
              <Button
                onClick={onClose}
                variant="contained"
                color="white"
                sx={{
                  m: "-20px",
                  borderRadius: "50%",
                  height: "60px",
                  width: "30px",
                  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.25)",
                }}
              >
                x
              </Button>
            </Grid>
            <CardContent>
              <Typography variant="h5" component="div">
                Wellcome to Shop App
              </Typography>
            </CardContent>
            <CardActions>
              <form>
                <TextField
                  margin="dense"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  type="text"
                  autoComplete="username"
                  variant="standard"
                />
                <TextField
                  margin="dense"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  type="email"
                  autoComplete="username"
                  variant="standard"
                />

                <FormControl variant="standard" fullWidth margin="dense">
                  <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          // onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <TextField
                  margin="dense"
                  required
                  fullWidth
                  id="confirm-password"
                  label="Confirm Password"
                  type="password"
                  autoComplete="current-password"
                  variant="standard"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mb: 2, mt: 2, fontSize: "24", fontWeight: "bold" }}
                  color="neutral"
                >
                  Register
                </Button>
                <Grid container>
                  <Grid item xs={12} sx={{ pb: 5 }}>
                    <span variant="body2" onClick={onOpenLogin}>
                      {"Login"}
                    </span>
                  </Grid>
                </Grid>
              </form>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </ThemeProvider>
  );
}

export default RegisterForm;
/**
  * "@emotion/react": "^11.9.0",
    "@emotion/styled": "^11.8.1",
    "@mui/icons-material": "^5.6.2",
    "@mui/material": "^5.6.2",
  */
