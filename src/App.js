import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import HomePage from './container/Homepage';
import SuperHeroItem from './components/superHeroItem/SuperHeroItem';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Container maxWidth="xl">
              <HomePage />
            </Container>
          </Route>
          <Route
            path="/superhero/:superheroIndex"
            exact
            component={SuperHeroItem}
          >
            <SuperHeroItem />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
