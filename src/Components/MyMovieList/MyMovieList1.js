import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import GridList from "@material-ui/core/GridList";

import Button from "@material-ui/core/Button";
import MovieCard from "../Card/CardComponent";
import GridListTile from "@material-ui/core/GridListTile";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const MyMovieList = ({ listMovie, removeFromMyList }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={500} className={classes.gridList} cols={3}>
        {listMovie &&
          listMovie.map((myMovie) => (
            <GridListTile key={myMovie.id}>
              <MovieCard movie={myMovie} />
              <Button onClick={() => removeFromMyList(myMovie)}>
                Remove From My List{" "}
              </Button>
            </GridListTile>
          ))}
      </GridList>
    </div>
  );
};

export default MyMovieList;
