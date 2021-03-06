/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
// import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';

import { createGTag } from '../../metricks/googleMetricks'
import { createYMetriks } from '../../metricks/ymetriks'

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={HomePage} />
        </Switch>
            {/* METRICKS */}
            {/* <div dangerouslySetInnerHTML={createYMetriks()}></div>
            <div dangerouslySetInnerHTML={createGTag()}></div> */}

      </div>
    );
  }
}
