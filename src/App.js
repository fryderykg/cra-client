import React from 'react';
// import {Route, Switch, Redirect} from 'react-router-dom';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';


// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar'
import ReportsList from './components/reports-list/reports-list';
import Users from './components/users/users';
import AddUser from './components/add-user/add-user';
import Login from './components/login/login'


function App() {
  let routes = (
      <Router>
        <Navbar/>
        <Route path='/reports-list' component={ReportsList}/>
        <Route path='/users' component={Users}/>
        <Route path='/add-user' component={AddUser}/>
        <Route path='/login' component={Login}/>
        {/*<Route path='/' exact component={Users}/>*/}
        <Redirect to='/'/>
      </Router>
  );

  return (
      <div className='App'>
        {routes}
      </div>
  );
}

export default App;
