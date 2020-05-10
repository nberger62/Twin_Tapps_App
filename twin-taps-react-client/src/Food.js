import React from 'react';
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardHeader from "@material-ui/core/CardHeader"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(theme => ({
  card: {
    [theme.breakpoints.down("sm")]: {
      width: 400
    }
  },
}));


const Food = (props) => {
  const classes = useStyles();
  const { food: {id, name} } = props
  return (
        <Card key={id} className={classes.card}>
          <CardHeader title={name}/>
          <CardContent>
            <Typography variant="body1">
              Description about this taco.
            </Typography>
          </CardContent>
        </Card>
    )
};

export default Food;

// To DO
// Prop Types
// Unit Test
