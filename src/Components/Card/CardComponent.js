import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
});

export default function MovieCard({ addToMyList, movie }) {
  const [watched, setWatched] = useState("");

  function handleWatched(props) {
    if (watched === "") {
      setWatched("Watched");
    }
  }

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          title={movie.title}
          image={movie.poster}
        />
        <CardContent>
          <Typography gutterBottom>{movie.title}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Year: {movie.year} <br />
            <span>{watched}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={handleWatched}> Movie Watched</Button>
      </CardActions>
    </Card>
  );
}
