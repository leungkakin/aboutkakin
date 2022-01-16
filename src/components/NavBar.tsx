import * as React from "react";
import "../styling/NavBar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function NavBar() {
  const currentUrl = window.location.href;
  const navigate = useNavigate();
  function goToHome() {
    navigate(`/`);
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <Typography
            variant="h3"
            component="div"
            sx={{ flexGrow: 1 }}
            color="common.black"
          >
            {currentUrl.includes("projects") === true ? (
              <ArrowBackIcon id="toHome" onClick={goToHome} />
            ) : (
              <div></div>
            )}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
