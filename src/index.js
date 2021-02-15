import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QuizApp from './components/QuizApp';
import HomePage from './components/pages/home-page';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Route} from "react-router-dom";
import "./style.css"
ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Route exact path="/">
      <HomePage/>
    </Route>
    <Route path="/quiz">
      <QuizApp totalQuestions={10}/>
    </Route>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
