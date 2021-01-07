import React from "react";
import HomePage from "./pages/home-page/home-page.component";
import DetailsPage from './pages/details-page/details-page.component';

import { Route, Switch } from 'react-router-dom'

const App = () => {
    return (
      <Switch>
        <Route exact path="/phone/:phoneid" component={DetailsPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    );
}
export default App;
