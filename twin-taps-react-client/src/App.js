import React from 'react';
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles"
import Beer from './Beer'
import Food from './Food'
import { getBeers, getFood } from './Api'
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

  const { isFetching: isFetchingBeer, data: beers } = useQuery("beers", getBeers);
  const { isFetching: isFetchingFood, data: food } = useQuery("food", getFood);

  return (
    <div data-testid="app">
      <Grid container className={classes.container}>
        {isFetchingBeer && <CircularProgress />}
        <Typography variant="h1">Whats on Tap!</Typography>
        {beers && beers.map(beer => {
          return (
            <Beer key={beer.id} beer={beer} />
          )
        })}
      </Grid>
      <Grid container className={classes.container}>
        {isFetchingFood && <CircularProgress />}
        <Typography variant="h1">What tacos would you like to eat?!</Typography>
        {food && food.map(foodItem => {
          return (
            <Food key={foodItem.id} food={foodItem} />
          )
        })}
      </Grid>

    </div>
  );
}

export default App;
