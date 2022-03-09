import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import picture from "../assets/img/tunc.jpg";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box mt={25}>
        <Typography variant="h4"> Tunc Gonel</Typography>
        <Avatar
          alt="Tunc Photo"
          src={picture}
          sx={{ width: 200, height: 200 }}
        />
      </Box>
    </Container>
  );
}
