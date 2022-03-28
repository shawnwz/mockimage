//------------------------------------------------------------------------------
// This is the main app router notice it contains a welcome component ?
// This component is a boilerplate just to welcome you !
// You can remove the component and its directory to start a blank project
// welcome directory at: 'src/elements/structures/welcome'
//------------------------------------------------------------------------------

import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import useAutoScreenType from 'hooks/use-auto-screen-type';

import Feedback from 'elements/structures/feedback';
import Home from 'elements/structures/home';

//------------------------------------------------------------------------------

const Router: React.FC = () => {
  useAutoScreenType();

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route>
          <Feedback type={404} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

//------------------------------------------------------------------------------

export default Router;
