import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MenuPage from './pages/MenuPage';
import HomePage from './pages/HomePage';
import ItemDetailPage from './pages/ItemDetailPage';
import PrivateRoute from './auth/PrivateRoute';
import { AuthProvider } from './auth/useAuth';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import CheckoutPage from './pages/CheckoutPage';
import DashboardPage from './admin/pages/DashboardPage';
import AddItemPage from './admin/pages/AddItemPage';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(fab);

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/menu">
              <MenuPage />
            </Route>
            <Route path="/item/:itemId">
              <ItemDetailPage />
            </Route>
            <PrivateRoute exact path="/checkout">
              <CheckoutPage />
            </PrivateRoute >
            <Route exact path="/register">
              <SignUpPage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/admin">
              <DashboardPage/>
            </Route>
            <Route exact path="/admin/addItem">
              <AddItemPage/>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </Provider>
  );
}

export default App;