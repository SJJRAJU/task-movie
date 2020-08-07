import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Filter(props) {
  const classes = useStyles();

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Year</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={props.year}
          onChange={props.handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={2000}>2000</MenuItem>
          <MenuItem value={2001}>2001</MenuItem>
          <MenuItem value={2002}>2002</MenuItem>
          <MenuItem value={2003}>2003</MenuItem>
          <MenuItem value={2004}>2004</MenuItem>
          <MenuItem value={2005}>2005</MenuItem>
          <MenuItem value={2006}>2006</MenuItem>
          <MenuItem value={2007}>2007</MenuItem>
          <MenuItem value={2008}>2008</MenuItem>
          <MenuItem value={2009}>2009</MenuItem>
          <MenuItem value={2010}>2010</MenuItem>
          <MenuItem value={2011}>2011</MenuItem>
          <MenuItem value={2012}>2012</MenuItem>
          <MenuItem value={2013}>2013</MenuItem>
          <MenuItem value={2014}>2014</MenuItem>
          <MenuItem value={2015}>2015</MenuItem>
          <MenuItem value={2016}>2016</MenuItem>
          <MenuItem value={2017}>2017</MenuItem>
          <MenuItem value={2019}>2018</MenuItem>
          <MenuItem value={2019}>2019</MenuItem>
          <MenuItem value={2020}>2020</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
