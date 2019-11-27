import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from '../Elements/NotFound/NotFound';
import routes from '../../routes';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
      <React.Fragment>
        <Switch>
          {routes.map((route, idx) => {
                      return route.component ? (
                        <Route
                          key={idx}
                          path={route.path}
                          exact={route.exact}
                          name={route.name}
                          render={props => (
                            <route.component {...props} />
                          )} />
                      ) : (null);
                    })}
  
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
    );
  }
}

export default App;
