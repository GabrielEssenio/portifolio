import React from 'react'
import { Route, Switch } from 'react-router';
import {
  Habilidades,
  Home, 
  Projetos, 
  // Sobremim
} from './pages/index'
import GlobalStyles from './styles/globalStyles'
const App = () => {
  return (
    <div class="page-container"> 
 
    <GlobalStyles/>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
    <div>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/habilidades" component={ Habilidades } />
        <Route path="/projetos" component={ Projetos } />
        {/* <Route path="/sobremim" component={ Sobremim } /> */}
      </Switch>
    </div>
    </div>
  );
}

export default App 