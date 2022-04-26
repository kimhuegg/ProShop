import { MenuFoldOutlined } from "@ant-design/icons";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, Container, Grid, Modal } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button as BtnAntd, Input } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import ForgotPasswordForm from "../../components/Auth/ForgotPasswordForm.jsx";
import LoginForm from "../../components/Auth/LoginForm.jsx";
import RegisterForm from "../../components/Auth/RegisterForm.jsx";
import "./style.scss";
import CustomButton from '../../components/Navbar/CustomButton'

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  borderRadius: "20px",
  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.25)",
};

function NavbarUser() {
  const [modal, setModal] = useState({
    login: false,
    register: false,
    forgot: false,
    confirm: false,
  });
  const { login, register, forgot, confirm } = modal;

  const handleOpenLogin = () => {
    setModal({ login: true, register: false, forgot: false, confirm: false });
  };

  const handleCloseLogin = () => {
    setModal({ ...modal, login: false });
  };

  const handleOpenRegister = () => {
    setModal({ login: false, register: true, forgot: false, confirm: false });
  };

  const handleCloseRegister = () => {
    setModal({ ...modal, register: false });
  };

  const handleOpenForgotPass = () => {
    setModal({ login: false, register: false, forgot: true, confirm: false });
  };

  const handleCloseForgotPass = () => {
    setModal({ ...modal, forgot: false });
  };

  return (
    <div>
      <div style={{ backgroundColor: "#F0E9E9" }}>
        <Container maxWidth="lg" sx={{ textAlign: "left" }}>
          <Link to={"#"}>About us </Link>&ensp;&ensp;
          <Link to={"#"}>Contacts </Link>&ensp;&ensp;
          <Link to={"#"}>Store </Link>&ensp;&ensp;
          <Link to={"#"}>Track Orders </Link> &ensp;&ensp;
        </Container>
      </div>
      <div style={{ backgroundColor: "#FFD333" }}>
        <Container maxWidth="lg">
          <Box sx={{ pt: 2, pb: 2 }}>
            <Grid container alignItems={"center"}>
              <Grid item xs={2}>
                <Typography sx={{ fontSize: 36, fontWeight: "bold" }}>Shop app</Typography>
              </Grid>
              <Grid item xs={8} container justifyContent={"start"}>
                <Input.Group compact>
                  <BtnAntd>
                    <MenuFoldOutlined /> Category
                  </BtnAntd>
                  <Input.Search allowClear style={{ width: "40%" }} />
                </Input.Group>
              </Grid>
              <Grid item xs={1}>
                <Button sx={{ borderRadius: "50%" }}>
                  <ShoppingCartIcon sx={{ fontSize: 38, fontWeight: "bold" }} />
                </Button>
                <Typography
                  style={{
                    backgroundColor: "#FFF",
                    borderRadius: "50%",
                    height: 25,
                    width: 25,
                    position: "absolute",
                    marginTop: "-20px",
                  }}
                >
                  1
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <CustomButton openLogin={handleOpenLogin}/>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
      <Modal
        open={login}
        onClose={handleCloseLogin}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          <Box container>
            <LoginForm
              onClose={handleCloseLogin}
              onOpenRegister={handleOpenRegister}
              onOpenForgotPass={handleOpenForgotPass}
            />
          </Box>
        </Box>
      </Modal>

      <Modal
        open={register}
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
        open={forgot}
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
      <div className="user-content">
        <Outlet />
      </div>
    </div>
  );
}

export default NavbarUser;
