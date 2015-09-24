import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import App from './App';
import Foo from './Foo';
import Bar from './Bar';

ReactDOM.render((
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}>
      <Route path="foo" component={Foo} />
      <Route path="bar" component={Bar} />
    </Route>
  </Router>
), document.getElementById('root'));
