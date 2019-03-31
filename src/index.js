import React from "react";
import ReactDom from "react-dom";
import { Router, Switch, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import App from "./components/App";
import Jokes from "./components/Jokes";
import Header from "./components/Header";
import Musicaly from "./projects/musicaly";
import "./index.css";

ReactDom.render(
  // history to monitor users browser history
  <Router history={createBrowserHistory()}>
    <Switch>
      {/* for each route, each component is rendered as  */}
      {/* children of the header component */}
      <Route
        exact
        path="/"
        render={() => (
          <Header>
            <br />
            <App />
          </Header>
        )}
      />
      <Route
        path="/jokes"
        render={() => (
          <Header>
            <Jokes />
          </Header>
        )}
      />
      <Route
        path="/musicaly"
        render={() => (
          <Header>
            <Musicaly />
          </Header>
        )}
      />
    </Switch>
  </Router>,
  document.querySelector("#root")
);

// ReactDom.render(
//   // history to monitor users browser history
//   <Router history={createBrowserHistory()}>
//     <Switch>
//       <Route exact path="/" component={App} />
//       <Route path="/jokes" component={Jokes} />
//     </Switch>
//   </Router>,
//   document.querySelector("#root")
// );

// new Promise(resolve => {
//   setTimeout(() => {
//     console.log("Hello");
//     resolve("world, kells");
//   }, 2000);
// }).then(res => {
//   console.log(res);
//   console.log("Kells");
// });
