import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "../components/Card";
import Box from "@mui/material/Box";

var content = {
  newstrack: {
    title: "NewsTrack",
    main: "Website that tracks news articles about popular tech compagnies. Made with React and the Material UI library. The NewsApi api was used in retreiving the data displayed",
    color: "primary.light",
    link: "https://github.com/TuncG/NewsTrack",
  },
  tuncgonel: {
    title: "Tunc GOnel.com",
    main: "The source code for my personal website. Made with React and styled using the Material UI library. Currently hosted on Heroku.",
    color: "secondary.light",
    link: "https://github.com/TuncG/tunc-gonel-website",
  },
  turingtest: {
    title: "Turing Test",
    main: "Turing test game developed in Python using the Pygame and OpenAI libraries. Questions can be inputed by the user and a response is generated using  GPT2 library from OpenAI.",
    color: "warning.light",
    link: "https://github.com/TuncG/tunc-gonel-website",
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
        Below you can find all my projects and a link to their code. Feel free
        to contact me for any questions.
      </Typography>

      <Box sx={{ display: "flex" }}>
        <Box>
          <Card content={content.newstrack}></Card>
          <Card content={content.tuncgonel}></Card>
        </Box>

        <Box ml={20}>
          <Card content={content.turingtest}></Card>
          <Card content={content.tuncgonel}></Card>
        </Box>
      </Box>
    </Container>
  );
}
