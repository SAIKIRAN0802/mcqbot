import React, { Component } from "react";
import TopicsContextProvider from "./context/TopicsContext";
import TriviaContextProvider from "./context/TriviaContext";
import Trivia from "./components/trivia";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
class App extends Component {
  // Prevent page reload, clear input, set URL and push history on submit
  handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  render() {
    return (
      <TopicsContextProvider>
        <HashRouter basename="/trivia">
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <div>
                    <Header
                      handleSubmit={this.handleSubmit}
                      history={props.history}
                    />
                    <Search searchTerm={props.match.params.searchInput} />
                  </div>
                )}
              />
              <Route
                path="/search/:searchInput"
                render={(props) => (
                  <div>
                    <Header
                      handleSubmit={this.handleSubmit}
                      history={props.history}
                    />
                    <Search searchTerm={props.match.params.searchInput} />
                  </div>
                )}
              />
              <TriviaContextProvider>
                <Route
                  path="/attempt/:triviaid/:title"
                  render={(props) => (
                    <Trivia
                      trivia_id={props.match.params.triviaid}
                      title={props.match.params.title}
                    />
                  )}
                />
              </TriviaContextProvider>
              <Route component={NotFound} />
            </Switch>
          </div>
        </HashRouter>
      </TopicsContextProvider>
    );
  }
}

export default App;
