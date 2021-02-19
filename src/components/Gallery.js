import React from "react";
import NoImages from "./NoImages";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import IconButton from "@material-ui/core/IconButton";

const Gallery = (props) => {
  var searchmessage = `Results matching {props.title}`;
  const results = props.data;
  console.log(results);
  let topics;
  let noImages = null;
  var images = [];
  var i;

  if (results.length > 0) {
    topics = results.map((topic, index) => {
      let id = topic._id;
      let title = topic.fields.name;
      return (
        <li className="thumb-wrap" key={index} id={id} >
          <a href={`#/attempt/${id}/${title}`}>
            <img className="thumb" src={"https://www.dictionary.com/e/wp-content/uploads/2020/01/WisdomvsKnowledge_1000x700_jpg_OHVUvmTo.jpg"} />
            <div className="thumb-info">
              <p className="thumb-title" style={{ align: "center" }}>{title}</p>
            </div>
          </a>
        </li>
      );
    });
  } else {
    noImages = <NoImages />;
  }
  return (
    <article className="video-sec-wrap">
      <div className="video-sec">
        <p className="video-sec-title">{ `results matching ${props.title}`}</p>
        <ul className="video-sec-middle" id="vid-grid">
          {topics}
        </ul>
      </div>
    </article>
  );
};
export default Gallery;
