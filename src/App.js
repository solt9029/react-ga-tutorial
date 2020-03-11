import React from 'react';
import ReactGA from 'react-ga';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import IndexPage from './IndexPage';
import HelloPage from './HelloPage';
import NotFoundPage from './NotFoundPage';

class App extends React.Component {
  componentDidMount() {
    const { pathname } = this.props.location;
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
    console.log({ pathname });
  }

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

export default withRouter(App);
