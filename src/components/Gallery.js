import React from "react";
import NoImages from "./NoImages";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  gridList: {
    width: "100%",
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const Gallery = (props) => {
  const classes = useStyles();
  const results = props.data;
  let topics;
  let noImages;
  // map variables to each item in fetched image array and return image component
  if (results.length > 0) {
    topics = results.map((topic, index) => {
      let id = topic._id;
      let title = topic.fields.name;
      return (
          <GridListTile
            key={index}
            title={title}
            id={id}
            cols={topic.cols || 1}
          ><img
              src={
                "https://www.dictionary.com/e/wp-content/uploads/2020/01/WisdomvsKnowledge_1000x700_jpg_OHVUvmTo.jpg"
              }
              alt = {
                title
              }
            ></img>
            <GridListTileBar
              title={title}
              actionIcon={
                <IconButton href={`#/attempt/${id}/${title}`} aria-label={`info about ${title}`} className={classes.icon}>
                  <PlayArrowIcon />
                </IconButton>
              }
            />
          </GridListTile >
      );
    });
  } else {
    noImages = <NoImages />; // return 'not found' component if no images fetched
  }
  return (
    <div className={classes.root}>
      {noImages}
    <GridList cellHeight={150} cols={3} className={classes.gridList}>
      {topics}
    </GridList>
    </div>
  );
};
export default Gallery;