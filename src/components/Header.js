import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
var home = { name: "Home", dir: "/" };
var projects = {
  name: "Projects",
  dir: "/projects",
};
var contact = {
  name: "Contact",
  dir: "/contact",
};

var about = {
  name: "About",
  dir: "/about",
};

const checkActive = (name, currentState) => {
  if (name == currentState) {
    return true;
  }
  return false;
};

var pages = [home, projects, contact, about];

export default function Header() {
  const [navBarActive, setNavBarActive] = useState("Home");

  // make the links here
  const renderLinks = (page) => {
    if (checkActive(page.name, navBarActive) == true) {
      return (
        <Link to={page.dir} style={{ textDecoration: "none" }}>
          <Button
            key={page.name}
            sx={{
              "&.MuiButton-text": { color: "#3273DC" },
              fontSize: "18px",
              my: 0,
              color: "#757575",
              display: "block",
              textTransform: "none",
              ":hover": {
                backgroundColor: "#F4F4F4",
                color: "black",
              },
            }}
          >
            {page.name}
          </Button>
        </Link>
      );
    } else {
      return (
        <Link to={page.dir} style={{ textDecoration: "none" }}>
          <Button
            key={page.name}
            sx={{
              my: 0,
              fontSize: "18px",
              color: "#757575",
              display: "block",
              textTransform: "none",
              ":hover": {
                backgroundColor: "#F4F4F4",
                color: "black",
              },
            }}
          >
            {page.name}
          </Button>
        </Link>
      );
    }
  };

  return (
    <Box>
      <AppBar position="static" style={{ m: "auto", background: "#F4F4F4" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            ></Box>

            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            ></Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  color: "#757575",
                  my: 0,
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                }}
              >
                Logo
              </Typography>
              {/* {pages.map((page) => (
                <Button
                  key={page.name}
                  sx={{
                    my: 1,
                    color: "#757575",
                    display: "block",
                    textTransform: "none",
                    ":hover": {
                      backgroundColor: "#fff",
                      color: "red",
                    },
                  }}
                >
                  {page.name}
                </Button>
              ))} */}

              {pages.map((page) => renderLinks(page))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
