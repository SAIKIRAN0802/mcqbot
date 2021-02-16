import React from "react";

const Image = ({ id, topic }) => (
  <li>
    <p value={topic} id={id} />
    <a href={"#"} className={"imagebutton"}>
    <img src={"http://via.placeholder.com/100x100"} />
    <div value = {topic} className={"imagetext"}/>
    </a>
  </li>
);

export default Image;
