import React from 'react';
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles"
import Beer from './Beer'
import { getBeers } from './Api'
import { useQuery } from "react-query"
import CircularProgress from "@material-ui/core/CircularProgress"

const useStyles = makeStyles((theme) => ({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
}));

const App = () => {
  const classes = useStyles();

  const { isFetching, data: beers } = useQuery("beers", getBeers);
  
  return (
    <div data-testid="app">
      {isFetching && <CircularProgress />}
      <Grid container className={classes.container}>
        <Typography variant="h1">Whats on Tap!</Typography>
        {beers && beers.map(beer => {
          return (
            <Beer key={beer.id} beer={beer} />
          )
        })}
      </Grid>
    </div>
  );
}

export default App;
