import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import IndexPage from './IndexPage';
import HelloPage from './HelloPage';
import NotFoundPage from './NotFoundPage';

export default class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Link to="/">Go to Index</Link>
        <br />
        <Link to="/hello">Go to Hello</Link>

        <Switch>
          <Route exact path="/" component={IndexPage}></Route>
          <Route exact path="/hello" component={HelloPage}></Route>
          <Route component={NotFoundPage}></Route>
        </Switch>
      </div>
    );
  }
}
