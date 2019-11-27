import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../elements/Header/Header';
import Home from '../../containers/HomeContainer';
import Movie from '../../containers/MovieContainer';
import TestContainer from '../../containers/TestContainer';
import NotFound from '../elements/NotFound/NotFound';

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
         <Route path="/test" component={TestContainer} exact />
        <Route path="/m/:movieId" component={Movie} exact />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
)

export default App;