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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

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

function ForgotPasswordForm({ onClose, onOpenLogin }) {
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
          <Grid item xs={6} sx={{ p: "47px" }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Forgot Password
              </Typography>
              <Typography sx={{ fontSize: 12 }} color="text.secondary">
                Please enter your email to receice your password !
              </Typography>
            </CardContent>
            <CardActions>
              <form>
                <FormControl variant="standard" fullWidth margin="normal" required>
                  <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type="email"
                    endAdornment={
                      <InputAdornment position="end">
                        <Button>send code</Button>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="code"
                  label="code"
                  type="text"
                  autoComplete="code"
                  variant="standard"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 4, mb: 2, fontSize: "24", fontWeight: "bold" }}
                  color="neutral"
                >
                  Recover Password
                </Button>
                <Grid container>
                  <Grid item xs={12} sx={{ pb: 5 }}>
                    <span variant="body2" onClick={onOpenLogin}>
                      {"Login "}
                    </span>
                  </Grid>
                </Grid>
              </form>
            </CardActions>
          </Grid>
          <Grid item xs={6} sx={{ bgcolor: "#FAF096" }} container alignItems={"start"}>
            <Grid sx={{ height: "30px" }} container justifyContent="end">
              <Button
                onClick={onClose}
                variant="contained"
                color="white"
                sx={{
                  boxSizing: "border-box",
                  p: 0,
                  borderRadius: "50%",
                  m: 1,
                  height: "60px",
                  width: "30px",
                  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.25)",
                }}
              >
                x
              </Button>
            </Grid>
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
        </Grid>
      </Card>
    </ThemeProvider>
  );
}

export default ForgotPasswordForm;
