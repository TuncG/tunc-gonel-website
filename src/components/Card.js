import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Links from "@mui/material/Link";

export default function MediaCard({ content }) {
  return (
    <Card sx={{ maxWidth: 500, minHeight: 225, mt: 5 }} elevation={4}>
      <Links href={content.link} underline="none">
        <CardActionArea>
          <Box
            sx={{
              height: 40,
              backgroundColor: content.color,
            }}
          ></Box>

          {/* Card main text and title */}
          <CardContent sx={{ minHeight: 150 }}>
            <Typography gutterBottom variant="h5" component="div">
              {content.title}
            </Typography>

            <Box
              sx={{
                height: 20,
                width: 200,

                borderRadius: 1,
              }}
            >
              <Typography
                sx={{ mb: 1.5 }}
                variant="body3"
                color="text.secondary"
              >
                {content.subtitle}
              </Typography>
            </Box>

            <Typography mt={1} variant="body1" color="black">
              {content.main}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Links>
      {/* Create the card button below */}
      <Links href={content.buttonlink} underline="none">
        <CardActions>
          <Button size="small" color="primary">
            {content.button}
          </Button>
        </CardActions>
      </Links>
    </Card>
  );
}
