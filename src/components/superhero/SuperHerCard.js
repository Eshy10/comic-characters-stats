import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import spinners from "../../assets/Spinner-1s-200px.gif";
import { useStyles } from "./superHeroCard.styles";

const SuperHeroCard = ({ id, props, name, imageUrl }) => {
  const classes = useStyles(props);
  return (
    <Link to={`superhero/${id}`}>
      <Card className={classes.root}>
        <CardActionArea>
          {!imageUrl ? (
            <CardMedia className={classes.media} image={spinners} />
          ) : (
            <CardMedia className={classes.media} image={imageUrl} />
          )}

          <CardContent>
            <Typography
              style={{ color: "#0000FF", fontWeight: "bold" }}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default SuperHeroCard;
