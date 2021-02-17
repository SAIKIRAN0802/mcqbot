import React from "react";

const Image = ({ id, topic }) => (
  <li>
    <p value={topic} id={id} />
    <img src={"https://www.topic.com/assets/e6ce2344067a24a745e2f6b62187f407.jpg"} />
    <p value = {topic} style={{color:"black"}} className={"imagetext"}/>
  </li>
);
export default Image;