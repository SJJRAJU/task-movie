import React, { useState, useEffect } from "react";
import Checkbox from "@material-ui/core/Checkbox";
const CheckBox = (movie) => {
  const [checked, setChecked] = useState(false);
  const [checkedMovie, setCheckedMovie] = useState([]);

  const handleCheck = (event) => {
    setChecked(true);
    if (event.target.checked !== false) {
      console.log(movie);
      setCheckedMovie([...checkedMovie, movie]);
    }

    console.log(checkedMovie);
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleCheck}
      inputProps={{ "aria-label": "primary checkbox" }}
    />
  );
};

export default CheckBox;
