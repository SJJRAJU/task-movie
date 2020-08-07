import React, { useState, useEffect } from "react";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import MovieCard from "../Card/CardComponent";
import Button from "@material-ui/core/Button";
import Filter from "../Filter/Filter";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
}));

const MovieList1 = ({ addToMyList }) => {
  const [movie, setMovie] = useState([]);
  const [year, setYear] = useState("");
  const [checkedMovie, setCheckedMovie] = useState([]);
  let url =
    "http://www.omdbapi.com/?apikey=32395055&type=movie&s=bad" + "&Y=" + year;
  const handleAddMovie = (e, movie, checked) => {
    setCheckedMovie([...checkedMovie]);
    if (e.target.checked) {
      console.log("clicked");
      setCheckedMovie([...checkedMovie, movie]);
    }
    console.log([checkedMovie]);
  };

  const handleChange = (event) => {
    const movieYear = event.target.value;
    setYear(movieYear);
  };

  const fetchMovies = async () => {
    const { data } = await Axios.get(url);

    const movies = data;

    const allMovie = movies.Search.map((movie) => ({
      title: movie.Title,
      poster: movie.Poster,
      year: movie.Year,
      id: movie.imdbID,
    }));
    setMovie(allMovie);
  };

  useEffect(() => {
    fetchMovies();
  }, [url]);

  const classes = useStyles();

  return (
    <div>
      <Filter
        year={year}
        handleChange={handleChange}
        onClicked={handleAddMovie}
      />
      <GridList cellHeight={500} className={classes.gridList} cols={3}>
        {movie.map((movie) => (
          <GridListTile key={movie.id}>
            <MovieCard movie={movie} addToMyList={addToMyList} />
            <Button onClick={() => addToMyList(movie)}> Add To My List</Button>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default MovieList1;
