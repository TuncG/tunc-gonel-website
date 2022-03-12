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
          {/* <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        /> */}
          <Box
            sx={{
              height: 40,
              backgroundColor: content.color,
            }}
          ></Box>
          <CardContent sx={{ minHeight: 150 }}>
            <Typography gutterBottom variant="h5" component="div">
              {content.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {content.main}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Links>

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
/*  Website that tracks news articles about popular tech compagnies. Made
          with React and the Material UI library. The NewsApi api was used in
          retreiving the data displayed. */
