import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './component/nav';
import AboutView from './view/aboutview';
import IndexView from './view/indexview';
import JoinUsView from './view/joinUsview';
function App() {
  return <div id="box">
      <Nav />
      <Switch>
        <Route 
            path={["/","/home"]}
            exact
            component={IndexView}
        />
        <Route 
            path="/about"
            component={AboutView}
        />
        <Route 
            path="/joinUs"
            exact
            strict
            component={JoinUsView}
        />
      </Switch>
  </div>;
}

export default App;
