import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {
    Alert, TextField, Button, FormControlLabel, Checkbox, Box, Grid, InputAdornment, CardMedia, FormControl,
    InputLabel, Input
} from '@mui/material'; 
import { useNavigate, Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        neutral: {
            main: '#FFD333',
            contrastText: '#000',
        },
        white: {
            main: '#FFF',
            contrastText: '#000',
        },
    },
});

function ConfirmEmailForm() {
    return (
        <ThemeProvider theme={theme}>

            <Card sx={{ minWidth: 275, maxWidth: 832, borderRadius: '20px', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.25)' }}>
                <Grid container>
                    <Grid item xs={6} sx={{ p: '47px' }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Confirm Email
                            </Typography>
                            <Typography sx={{ fontSize: 12 }} color="text.secondary">
                                Please enter your email to confirm !
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <form >
                                <FormControl variant="standard" fullWidth margin="normal" required>
                                    <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
                                    <Input
                                        id="standard-adornment-password"
                                        type='email'
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <Button>send token</Button>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="code"
                                    label="Enter your token"
                                    type="text"
                                    autoComplete="code"
                                    variant="standard"

                                />

                                <Button type="submit" fullWidth variant="contained" sx={{ mt: 4, mb: 2, fontSize: '24', fontWeight: 'bold' }} color='neutral'>
                                    Confirm Email
                                </Button>
                            </form>
                        </CardActions>
                    </Grid>
                    <Grid item xs={6} sx={{ bgcolor: '#FAF096' }} container alignItems={'start'}>
                        <Grid sx={{ height: '30px' }} container justifyContent="end">
                            <Button variant='contained' color='white' sx={{ borderRadius: '50%', m: 1, p: 0, height: '60px', width: '30px', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.25)' }}>x</Button>
                        </Grid>
                        <Grid container justifyContent="center" alignItems={'center'}>
                            <div>
                                <Typography variant="h5" component="div" sx={{ fontSize: 68, fontWeight: 'bold' }}>
                                    SHOP APP
                                </Typography>
                                <img src={require('./Vector.png')} />
                            </div>
                        </Grid>


                    </Grid>
                </Grid>
            </Card>
        </ThemeProvider>

    )
}

export default ConfirmEmailForm