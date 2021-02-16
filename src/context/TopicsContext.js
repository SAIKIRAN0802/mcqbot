import React, { createContext, useState } from "react";
import axios from "axios";
import { apiKey } from "../api/get_topcs";
export const TopicsContext = createContext();

const TopicsContextProvider = props => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const runSearch = query => {
    axios
      .get(
        `/.netlify/functions/get_topcs?topic=${query}`
      )
      .then(response => {
        console.log(response.data);
        setTopics(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      });
  };
  return (
    <TopicsContext.Provider value={{ topics, loading, runSearch }}>
      {props.children}
    </TopicsContext.Provider>
  );
};

export default TopicsContextProvider;
