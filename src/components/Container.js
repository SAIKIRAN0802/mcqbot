import React, { useContext, useEffect } from "react";
import { TopicsContext } from "../context/TopicsContext";
import Gallery from "./Gallery";
import Loader from "./Loader";
import Hometiles from "./pages/home-tiles";
const Container = ({ searchTerm }) => {
  const { topics, loading, runSearch } = useContext(TopicsContext);
  useEffect(() => {
    runSearch(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm]);
  if(searchTerm) {
  return (
    <div>
      {loading ? <Loader /> : <Gallery data={topics} title = {searchTerm} />}
    </div>
  );
  }
  else {
    return (
      <Hometiles/>
    );
  }
};

export default Container;
