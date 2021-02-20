import React, { createContext, useState } from "react";
import axios from "axios";
export const TriviaContext = createContext();

const TriviaCOntextProvider = (props) => {
  const [mcqs, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const runSearch = (query) => {
    axios
      .get(`/.netlify/functions/get_topic_by_id?id=${query}`)
      .then((response) => {
        setQuestions(response.data._source.mcqs);
        setLoading(false);
      })
      .catch((error) => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      });
  };
  return (
    <TriviaContext.Provider value={{ mcqs, loading, runSearch }}>
      {props.children}
    </TriviaContext.Provider>
  );
};
export default TriviaCOntextProvider;
