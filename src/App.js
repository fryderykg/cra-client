import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar'
import ReportsList from './components/reports-list/reports-list';
import Users from './components/users/users';
import AddUser from './components/users/add-user/add-user';
import Login from './components/login/login'
import Companies from './components/companies/companies'
import AddCompany from "./components/companies/add-company/add-company";


function App() {
  let routes = (
      <Router>
        <Navbar/>
        <Route path='/reports-list' component={ReportsList}/>
        <Route path='/users' component={Users}/>
        <Route path='/add-user' component={AddUser}/>
        <Route path='/companies' component={Companies}/>
        <Route path='/add-company' component={AddCompany}/>
        <Route path='/login' component={Login}/>
        <Route path='/' exact component={ReportsList}/>
      </Router>
  );

  return (
      <div className='App'>
        {routes}
      </div>
  );
}

export default App;
