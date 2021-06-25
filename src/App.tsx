import React from 'react';
import './App.css';
import { AnimateSharedLayout } from 'framer-motion';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/home';


function App() {
  return (
    <Router>
      <AnimateSharedLayout>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </AnimateSharedLayout>
    </Router>
  );
}

export default App;
