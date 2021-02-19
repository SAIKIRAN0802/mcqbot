import React from "react";

let iamgesnos  = [2, 25, 6, 7, 21, 12, 13, 28, 29];
let names = ["Movies","management","sports","health","technology", "English", "Coding", "Math","Travel"]

const tiles = ({ searchTerm }) => {
  let topics = iamgesnos.map((imageno, index) => {
    return (
      <li className="thumb-wrap"><a href={`/#/search/${names[index]}`}  >
      <img className="thumb" src={`https://storage.googleapis.com/demo-images/${iamgesnos[index]}.png`} />
      <div className="thumb-info">
        <p className="thumb-title">{names[index]}</p>
      </div>
    </a>
    </li>
    );
  });
  return (
    <article className="video-sec-wrap">
      <div className="video-sec">
        <p className="video-sec-title">{}</p>
        <ul className="video-sec-middle" id="vid-grid">
                {topics}
        </ul>
      </div>
    </article>
  );
};

export default tiles;
