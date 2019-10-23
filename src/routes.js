import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Filme from './components/Filme';
import Erro from './components/Erro';


const Routes =()=>{
  return(
    <BrowserRouter>
    <Header/>
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/filme/:id' component={Filme}></Route>
    <Route  path='*' component={Erro}/>    
    </Switch>
    
    </BrowserRouter>
  );
}
export default Routes;