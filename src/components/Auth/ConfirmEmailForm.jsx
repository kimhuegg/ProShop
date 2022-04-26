import {
  Button, Grid, TextField
} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CircularProgress from '@mui/material/CircularProgress';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import authApi from "../../api/authApi";


const theme = createTheme({
    palette: {
        neutral: {
            main: "#FFD333",
            contrastText: "#000"
        },
        white: {
            main: "#FFF",
            contrastText: "#000"
        }
    }
});

function ConfirmEmailForm() {
  const [loading, setLoading] = useState(true)
  const {userInfo} = useSelector(state => state.auth)

  const [error, setError] = useState('')
//   const formik = useFormik({
//     initialValues: {
//         token: ''
//     },
//     onSubmit: values => {
//         setLoading(true)
//         console.log(values)
//         authApi.verifyEmail({
//             deviceId: userInfo.email
//         }, values.token).then((res) => {
//             console.log(res);
//             setVerified(true)
//         }).catch((error) => {
//             setError(error.toString())
//         }). finally(() => {
//             setLoading(false)
//         })

//     }
// })
    return (
        <ThemeProvider theme={theme}>
            <Grid container>
            {
                loading ? <CircularProgress/>: <Grid item
                    xs={6}
                    sx={
                        {p: "47px"}
                }>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Confirm Email
                        </Typography>
                        <Typography sx={
                                {fontSize: 12}
                            }
                            color="text.secondary">
                            Check your email and enter token here !
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <form onSubmit={
                            formik.handleSubmit
                        }>
                            <TextField onChange={
                                    formik.handleChange
                                }
                                margin="normal"
                                required
                                fullWidth
                                id="token"
                                label="Enter your token"
                                type="text"
                                autoComplete="code"
                                variant="standard"/>

                            <Button type="submit" fullWidth variant="contained"
                                sx={
                                    {
                                        mt: 4,
                                        mb: 2,
                                        fontSize: "24",
                                        fontWeight: "bold"
                                    }
                                }
                                color="neutral">
                                Confirm Email
                            </Button>
                        </form>
                    </CardActions>
                </Grid>
            } 
            </Grid>
        </ThemeProvider>
    );
}

export default ConfirmEmailForm;
