import React from 'react';
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Beer from './Beer'

const useStyles = makeStyles(theme => ({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
}));

const beers = [
  {
    id: "1",
    name: "Broke ass porter",
  },
  {
    id: "2",
    name: "American Amber",
  },
  {
    id: "3",
    name: "Friday IPA",
  },
  {
    id: "4",
    name: "Midnight Snack",
  },
] 

// console.log(beers)

const App = () => {
  const classes = useStyles();
  return (
    <div data-testid="app">
      <Grid container className={classes.container}>
        {beers.map(beer => {
          return (
            <Beer key={beer.id} beer={beer} />
          )
        })}
      </Grid>
    </div>
  );
}

export default App;
