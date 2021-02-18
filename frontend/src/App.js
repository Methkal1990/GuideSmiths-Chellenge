import React from 'react';
import HomePage from './pages/home-page/home-page.component';
import DetailsPage from './pages/details-page/details-page.component';

import { Router, Route, Switch } from 'react-router-dom';
import EditPage from './pages/edit-page/edit-page.component';
import CreatePage from './pages/create-page/create-page.component';
import history from './history';
import notFoundPage from './pages/not-found-page/not-found-page.component';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/phone/:phoneid/edit' component={EditPage} />
        <Route path='/phone/create' component={CreatePage} />
        <Route path='/phone/:phoneid' component={DetailsPage} />
        <Route path="*" component={notFoundPage}/>
      </Switch>
    </Router>
  );
};
export default App;
