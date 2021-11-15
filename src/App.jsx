import React from 'react'
import { Route, Switch } from 'react-router';
import {
  Habilidades,
  Home, 
  Projetos, 
  Sobremim
} from './pages/index'


const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/habilidades" component={ Habilidades } />
        <Route path="/projetos" component={ Projetos } />
        <Route path="/sobremim" component={ Sobremim } />
      </Switch>
    </div>
  );
}

export default App 