import React from "react";
import NoImages from "./NoImages";
import Image from "./Image";
const Gallery = props => {
  const results = props.data;
  let topics;
  let noImages;
  // map variables to each item in fetched image array and return image component
  if (results.length > 0) {
    topics = results.map((topic,index) => {
      let id = topic._id;
      let name = topic.fields.name[0];
      return <Image topic={name} key={index} id ={id} />;
    });
  } else {
    noImages = <NoImages />; // return 'not found' component if no images fetched
  }
  return (
    <div>
      <ul>{topics}</ul>
      {noImages}
    </div>
  );
};

export default Gallery;
