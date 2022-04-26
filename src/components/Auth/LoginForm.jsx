import {
    Alert,
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    TextField
} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CircularProgress from '@mui/material/CircularProgress';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import {useFormik} from "formik";
import React, {useState} from "react";
import { useDispatch } from "react-redux";
import authApi from "../../api/authApi";

import {login} from '../../redux/reducers/authSlice'

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

function LoginForm({onClose, onOpenRegister, onOpenForgotPass}) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            setLoading(true)
            const userLogin = {
                email: values.email,
                password: values.password,
                deviceId: values.email
            }
            authApi.login(userLogin).then((res) => {
                const token = res.data.tokens.access.token
                const userInfo = res.data.user
                localStorage.setItem("token", token)
                localStorage.setItem('userInfo', JSON.stringify(userInfo))
                dispatch(login(userInfo))
                onClose()
            }).catch((error) => {
                setError(error.toString())
            }). finally(() => {
                setLoading(false)
            })
        }
    });
    return (
        <ThemeProvider theme={theme}>
            <Card sx={
                {
                    minWidth: 300,
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
                                Wellcome to Shop App
                            </Typography>
                            {
                            error ? <Alert severity="error">
                                {error}</Alert> : ''
                        } 
                        </CardContent>


                        <CardActions>
                            <form onSubmit={
                                formik.handleSubmit
                            }>
                                <TextField margin="normal" required fullWidth id="email" label="Email" type="text" autoComplete="username" variant="standard"
                                    onChange={
                                        formik.handleChange
                                    }/>
                                <TextField margin="normal" required fullWidth id="password" label="Password" type="password" autoComplete="current-password" variant="standard"
                                    onChange={
                                        formik.handleChange
                                    }/>

                                <Grid container justifyContent="end">
                                    <Grid item>
                                        <span variant="body2"
                                            onClick={onOpenForgotPass}>
                                            {"Forgot ? "} </span>
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent="start">
                                    <FormControlLabel control={
                                            <Checkbox
                                        value="remember"
                                        color="primary"/>
                                        }
                                        label="Remember me"/>
                                </Grid>

                                {
                                loading ? <CircularProgress/>: <Button type="submit" fullWidth variant="contained"
                                    sx={
                                        {
                                            mb: 2,
                                            fontSize: "24",
                                            fontWeight: "bold"
                                        }
                                    }
                                    color="neutral">
                                    Log In
                                </Button>
                            }
                                <Grid container>
                                    <Grid item
                                        xs={12}
                                        sx={
                                            {
                                                pb: 5,
                                                cursor: 'pointer'
                                            }
                                    }>
                                        <span variant="body2"
                                            onClick={onOpenRegister}>
                                            {"Create an account "} </span>
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
                                        borderRadius: "50%",
                                        m: 1,
                                        p: 0,
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

export default LoginForm;
