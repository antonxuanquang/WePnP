import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home/Body';
import App from './App';
import Listing from './Listing/Body';
import SubmitListing from './SubmitListing/Body';
import SearchListing from './SearchListing/Body';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/meals/:listingID" component={Listing} />
      <Route path="/submit-listing" component={SubmitListing} />
      <Route path="/search" component={SearchListing} />
    </Route>
  </Router>
), document.getElementById('root'))