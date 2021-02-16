import React, { useContext, useEffect } from "react";
import { TopicsContext } from "../context/TopicsContext";
import Gallery from "./Gallery";
import Loader from "./Loader";

const Container = ({ searchTerm }) => {
  const { topics, loading, runSearch } = useContext(TopicsContext);
  useEffect(() => {
    runSearch(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <div>
      {loading ? <Loader /> : <Gallery data={topics} />}
    </div>
  );
};

export default Container;
