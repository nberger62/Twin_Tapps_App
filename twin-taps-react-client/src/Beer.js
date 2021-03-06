import React from 'react';
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardHeader from "@material-ui/core/CardHeader"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(theme => ({
  card: {
      height: 200,
    [theme.breakpoints.down("sm")]: {
      width: 400
    }
  },
}));


const Beer = (props) => {
  const classes = useStyles();
  const { beer: {id, name, price, style, abv} } = props
  return (
        <Card key={id} className={classes.card}>
          <CardHeader title={name}/>
          <CardContent>
            <Typography variant="body1">
              ${price}
            </Typography>
              <Typography variant="body1">
              style: {style}
            </Typography>
              <Typography variant="body1">
              ABV: {abv}%
            </Typography>
          </CardContent>
        </Card>
    )
};

export default Beer;

// To DO
// Prop Types
// Unit Test
