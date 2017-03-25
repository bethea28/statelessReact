import React from 'react';
import store from '../store/store';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import ShowProfile from './showProfile';
import DisplayPerson from './displayPerson';
import Home from './home';
import { getEveryone, getPersonById } from './action';

const routes = (
  <Route path = '/' >
    <IndexRoute onEnter={getEveryone} component={Home} />
    <Route path="/getPersonById/:personId" onEnter={getEveryone} component={ShowProfile}>
      <IndexRoute onEnter={getPersonById} component={DisplayPerson}/>
    </Route>
  </Route>
)
//  <Route path = "/getPerson" component = {CreatePersonForm}/>
//  <Route path = "/updatePerson/:id" component = {UpdatePerson}/>
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
