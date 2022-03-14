import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "../components/Card";
import Box from "@mui/material/Box";

/* Variable that keeps track of my current projects */
var content = {
  newstrack: {
    title: "NewsTrack",
    main: "Website that tracks news articles about popular tech compagnies. Made with React and the Material UI library. The NewsApi api was used in retrieving the articles displayed.",
    color: "primary.light",
    link: "https://github.com/TuncG/NewsTrack",
    button: "View Code",
    buttonlink: "https://github.com/TuncG/NewsTrack",
  },
  tuncgonel: {
    title: "Personal Website",
    main: "The source code for my personal website. Made with React and styled using the Material UI library. Built with hopes and dreams.",
    color: "secondary.light",
    link: "https://github.com/TuncG/tunc-gonel-website",
    button: "View Code",
    buttonlink: "https://github.com/TuncG/tunc-gonel-website",
  },
  turingtest: {
    title: "Turing Test",
    main: "Turing test game developed in Python using the Pygame and OpenAI libraries. Questions can be inputed by the user and a response is generated using GPT2 from OpenAI.",
    color: "warning.light",
    link: "https://github.com/TuncG/Turing_Test_Game",
    button: "View Code",
    buttonlink: "https://github.com/TuncG/Turing_Test_Game",
  },
  foodapp: {
    title: "FastFood Delivery",
    main: "Uber like food delivery website. Developed using React and custom CSS styling using CSS modules. Mostly showing off my knoweldge of various built in React hooks such as useState, useContext, useReducer, etc.",
    color: "success.light",
    link: "https://github.com/TuncG/Food-Order-WebReact",
    button: "View Live Demo",
    buttonlink: "https://tuncfastfood.herokuapp.com/",
  },
  utfr: {
    title: "Univeristy of Toronto Formula Racing",
    main: "As a member of my univeristies formula SAE team I develop firmware for our race car. I mostly program in C/Arduino writing code for various microcontrollers. Unfortunately I can not provide a link to the code as we are currenlty using it for our current car !",
    color: "error.light",
    link: "https://fsaeutoronto.ca/",
    button: "View UTFR Website",
    buttonlink: "https://fsaeutoronto.ca/",
  },
};

export default function Projects() {
  return (
    <Container maxWidth="lg">
      <Typography mt={6} variant="h4">
        {" "}
        Projects
      </Typography>
      <Typography mt={2} variant="body2">
        Below you can find all my projects. Click on the card to view my code on
        github.
      </Typography>

      <Box mb={10} sx={{ display: "flex" }}>
        {/* Left Coloumn */}
        <Box>
          <Card content={content.newstrack}></Card>
          <Card content={content.tuncgonel}></Card>
          <Card content={content.utfr}></Card>
        </Box>

        {/* Right Coloumn */}
        <Box ml={20}>
          <Card content={content.turingtest}></Card>
          <Card content={content.foodapp}></Card>
        </Box>
      </Box>
    </Container>
  );
}
