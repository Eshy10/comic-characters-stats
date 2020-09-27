import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { useStyles } from "./SuperHeroItem.styles";
import HeroCharacter from "../../api/fetchCharacterApi";
import { setCharacterID } from "../../redux/actions/index";

const SuperHeroItem = ({ props }) => {
  const classes = useStyles(props);
  let { superheroIndex } = useParams();

  const dispatch = useDispatch();
  const getCharacterID = useSelector((state) => state.character);

  useEffect(() => {
    const heroCharacterID = () => {
      HeroCharacter.getCharacterId(superheroIndex).then((data) => {
        dispatch(setCharacterID(data));
      });
    };
    heroCharacterID();
  }, [dispatch, getCharacterID, superheroIndex]);

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={getCharacterID.images ? getCharacterID.images.lg : null}
            title="comic character"
          />
          <CardContent className={classes.center}>
            <Typography
              className={classes.secondaryColor}
              style={{ fontWeight: "bolder" }}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {getCharacterID.name}
            </Typography>
            <Typography
              className={classes.secondaryColor}
              style={{ fontWeight: "bold" }}
              gutterBottom
              variant="h5"
              component="h2"
            >
              PowerStats:
            </Typography>
            <Typography
              className={classes.primaryColor}
              gutterBottom
              variant="h6"
              component="h6"
            >
              Intelligence
            </Typography>
            <Typography
              style={{
                width: getCharacterID.powerstats
                  ? getCharacterID.powerstats.intelligence * 2
                  : null,
                fontWeight: "bold",
              }}
              className={classes.intelligence}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {getCharacterID.powerstats
                ? getCharacterID.powerstats.intelligence
                : null}
            </Typography>
            <Typography
              className={classes.primaryColor}
              style={{ marginTop: "1em" }}
              gutterBottom
              component="p"
            >
              Strength
            </Typography>
            <Typography
              style={{
                width: getCharacterID.powerstats
                  ? getCharacterID.powerstats.strength * 2
                  : null,
                fontWeight: "bold",
              }}
              className={classes.intelligence}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {getCharacterID.powerstats
                ? getCharacterID.powerstats.strength
                : null}
            </Typography>
            <Typography
              className={classes.primaryColor}
              style={{ marginTop: "1em" }}
              gutterBottom
              component="p"
            >
              Speed
            </Typography>
            <Typography
              style={{
                width: getCharacterID.powerstats
                  ? getCharacterID.powerstats.speed * 2
                  : null,
                fontWeight: "bold",
              }}
              className={classes.intelligence}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {getCharacterID.powerstats
                ? getCharacterID.powerstats.speed
                : null}
            </Typography>
            <Typography
              className={classes.primaryColor}
              style={{ marginTop: "1em" }}
              gutterBottom
              component="p"
            >
              Durability
            </Typography>
            <Typography
              style={{
                width: getCharacterID.powerstats
                  ? getCharacterID.powerstats.durability * 2
                  : null,
                fontWeight: "bold",
              }}
              className={classes.intelligence}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {getCharacterID.powerstats
                ? getCharacterID.powerstats.durability
                : null}
            </Typography>
            <Typography
              className={classes.primaryColor}
              style={{ marginTop: "1em" }}
              gutterBottom
              component="p"
            >
              Power
            </Typography>
            <Typography
              style={{
                width: getCharacterID.powerstats
                  ? getCharacterID.powerstats.power * 2
                  : null,
                fontWeight: "bold",
              }}
              className={classes.intelligence}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {getCharacterID.powerstats
                ? getCharacterID.powerstats.power
                : null}
            </Typography>
            <Typography
              className={classes.primaryColor}
              style={{ marginTop: "1em" }}
              gutterBottom
              component="p"
            >
              Combat
            </Typography>
            <Typography
              style={{
                width: getCharacterID.powerstats
                  ? getCharacterID.powerstats.combat * 2
                  : null,
                fontWeight: "bold",
              }}
              className={classes.intelligence}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {getCharacterID.powerstats
                ? getCharacterID.powerstats.combat
                : null}
            </Typography>
            <Typography
              style={{ fontWeight: "bold", marginTop: "1em" }}
              className={classes.secondaryColor}
              gutterBottom
              variant="h5"
              component="h2"
            >
              Appearance:
            </Typography>
            <Typography
              className={classes.primaryColor}
              style={{ marginTop: ".5em" }}
              variant="body2"
              component="p"
            >
              Gender:{" "}
              {getCharacterID.appearance
                ? getCharacterID.appearance.gender
                : null}
            </Typography>
            <Typography
              className={classes.primaryColor}
              style={{ marginTop: ".5em" }}
              variant="body2"
              component="p"
            >
              Race:{" "}
              {getCharacterID.appearance
                ? getCharacterID.appearance.race
                : null}
            </Typography>
            <Typography
              className={classes.primaryColor}
              style={{ marginTop: ".5em" }}
              variant="body2"
              component="p"
            >
              Height:{" "}
              {getCharacterID.appearance
                ? getCharacterID.appearance.height[0]
                : null}
            </Typography>
            <Typography
              className={classes.primaryColor}
              style={{ marginTop: ".5em" }}
              variant="body2"
              component="p"
            >
              Weight:{" "}
              {getCharacterID.appearance
                ? getCharacterID.appearance.weight[1]
                : null}
            </Typography>
            <Typography
              style={{ fontWeight: "bold", marginTop: "1em" }}
              className={classes.secondaryColor}
              gutterBottom
              variant="h5"
              component="h2"
            >
              Biography:
            </Typography>
            <Typography
              className={classes.primaryColor}
              style={{ marginTop: ".5em" }}
              variant="body2"
              component="p"
            >
              FullName:{" "}
              {getCharacterID.biography
                ? getCharacterID.biography.fullName
                : null}
            </Typography>
            <Typography
              className={classes.primaryColor}
              style={{ marginTop: ".5em" }}
              variant="body2"
              component="p"
            >
              Alias:{" "}
              {getCharacterID.biography
                ? getCharacterID.biography.aliases
                : null}
            </Typography>
            <Typography
              className={classes.primaryColor}
              style={{ marginTop: ".5em" }}
              variant="body2"
              component="p"
            >
              Place of Birth:{" "}
              {getCharacterID.biography
                ? getCharacterID.biography.placeOfBirth
                : null}
            </Typography>
            <Typography
              className={classes.primaryColor}
              style={{ marginTop: ".5em" }}
              variant="body2"
              component="p"
            >
              First Movie:{" "}
              {getCharacterID.biography
                ? getCharacterID.biography.firstAppearance
                : null}
            </Typography>
            <Typography
              className={classes.primaryColor}
              style={{ marginTop: ".5em" }}
              variant="body2"
              component="p"
            >
              Publisher:{" "}
              {getCharacterID.biography
                ? getCharacterID.biography.publisher
                : null}
            </Typography>
            <Typography
              className={classes.primaryColor}
              style={{ marginTop: ".5em" }}
              variant="body2"
              component="p"
            >
              Alignment:{" "}
              {getCharacterID.biography
                ? getCharacterID.biography.alignment
                : null}
            </Typography>
            <Typography
              style={{ fontWeight: "bold", marginTop: "1em" }}
              className={classes.secondaryColor}
              gutterBottom
              variant="h5"
              component="h2"
            >
              Work:
            </Typography>
            <Typography
              className={classes.primaryColor}
              style={{ marginTop: ".5em" }}
              variant="body2"
              component="p"
            >
              Occupation:{" "}
              {getCharacterID.work ? getCharacterID.work.occupation : null}
            </Typography>
            <Typography
              style={{ fontWeight: "bold", marginTop: "1em" }}
              className={classes.secondaryColor}
              gutterBottom
              variant="h5"
              component="h2"
            >
              Connections:
            </Typography>
            <Typography
              className={classes.primaryColor}
              style={{ marginTop: ".5em" }}
              variant="body2"
              component="p"
            >
              Occupation:{" "}
              {getCharacterID.connections
                ? getCharacterID.connections.groupAffiliation
                : null}
            </Typography>
            <Typography
              className={classes.primaryColor}
              style={{ marginTop: ".5em" }}
              variant="body2"
              component="p"
            >
              Occupation:{" "}
              {getCharacterID.connections
                ? getCharacterID.connections.relatives
                : null}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Link to="/">
          <Typography
            className={classes.secondaryColor}
            style={{ marginLeft: "2em", fontWeight: "bold" }}
            gutterBottom
            variant="h5"
            component="h2"
          >
            Back to{" "}
            <span aria-label="house" role="img">
              🏚️
            </span>
            page
          </Typography>
        </Link>
      </Card>
    </div>
  );
};

export default SuperHeroItem;
