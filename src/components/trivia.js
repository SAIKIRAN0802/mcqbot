import React, { useContext, useEffect } from "react";
import  {TriviaContext}  from "../context/TriviaContext";
import Gallery from "./Gallery";
import Loader from "./Loader";
import Hometiles from "./pages/home-tiles";
import QuizDemo from  "./QuizApp"
const Container = ({ trivia_id,title }) => {
  const { mcqs, loading, runSearch } = useContext(TriviaContext);
  useEffect(() => {
    runSearch(trivia_id);
    
    // eslint-disable-next-line
  }, [trivia_id]);
  return (
    <div>
      {loading ? <Loader /> : <QuizDemo mcqs={mcqs} title={title}/>}
    </div>
  );
};

export default Container;
