import React from 'react';
import './App.scss';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import LoyaltyPage from './pages/loyalty.page';
import WelcomePage from './pages/welcome.page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/loyalti" component={LoyaltyPage} />
        <Route path="/welcome" component={WelcomePage} />
        <Route exact path="/">
          <Redirect to="/loyalti" />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
