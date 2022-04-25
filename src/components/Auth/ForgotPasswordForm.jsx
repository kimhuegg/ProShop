import React, {useState} from "react";
import {useFormik} from "formik";

import {Button, Grid, TextField,  Alert,} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CircularProgress from '@mui/material/CircularProgress';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
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

function ForgotPasswordForm({onClose, onOpenLogin}) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        onSubmit: values => {
            setLoading(true)
            console.log(values)
            authApi.forgotPassword(values).then((res) => {
                onClose()
            }).catch((error) => {
                setError(error.toString())
            }). finally(() => {
                setLoading(false)
            })
        }
    })
    return (
        <ThemeProvider theme={theme}>
            <Card sx={
                {
                    minWidth: 275,
                    maxWidth: 832,
                    borderRadius: "20px",
                    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.25)"
                }
            }>
                <Grid container>
                    <Grid item
                        xs={6}
                        sx={
                            {p: "47px"}
                    }>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Forgot Password
                            </Typography>
                            <Typography sx={
                                    {fontSize: 12}
                                }
                                color="text.secondary">
                                Please enter your exact email to receive your password !
                            </Typography>
                            {
                            error ? <Alert severity="error">
                                {error}</Alert> : ''
                        } </CardContent>
                        <CardActions>
                            <form onSubmit={
                                formik.handleSubmit
                            }>

                                <TextField margin="normal" required fullWidth id="email" label="email" type="email" autoComplete="code" variant="standard"
                                    onChange={
                                        formik.handleChange
                                    }/> 
                                    {
                                loading ? <CircularProgress/>: <Button type="submit" fullWidth variant="contained"
                                    sx={
                                        {
                                            mb: 2,
                                            mt: 2,
                                            fontSize: "24",
                                            fontWeight: "bold"
                                        }
                                    }
                                    color="neutral">
                                    Recover password
                                </Button>
                            }
                                <Grid container>
                                    <Grid item
                                        xs={12}
                                        sx={
                                            {pb: 5}
                                    }>
                                        <span variant="body2"
                                            onClick={onOpenLogin}>
                                            {"Login "} </span>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardActions>
                    </Grid>
                    <Grid item
                        xs={6}
                        sx={
                            {bgcolor: "#FAF096"}
                        }
                        container
                        alignItems={"start"}>
                        <Grid sx={
                                {height: "30px"}
                            }
                            container
                            justifyContent="end">
                            <Button onClick={onClose}
                                variant="contained"
                                color="white"
                                sx={
                                    {
                                        boxSizing: "border-box",
                                        p: 0,
                                        borderRadius: "50%",
                                        m: 1,
                                        height: "60px",
                                        width: "30px",
                                        boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.25)"
                                    }
                            }>
                                x
                            </Button>
                        </Grid>
                        <Grid container justifyContent="center"
                            alignItems={"center"}>
                            <div>
                                <Typography variant="h5" component="div"
                                    sx={
                                        {
                                            fontSize: 68,
                                            fontWeight: "bold"
                                        }
                                }>
                                    SHOP APP
                                </Typography>
                                <img style={
                                        {
                                            marginLeft: "auto",
                                            marginRight: "auto",
                                            display: "block"
                                        }
                                    }
                                    src={
                                        require("../../media/Vector.png")
                                    }/>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        </ThemeProvider>
    );
}

export default ForgotPasswordForm;
