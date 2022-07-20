import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn, faUser } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.scss";
import Image from "@/components/Image";
import images from "@/assets/images";
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //Check if user is signed in
  const user = localStorage.getItem("user");
  const renderProfile = () => {
    return (
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    );
  };

  return (
    <AppBar id="main-header" position="static">
      <Container className="main-header__wrapper" maxWidth="xl">
        <Toolbar className="main-header__toolbar" disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Image className="main-header__logo" src={images.logo} />
          </Typography>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon className="main-header__sidebar-icon" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/">
                  <Typography className="main-header__navbar-item" textAlign="center">
                    Trang chủ
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/tin-tuc">
                  <Typography className="main-header__navbar-item" textAlign="center">
                    Tin tức
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/lien-he">
                  <Typography className="main-header__navbar-item" textAlign="center">
                    Liên hệ
                  </Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Image className="main-header__logo" src={images.logo} />
          </Typography>
          <Box
            className="main-header__navbar-list"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            <Link to="/">
              <Button
                className="main-header__navbar-item"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Trang chủ
              </Button>
            </Link>
            <Link to="/">
              <Button
                className="main-header__navbar-item"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Tin tức
              </Button>
            </Link>
            <Link to="/lien-he">
              <Button
                className="main-header__navbar-item"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Liên hệ
              </Button>
            </Link>
          </Box>

          {/* Render action buttons if not sign in */}
          {user ? (
            renderProfile()
          ) : (
            <>
              <Button className="main-header__navbar-btn">
                <span className="hide-on-mobile">Đăng nhập</span>
                <FontAwesomeIcon className="btn__right-icon" icon={faSignIn} />
              </Button>
              <Button className="main-header__navbar-btn">
                <span className="hide-on-mobile">Đăng ký</span>
                <FontAwesomeIcon className="btn__right-icon" icon={faUser} />
              </Button>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;