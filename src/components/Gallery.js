import React from "react";
import NoImages from "./NoImages";

const Gallery = (props) => {
  // var searchmessage = `Results matching {props.title}`;
  const results = props.data;
  let topics;
  let noImages = null;

  if (results.length > 0) {
    topics = results.map((topic, index) => {
      let id = topic._id;
      let title = topic.fields.name;
      return (
        <li className="thumb-wrap" key={index} id={id} >
          <a href={`#/attempt/${id}/${title}`}>
            <img className="thumb" src={"https://www.dictionary.com/e/wp-content/uploads/2020/01/WisdomvsKnowledge_1000x700_jpg_OHVUvmTo.jpg"} alt={title}/>
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
      {noImages}
    </article>
    
  );
};
export default Gallery;
