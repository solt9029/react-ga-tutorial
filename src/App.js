import React from 'react';
import { Switch, Route } from 'react-router-dom';
import IndexPage from './IndexPage';
import HelloPage from './HelloPage';
import NotFoundPage from './NotFoundPage';

export default class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={IndexPage}></Route>
          <Route exact path="/hello" component={HelloPage}></Route>
          <Route component={NotFoundPage}></Route>
        </Switch>
      </div>
    );
  }
}
