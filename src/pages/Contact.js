import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Links from "@mui/material/Link";

export default function Contact() {
  return (
    <Container maxWidth="md" sx={{ justifyContent: "center" }}>
      <Box sx={{ marginLeft: 10 }}>
        <Typography mt={15} mb={2} variant="h4">
          {" "}
          Contact
        </Typography>
        <Typography mb={3}>
          {" "}
          The best way to reach me is email or through LinkedIn. I'm always
          looking for new opportunities, feel free to reach out.
        </Typography>
        <Box sx={{ borderTop: 2, color: "#dcdcdc" }}></Box>

        <Box sx={{ mx: "auto", width: 300 }}>
          {" "}
          {/* Hvae border bottom and border top for cool styling */}
          <Links href="mailto:tuncgonelfb@hotmail.com" underline="hover">
            <Typography sx={{ my: 2 }} variant="h5">
              {" "}
              tuncgonelfb@hotmail.com
            </Typography>
          </Links>
        </Box>

        <Box sx={{ borderTop: 2, color: "#dcdcdc" }}></Box>
      </Box>
    </Container>
  );
}
