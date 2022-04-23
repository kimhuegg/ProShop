import { Button, Container, Grid, Modal } from '@mui/material'
import React, { useState } from 'react'

import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import ButtonGroup from '@mui/material/ButtonGroup';
import {
    Input,
} from 'antd';
import 'antd/dist/antd.css';
import { Button as BtnAntd } from 'antd';
import { FastForwardOutlined, MenuFoldOutlined } from '@ant-design/icons';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import LoginForm from './LoginForm.js'
import RegisterForm from './RegisterForm.js';
import ForgotPasswordForm from './ForgotPasswordForm.js';

const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.25)',
};

function NavbarUser() {
    const [modalLogin, setModalLogin] = useState(false)
    const [modalRegister, setModalRegister] = useState(false)
    const [modalForgotPass, setModalForgotPass] = useState(false)
    const [modalConfirmEmail, setModalConfirmEmail] = useState(false)


    const handleOpenLogin = () => {
        setModalLogin(true)
        setModalRegister(false)
        setModalForgotPass(false)
        setModalConfirmEmail(false)
        
    }

    const handleCloseLogin = () => {
        setModalLogin(false)
    }

    const handleOpenRegister = () => {
        setModalRegister(true)
        setModalForgotPass(false)
        setModalConfirmEmail(false)
        setModalLogin(false)
        
    }

    const handleCloseRegister = () => {
        setModalRegister(false)
    }

    const handleOpenForgotPass = () => {
        setModalForgotPass(true)
        setModalRegister(false)
        setModalConfirmEmail(false)
        setModalLogin(false)
        
    }

    const handleCloseForgotPass = () => {
        setModalForgotPass(false)
    }

    return (
        <div>
            <div style={{ backgroundColor: '#F0E9E9' }}>
                <Container maxWidth="lg" sx={{ textAlign: 'left' }} >
                    <Link to={'#'}>About us  </Link>&ensp;&ensp;
                    <Link to={'#'}>Contacts </Link>&ensp;&ensp;
                    <Link to={'#'}>Store  </Link>&ensp;&ensp;
                    <Link to={'#'}>Track Orders </Link> &ensp;&ensp;

                </Container>
            </div>
            <div style={{ backgroundColor: '#FFD333' }}>
                <Container maxWidth="lg">
                    <Box sx={{ pt: 2, pb: 2 }}>
                        <Grid container alignItems={'center'}>
                            <Grid item xs={2}>
                                <Typography sx={{ fontSize: 36, fontWeight: 'bold' }}>Shop app</Typography>
                            </Grid>
                            <Grid item xs={8} container justifyContent={'start'}>
                                <Input.Group compact>
                                    <BtnAntd><MenuFoldOutlined /> Category</BtnAntd>
                                    <Input.Search allowClear style={{ width: '40%' }} defaultValue="0571" />
                                </Input.Group>
                            </Grid>
                            <Grid item xs={1}>
                                <Button sx={{ borderRadius: '50%' }}>
                                    <ShoppingCartIcon sx={{ fontSize: 38, fontWeight: 'bold' }} />
                                </Button>
                                <Typography style={{ backgroundColor: '#FFF', borderRadius: '50%', height: 25, width: 25, position: 'absolute', marginTop: '-20px' }}>1</Typography>

                            </Grid>
                            <Grid item xs={1}>
                                <Button sx={{ borderRadius: '50%' }} onClick={handleOpenLogin}>
                                    <PersonIcon sx={{ fontSize: 38, fontWeight: 'bold' }} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>

                </Container>

            </div>
            <Modal
                open={modalLogin}
                onClose={handleCloseLogin}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styleModal}>
                    <Box container>
                        <LoginForm onClose={handleCloseLogin} onOpenRegister={handleOpenRegister} onOpenForgotPass={handleOpenForgotPass} />
                    </Box>

                </Box>
            </Modal>

            <Modal
                open={modalRegister}
                onClose={handleCloseRegister}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styleModal}>
                    <Box container>
                        <RegisterForm onClose={handleCloseRegister} onOpenLogin={handleOpenLogin} />
                    </Box>

                </Box>
            </Modal>

            <Modal
                open={modalForgotPass}
                onClose={handleCloseForgotPass}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styleModal}>
                    <Box container>
                        <ForgotPasswordForm onClose={handleCloseForgotPass} onOpenLogin={handleOpenLogin} />
                    </Box>

                </Box>
            </Modal>


        </div>
    )
}

export default NavbarUser