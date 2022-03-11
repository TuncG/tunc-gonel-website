import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import picture from "../assets/img/tunc.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { Link } from "react-router-dom";
import Links from "@mui/material/Link";

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ justifyContent: "center" }}>
      <Box
        mt={23}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* Avatar and Name */}
        <Box sx={{ flexDirection: "column" }}>
          <Avatar
            alt="Tunc Photo"
            src={picture}
            sx={{ width: 200, height: 200 }}
          />

          <Typography mt={3} variant="h3">
            {" "}
            Tunc Gonel
          </Typography>
        </Box>
      </Box>
      {/* Text  */}
      <Box sx={{ mx: "auto", width: 500 }}>
        <Typography variant="h6" mt={1}>
          Computer Science student at the Univeristy of Toronto
        </Typography>

        <Typography mt={2} variant="body2">
          I enjoy making websites, apps and automation tools. Mostly, React &
          PHP.
        </Typography>
      </Box>

      {/* Icons */}
      <Box mt={5} sx={{ mx: "auto", width: 500, display: "flex" }}>
        <Links href="https://www.linkedin.com/in/tunc-gonel" underline="hover">
          <Box ml={8} mr={5} sx={{ display: "flex", color: "#212121" }}>
            <LinkedInIcon fontSize="large" />
            <Typography ml={1} mt={1}>
              {" "}
              LinkedIn{" "}
            </Typography>
          </Box>
        </Links>

        <Links href="https://github.com/TuncG" underline="hover">
          <Box mr={5} sx={{ display: "flex", color: "#212121" }}>
            <GitHubIcon fontSize="large" />
            <Typography ml={1} mt={1}>
              Code
            </Typography>
          </Box>
        </Links>

        <Link
          to={"/projects"}
          style={{ textDecoration: "none", color: "#212121" }}
        >
          <Box mr={5} sx={{ display: "flex" }}>
            <DriveFolderUploadIcon fontSize="large" />
            <Typography ml={1} mt={1}>
              Projects
            </Typography>
          </Box>
        </Link>
      </Box>

      {/* Text 2 */}
      <Box mt={5} sx={{ mx: "auto", width: 200 }}>
        <Typography mt={2} variant="body2">
          Feel free to contact me
          <Link
            to={"/contact"}
            style={{ textDecoration: "none", color: "#3273DC" }}
          >
            {" "}
            here.
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}
