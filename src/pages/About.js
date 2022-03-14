import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import CircleIcon from "@mui/icons-material/Circle";
import ListItem from "@mui/material/ListItem";

import Links from "@mui/material/Link";

var linkedIn = {
  name: "LinkedIn",
  dir: "https://www.linkedin.com/in/tunc-gonel",
};
var gitHub = { name: "GitHub", dir: "https://github.com/TuncG" };

var linksList = [linkedIn, gitHub]; /* Keeps track of all the links */

const renderList = (links) => {
  return (
    <ListItem>
      <CircleIcon sx={{ fontSize: 8 }} />
      <Links href={links.dir} underline="hover">
        <Typography sx={{ marginLeft: 2 }}>{links.name}</Typography>
      </Links>
    </ListItem>
  );
};

export default function About() {
  return (
    <Container maxWidth="md" sx={{ justifyContent: "center" }}>
      <Box sx={{ marginLeft: 10 }}>
        {/* Text area start */}
        <Typography mt={20} variant="h4">
          {" "}
          About Tunc Gonel
        </Typography>

        {/* Text Boxes */}
        <Box sx={{ maxWidth: 600, marginTop: 2 }}>
          <Typography variant="body1">
            I'm a computer science student studying at the University of
            Toronto. I have been programming since I was 16 years old and now
            proficient with over 4 different programming langugaes. My strong
            foundation in programming works perfectly with my underlying
            philosophy to set goals, to keep on learning new concepts. I want to
            be able to not only create code that is effiecent but innovative and
            change the field I'm working in. Currently developing in React and
            PHP/Node.js.
          </Typography>{" "}
          <Typography sx={{ marginTop: 2 }} variant="body1">
            When I'm not programming or in school, I like to lift weights 5-6x
            week and play drop in volleyball offered at my Univeristy. I also
            follow the world Formula 1 pretty religiously (Go Vettel!) and I
            love cars in general. One day I hope to see a grand prix live and
            own my 458 or GT3 (Probably both).
          </Typography>
          {/*  <Typography sx={{ marginTop: 2 }} variant="body1">
            Feel free to reach out to me
            <Link
              to={"/contact"}
              style={{ textDecoration: "none", color: "#3273DC" }}
            >
              {" "}
              here.
            </Link>
          </Typography> */}
        </Box>

        {/* Links Section */}
        <Typography sx={{ mt: 6 }} variant="h5" component="div">
          Links
        </Typography>

        {/* Render links below */}
        <List>
          <ListItem>
            <CircleIcon sx={{ fontSize: 8 }} />
            <Link
              to={"/contact"}
              style={{ textDecoration: "none", color: "#3273DC" }}
            >
              <Typography sx={{ marginLeft: 2 }}>Contact</Typography>
            </Link>
          </ListItem>
          <ListItem>
            <CircleIcon sx={{ fontSize: 8 }} />
            <Link
              to={"/projects"}
              style={{ textDecoration: "none", color: "#3273DC" }}
            >
              <Typography sx={{ marginLeft: 2 }}>Projects</Typography>
            </Link>
          </ListItem>
          {linksList.map((link) => renderList(link))}
        </List>
      </Box>
    </Container>
  );
}
