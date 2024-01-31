import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "../components/Card";
import Box from "@mui/material/Box";

/* Variable that keeps track of my current projects */
var content = {
  newstrack: {
    title: "NewsTrack",
    main: "NewsTrack is a dashboard that tracks news articles about popular tech compagnies. Made with React and the Material UI library. The NewsApi api was used in retrieving the articles displayed.",
    subtitle: "React, JS, Material UI",
    color: "primary.light",
    link: "https://github.com/TuncG/NewsTrack",
    button: "View Code",
    buttonlink: "https://newstrack.tuncgonel.ca/admin/pages/DashboardPage",
  },
  tuncgonel: {
    title: "Personal Website",
    main: "The source code for my personal website. Made with React and styled using the Material UI library. The website is hosted on Heroku.",
    subtitle: "React, JS, Material UI",
    color: "secondary.light",
    link: "https://github.com/TuncG/tunc-gonel-website",
    button: "View Code",
    buttonlink: "https://github.com/TuncG/tunc-gonel-website",
  },
  memorizeapp: {
    title: "Memorize App",
    main: "Simple IOS game where individuals have to match emojis of the same kind. Made with SwiftUI using XCode. The app covers key Swift development concepts such as Model-View-ViewModel and has numerous dynamic views.",
    subtitle: "SwiftUI, XCode, IOS",
    color: "primary.dark",
    link: "https://github.com/TuncG/Memorize-app",
    button: "View Code",
    buttonlink: "https://github.com/TuncG/Memorize-app",
  },
  reserveapp: {
    title: "Reserve App",
    main: "Reservation IOS app where customers can make reservations and merchants can access their own reservations. The app makes use of numerous dynamic views such as login screens, forms and bottom naviations bars.",
    subtitle: "SwiftUI, XCode, IOS",
    color: "error.dark",
    link: "https://github.com/TuncG/reserveUpApp",
    button: "View Code",
    buttonlink: "https://github.com/TuncG/reserveUpApp",
  },
  foodapp: {
    title: "FastFood Delivery",
    main: "Uber like food delivery website. Developed using React and custom CSS styling using CSS modules. Mostly showing off my knowledge of various built in React hooks such as useState, useContext, useReducer, etc.",
    subtitle: "React, JS, CSS",
    color: "success.light",
    link: "https://github.com/TuncG/Food-Order-WebReact",
    button: "View Live Demo",
    buttonlink: "https://fastfood.tuncgonel.ca/",
  },
  turingtest: {
    title: "Turing Test",
    main: "Turing test game developed in Python using the Pygame and OpenAI libraries. Questions can be inputed by the user and a response is generated using GPT2 from OpenAI.",
    subtitle: "Python, GPT2, Pygame",
    color: "warning.light",
    link: "https://github.com/TuncG/Turing_Test_Game",
    button: "View Code",
    buttonlink: "https://github.com/TuncG/Turing_Test_Game",
  },

  utfr: {
    title: "Univeristy of Toronto Formula Racing",
    main: "As a member of my univeristies formula SAE team I develop firmware for our race car. I mostly program in C/Arduino writing code for various microcontrollers. Unfortunately I can not provide a link to the code as we are currenlty using it for our current car !",
    subtitle: "Arduino, C++, C",
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
          <Card content={content.memorizeapp}></Card>
          <Card content={content.tuncgonel}></Card>
          <Card content={content.utfr}></Card>
        </Box>

        {/* Right Coloumn */}
        <Box ml={20}>
          <Card content={content.foodapp}></Card>
          <Card content={content.reserveapp}></Card>
          <Card content={content.turingtest}></Card>
        </Box>
      </Box>
    </Container>
  );
}
