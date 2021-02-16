import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QuizApp from './components/QuizApp';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Route} from "react-router-dom";
import "./style.css"
import "./index.css"
ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Route exact path="/">
      <App/>
    </Route>
    <Route path="/quiz">
      <QuizApp totalQuestions={10}/>
    </Route>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
