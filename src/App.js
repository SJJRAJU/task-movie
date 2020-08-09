import React, { useState } from "react";

import MyMovieList1 from "./Components/MyMovieList/MyMovieList1";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import MovieList1 from "./Components/MovieList/MovieList1";

function App() {
  const [listMovie, setListMovie] = useState([]);

  const addToMyList = (myMovie) => {
    const isAlreadyMoved = listMovie.findIndex(function (array) {
      return array.id === myMovie.id;
    });
    if (isAlreadyMoved !== -1) {
      console.log("already added");
    }
    setListMovie([...listMovie, myMovie]);
  };
  console.log(listMovie);

  const removeFromMyList = (myMovie) => {
    setListMovie(
      listMovie.filter((singleMovie) => singleMovie.id !== myMovie.id)
    );
  };
  return (
    <div>
      <GridList cellHeight={1500} cols={2}>
        <GridListTile>
          <MovieList1 addToMyList={addToMyList} />
        </GridListTile>
        <GridListTile>
          <MyMovieList1
            listMovie={listMovie}
            removeFromMyList={removeFromMyList}
          />
        </GridListTile>
      </GridList>
    </div>
  );
}

export default App;
