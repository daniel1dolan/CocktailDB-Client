import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Home from './pages/Home';
import CocktailList from './pages/CocktailList';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/search">
          <CocktailList />
        </Route>
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
      <Toaster />
    </Router>
  );
}

export default App;
