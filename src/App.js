import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Destination from './components/Destination/Destination';
import SearchResult from './components/SearchResult/SearchResult';
// import googleMapReact from "google-map-react";
import NotFound from './components/NotFound/NotFound';

export const UserContext = createContext();
export const SearchContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [search, setSearch] = useState({});

  return (
    <UserContext.Provider value= {[loggedInUser, setLoggedInUser]}>
      <SearchContext.Provider value = {[search, setSearch]}>
    <Router>
      <Header/>
      <Switch >
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/destination">
          <Destination/>
        </PrivateRoute>
        <Route path="/search-result">
          <SearchResult/>
        </Route>
        <Route>
          <googleMapReact></googleMapReact>
        </Route>
        <Route path = "*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
    </SearchContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
