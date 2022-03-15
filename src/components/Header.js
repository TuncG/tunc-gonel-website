import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { contextFunctions } from "../components/HeaderContext";

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

  const navStateHandler = (name) => {
    setNavBarActive(name);
  };
  /* Get the value from the context */
  var currentHeader = React.useContext(contextFunctions.HeaderContext);

  /* Compare the value with the current state, if different change it */
  if (navBarActive != currentHeader) {
    navStateHandler(currentHeader);
  }
  // make the links here
  const renderLinks = (page) => {
    /* Sets the current link to blue color */
    if (checkActive(page.name, navBarActive) == true) {
      return (
        <Link to={page.dir} style={{ textDecoration: "none" }}>
          <Button
            key={page.name}
            sx={{
              "&.MuiButton-text": { color: "#3273DC" },
              fontSize: "15px",
              mr: 3,
              color: "#757575",
              display: "block",
              textTransform: "none",
              ":hover": {
                backgroundColor: "#FFFFFF",
                color: "black",
              },
            }}
          >
            {page.name}
          </Button>
        </Link>
      );
    } else {
      /* Normal link */
      return (
        <Link to={page.dir} style={{ textDecoration: "none" }}>
          <Button
            key={page.name}
            sx={{
              mr: 3,
              fontSize: "15px",
              color: "#757575",
              display: "block",
              textTransform: "none",
              ":hover": {
                backgroundColor: "#FFFFFF" /* F4F4F4 */,
                color: "black",
              },
            }}
            onClick={() => {
              /* Once the button is clicked run the setHeaderContext function to get a new context with the new page.name and set it to the old context */
              contextFunctions.HeaderContext =
                contextFunctions.setHeaderContext(page.name);
              setNavBarActive(page.name); /* run rerender */
            }}
          >
            {page.name}
          </Button>
        </Link>
      );
    }
  };

  return (
    <Container maxWidth="lg">
      <AppBar
        elevation={1}
        position="static"
        style={{
          background: "#FFFFFF",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            ></Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  color: "#757575",
                  mr: 4,
                  display: { xs: "none", md: "flex" },
                }}
              >
                Tunc Gonel
              </Typography>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              {pages.map((page) => renderLinks(page))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Container>
  );
}
